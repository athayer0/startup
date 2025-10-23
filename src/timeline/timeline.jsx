import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function Timeline() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('userName') || 'Mystery User';
    const startDate = localStorage.getItem('missionStartDate') || 'Not set';
    const endDate = localStorage.getItem('missionEndDate') || 'Not set';
    
    const [events, setEvents] = useState([
        {
            id: 1,
            date: 'Feb 9, 2025',
            category: 'Sports',
            description: 'Philadelphia Eagles beat KC Chiefs 40-22 in Super Bowl LIX.',
            savedBy: 23,
            isSaved: false
        },
        {
            id: 2,
            date: 'April 12, 2025',
            category: 'Music',
            description: 'Alex Warren\'s "Ordinary" reaches #1 on Billboard Top 100 songs.',
            savedBy: 41,
            isSaved: false
        },
        {
            id: 3,
            date: 'May 22, 2025',
            category: 'World News',
            description: 'U.S. Inflation Persists Above Target Amid Tariff and Trade Uncertainty.',
            savedBy: 13,
            isSaved: false
        },
        {
            id: 4,
            date: 'August 26, 2025',
            category: 'Pop Culture',
            description: 'Taylor Swift gets engaged to KC Chiefs Tight End, Travis Kelce.',
            savedBy: 38,
            isSaved: false
        }
    ]);
    const [loading, setLoading] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('all');

    return (
        <main className="container my-5">
            <div className="mb-4">
                <p className="mb-1"><b>User:</b> {userName}</p>
                <p className="mb-1"><b>Mission start date:</b> {startDate}</p>
                <p><b>Mission end date:</b> {endDate}</p>
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

            <div className="list-group">
                {events.map(event => (
                    <div key={event.id} className="list-group-item">
                        <p className="mb-1"><u>{event.date}</u> - <b>{event.category}</b></p>
                        <p className="mb-1">{event.description}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <p className="mb-0">💾 (Saved by {event.savedBy} Elders)</p>
                            <button className="btn btn-primary btn-sm">
                                Save Event
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-4">
                <Button variant="primary" onClick={() => navigate('/saved-events')}>
                    View Saved Events
                </Button>
            </div>
        </main>
    );
}