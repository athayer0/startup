import React from 'react';
import Button from 'react-bootstrap/Button';

export function SavedEvents() {
  return (
    <main className="container my-5">
        <div className="mb-4">
            <p className="mb-1"><b>User:</b> Mystery User</p>
            <p className="mb-1"><b>Mission start date:</b> Sept 9, 2023</p>
            <p><b>Mission end date:</b> August 29, 2025</p>
            <hr/>
            <h2 className="fw-bold">Saved Events</h2>
        </div>

        <div className="list-group">
            <div className="list-group-item">
                <p className="mb-1"><u>Feb 9, 2025</u> - <b>Sports</b></p>
                <p className="mb-1">Philadelphia Eagles beat KC Chiefs 40-22 in Super Bowl LIX.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 23 Elders)</p>
                    <button className="btn btn-danger btn-sm">Remove Event</button>
                </div>
            </div>

            <div className="list-group-item">
                <p className="mb-1"><u>August 26, 2025</u> - <b>Pop Culture</b></p>
                <p className="mb-1">Taylor Swift gets engaged to KC Chiefs Tight End, Travis Kelce.</p>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="mb-0">💾 (Saved by 38 Elders)</p>
                    <button className="btn btn-danger btn-sm">Remove Event</button>
                </div>
            </div>
        </div>
        <div className="text-center mt-4">
            <Button variant="primary" onClick={() => window.location.href = "/timeline"}>Back to Timeline</Button>
        </div>
    </main>
  );
}