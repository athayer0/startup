import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function SavedEvents() {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [savedEvents, setSavedEvents] = useState([]);
    const [loading, setLoading] = useState(false);

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

    const fetchSavedEvents = async () => {
        setLoading(true);
        try {
            // Fetch saved events from backend
            const response = await fetch('/api/saved-events');
            
            if (!response.ok) {
                throw new Error('Failed to fetch saved events');
            }

            const data = await response.json();
            setSavedEvents(data.savedEvents);
        } catch (error) {
            console.error('Error fetching saved events:', error);
            alert('Failed to load saved events. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchUser();
    }, []);

    useEffect(() => {
        if (user) {
            fetchSavedEvents();
        }
    }, [user]);

    const handleRemoveEvent = async (eventId) => {
        try {
            // Remove event via API
            const response = await fetch(`/api/saved-events/${eventId}`, {
                method: 'DELETE'
            });

            if (!response.ok) {
                throw new Error('Failed to remove event');
            }

            // Update local state
            const updatedEvents = savedEvents.filter(event => event.id !== eventId);
            setSavedEvents(updatedEvents);
        } catch (error) {
            console.error('Error removing event:', error);
            alert('Failed to remove event. Please try again.');
        }
    };

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
                            <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">{event.description}</p>
                                <button 
                                    className="btn btn-danger btn-sm ms-3"
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