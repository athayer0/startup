import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function SavedEvents() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'Mystery User';
    const startDate = localStorage.getItem('missionStartDate') || 'Not set';
    const endDate = localStorage.getItem('missionEndDate') || 'Not set';
    
    const [savedEvents, setSavedEvents] = useState([
        {
            id: 1,
            date: 'Feb 9, 2025',
            category: 'Sports',
            description: 'Philadelphia Eagles beat KC Chiefs 40-22 in Super Bowl LIX.',
            savedBy: 23,
            isSaved: true
        },
        {
            id: 4,
            date: 'August 26, 2025',
            category: 'Pop Culture',
            description: 'Taylor Swift gets engaged to KC Chiefs Tight End, Travis Kelce.',
            savedBy: 38,
            isSaved: true
        }
    ]);
    const [loading, setLoading] = useState(false);

    return (
        <main className="container my-5">
            <div className="mb-4">
                <p className="mb-1"><b>User:</b> {userName}</p>
                <p className="mb-1"><b>Mission start date:</b> {startDate}</p>
                <p><b>Mission end date:</b> {endDate}</p>
                <hr/>
                <h2 className="fw-bold">Saved Events</h2>
            </div>

            <div className="list-group">
                {savedEvents.map(event => (
                    <div key={event.id} className="list-group-item">
                        <p className="mb-1"><u>{event.date}</u> - <b>{event.category}</b></p>
                        <p className="mb-1">{event.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">💾 (Saved by {event.savedBy} Elders)</p>
                            <button className="btn btn-danger btn-sm">
                                Remove Event
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => navigate('/timeline')}>
                    Back to Timeline
                </Button>
            </div>
        </main>
    );
}