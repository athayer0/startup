import React from 'react';
import Button from 'react-bootstrap/Button';

export function Timeline() {
  return (
    <main className="container my-5">
        <div className="mb-4">
            <p className="mb-1"><b>User:</b> Mystery User</p>
            <p className="mb-1"><b>Mission start date:</b> Sept 9, 2023</p>
            <p><b>Mission end date:</b> August 29, 2025</p>
            <hr/>
        </div>

        <p className="fst-italic text-muted text-center">
            ***Timeline generated using OpenAI GPT API based on your mission dates***
        </p>

        <div className="d-flex align-items-center justify-content-between mb-4">
            <h2 className="fw-bold">Timeline</h2>
            <div>
                <label for="menu" className="form-label me-2">Category:</label>
                <select id="menu" name="menu" className="form-select d-inline-block w-auto">
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
            <div className="list-group-item">
                <p className="mb-1"><u>Feb 9, 2025</u> - <b>Sports</b></p>
                <p className="mb-1">Philadelphia Eagles beat KC Chiefs 40-22 in Super Bowl LIX.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 23 Elders)</p>
                    <button className="btn btn-primary btn-sm">Save Event</button>
                </div>
            </div>

            <div className="list-group-item">
                <p className="mb-1"><u>April 12, 2025</u> - <b>Music</b></p>
                <p className="mb-1">Alex Warren's "Ordinary" reaches #1 on Billboard Top 100 songs.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 41 Elders)</p>
                    <button className="btn btn-primary btn-sm">Save Event</button>
                </div>
            </div>

            <div className="list-group-item">
                <p className="mb-1"><u>May 22, 2025</u> - <b>World News</b></p>
                <p className="mb-1">U.S. Inflation Persists Above Target Amid Tariff and Trade Uncertainty.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 13 Elders)</p>
                    <button className="btn btn-primary btn-sm">Save Event</button>
                </div>
            </div>

            <div className="list-group-item">
                <p className="mb-1"><u>August 26, 2025</u> - <b>Pop Culture</b></p>
                <p className="mb-1">Taylor Swift gets engaged to KC Chiefs Tight End, Travis Kelce.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 38 Elders)</p>
                    <button className="btn btn-primary btn-sm">Save Event</button>
                </div>
            </div>
        </div>
        <div className="text-center mt-4">
            <Button variant="primary" onClick={() => window.location.href = "/saved-events"}>View Saved Events</Button>
        </div>
    </main>
  );
}