import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function Timeline() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Fetch current user from backend
    const fetchUser = async () => {
        try {
            const response = await fetch('/api/user/me');
            if (response.ok) {
                const userData = await response.json();
                setUser(userData);
            } else {
                // Not authenticated, redirect to login
                navigate('/');
            }
        } catch (error) {
            console.error('Error fetching user:', error);
            navigate('/');
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    const fetchEventsFromAPI = async (startDate, endDate) => {
        setLoading(true);
        try {
            // Fetch generated timeline from backend
            const response = await fetch('/api/timeline/generate', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ startDate, endDate })
            });

            if (!response.ok) {
                throw new Error('Failed to fetch timeline');
            }

            const data = await response.json();
            
            // Fetch saved events to mark which ones are already saved
            const savedResponse = await fetch('/api/saved-events');
            const savedData = await savedResponse.json();
            const savedEventIds = savedData.savedEvents.map(e => e.id);
            
            // Mark events as saved if they exist in saved events
            const eventsWithSavedStatus = data.events.map(event => ({
                ...event,
                isSaved: savedEventIds.includes(event.id)
            }));
            
            setEvents(eventsWithSavedStatus);
        } catch (error) {
            console.error('Error fetching timeline:', error);
            alert('Failed to generate timeline. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        if (user && user.missionStartDate && user.missionEndDate) {
            fetchEventsFromAPI(user.missionStartDate, user.missionEndDate);
        }
    }, [user]);

    const handleSaveEvent = async (eventId) => {
        try {
            const eventToSave = events.find(e => e.id === eventId);
            
            // Save event via API
            const response = await fetch('/api/saved-events', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ event: eventToSave })
            });

            if (!response.ok) {
                throw new Error('Failed to save event');
            }

            // Update local state
            setEvents(events.map(event => 
                event.id === eventId ? { ...event, isSaved: true, savedBy: event.savedBy + 1 } : event
            ));
        } catch (error) {
            console.error('Error saving event:', error);
            alert('Failed to save event. Please try again.');
        }
    };

    const filteredEvents = selectedCategory === 'all' 
        ? events 
        : events.filter(event => event.category.toLowerCase().replace(' ', '-') === selectedCategory);

    if (!user) {
        return (
            <div className="container my-5 text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <main className="container my-5">
            <div className="mb-4">
                <p className="mb-1"><b>User:</b> {user.userName}</p>
                <p className="mb-1"><b>Mission start date:</b> {user.missionStartDate || 'Not set'}</p>
                <p><b>Mission end date:</b> {user.missionEndDate || 'Not set'}</p>
                <hr/>
            </div>

            <p className="fst-italic text-muted text-center">
                ***Timeline generated using OpenAI GPT API based on your mission dates***
            </p>

            <div className="d-flex align-items-center justify-content-between mb-4">
                <h2 className="fw-bold">Timeline</h2>
                <div>
                    <label htmlFor="menu" className="form-label me-2">Category:</label>
                    <select 
                        id="menu" 
                        name="menu" 
                        className="form-select d-inline-block w-auto"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="world-news">World News</option>
                        <option value="pop-culture">Pop Culture</option>
                        <option value="sports">Sports</option>
                        <option value="movies">Movies</option>
                        <option value="music">Music</option>
                        <option value="memes">Memes</option>
                        <option value="tech">Tech</option>
                    </select>
                </div>
            </div>

            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                    <p className="mt-3">Generating your timeline...</p>
                </div>
            ) : !user.missionStartDate || !user.missionEndDate ? (
                <div className="alert alert-info text-center">
                    Please set your mission dates to generate a timeline.
                </div>
            ) : events.length === 0 ? (
                <div className="alert alert-info text-center">
                    No events to display.
                </div>
            ) : (
                <div className="list-group">
                    {filteredEvents.map(event => (
                        <div key={event.id} className="list-group-item">
                            <p className="mb-1"><u>{event.date}</u> - <b>{event.category}</b></p>
                            <p className="mb-1">{event.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">💾 (Saved by {event.savedBy} Elders)</p>
                                <button 
                                    className="btn btn-primary btn-sm"
                                    onClick={() => handleSaveEvent(event.id)}
                                    disabled={event.isSaved}
                                >
                                    {event.isSaved ? 'Saved' : 'Save Event'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => navigate('/saved-events')}>
                    View Saved Events
                </Button>
            </div>
        </main>
    );
}