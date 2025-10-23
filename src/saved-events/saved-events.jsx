import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function SavedEvents() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'Mystery User';
    const startDate = localStorage.getItem('missionStartDate') || 'Not set';
    const endDate = localStorage.getItem('missionEndDate') || 'Not set';
    
    const [savedEvents, setSavedEvents] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchSavedEvents = async () => {
        setLoading(true);
        try {
            const events = JSON.parse(localStorage.getItem('savedEvents') || '[]');
            setSavedEvents(events);
        } catch (error) {
            console.error('Error fetching saved events:', error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchSavedEvents();
    }, []);

    const handleRemoveEvent = async (eventId) => {
        try {
            const updatedEvents = savedEvents.filter(event => event.id !== eventId);
            setSavedEvents(updatedEvents);
            localStorage.setItem('savedEvents', JSON.stringify(updatedEvents));
        } catch (error) {
            console.error('Error removing event:', error);
        }
    };

    return (
        <main className="container my-5">
            <div className="mb-4">
                <p className="mb-1"><b>User:</b> {userName}</p>
                <p className="mb-1"><b>Mission start date:</b> {startDate}</p>
                <p><b>Mission end date:</b> {endDate}</p>
                <hr/>
                <h2 className="fw-bold">Saved Events</h2>
            </div>

            {loading ? (
                <div className="text-center my-5">
                    <div className="spinner-border text-primary" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>
                </div>
            ) : savedEvents.length === 0 ? (
                <div className="alert alert-info text-center">
                    No saved events yet. Go back to the timeline to save some events!
                </div>
            ) : (
                <div className="list-group">
                    {savedEvents.map(event => (
                        <div key={event.id} className="list-group-item">
                            <p className="mb-1"><u>{event.date}</u> - <b>{event.category}</b></p>
                            <p className="mb-1">{event.description}</p>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">💾 (Saved by {event.savedBy} Elders)</p>
                                <button 
                                    className="btn btn-danger btn-sm"
                                    onClick={() => handleRemoveEvent(event.id)}
                                >
                                    Remove Event
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => navigate('/timeline')}>
                    Back to Timeline
                </Button>
            </div>
        </main>
    );
}