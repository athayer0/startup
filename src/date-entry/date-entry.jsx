import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

export function DateEntry() {
  const navigate = useNavigate();
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  // Fetch current user from backend
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/user/me');
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
        // Pre-fill dates if they exist
        if (userData.missionStartDate) setStartDate(userData.missionStartDate);
        if (userData.missionEndDate) setEndDate(userData.missionEndDate);
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

  const handleGenerateTimeline = async () => {
    if (startDate && endDate) {
      setLoading(true);
      try {
        // Save mission dates to backend
        const response = await fetch('/api/user/mission-dates', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            startDate, 
            endDate 
          })
        });

        if (!response.ok) {
          throw new Error('Failed to save mission dates');
        }

        // Navigate to timeline after successful save
        navigate('/timeline');
      } catch (error) {
        console.error('Error saving mission dates:', error);
        alert('Failed to save mission dates. Please try again.');
      } finally {
        setLoading(false);
      }
    } else {
      alert('Please enter both start and end dates');
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
    <main className="container my-3">
        <div className="row justify-content-center">
            <div className="col-md-8 col-lg-6">
                <div className="mb-4 text-center">
                    <p className="mb-1"><b>User:</b> {user.userName}</p>
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
                              disabled={!startDate || !endDate || loading}
                            >
                              {loading ? 'Saving...' : 'Generate Timeline'}
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}