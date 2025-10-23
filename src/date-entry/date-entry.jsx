import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function DateEntry() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const userName = localStorage.getItem('userName') || 'Mystery User';

  const handleGenerateTimeline = () => {
    if (startDate && endDate) {
      localStorage.setItem('missionStartDate', startDate);
      localStorage.setItem('missionEndDate', endDate);
      navigate('/timeline');
    } else {
      alert('Please enter both start and end dates');
    }
  };

  return (
    <main className="container my-3">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="mb-4 text-center">
                    <p className="mb-1"><b>User:</b> {userName}</p>
                    <hr/>
                </div>

                <div className="card shadow-sm p-4">
                    <h4 className="card-title mb-4 text-center">Enter your mission start and end dates below:</h4>
                    <div>
                        <div className="mb-3">
                            <label htmlFor="start-date" className="form-label">Start date</label>
                            <input 
                              type="text" 
                              id="start-date" 
                              className="form-control" 
                              placeholder="MM-DD-YYYY"
                              value={startDate}
                              onChange={(e) => setStartDate(e.target.value)}
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="end-date" className="form-label">End date</label>
                            <input 
                              type="text" 
                              id="end-date" 
                              className="form-control" 
                              placeholder="MM-DD-YYYY"
                              value={endDate}
                              onChange={(e) => setEndDate(e.target.value)}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <Button 
                              variant="primary" 
                              onClick={handleGenerateTimeline}
                              disabled={!startDate || !endDate}
                            >
                              Generate Timeline
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}