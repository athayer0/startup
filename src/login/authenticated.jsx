import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'react-bootstrap/Button';

import './authenticated.css';

export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userName');
        props.onLogout();
    }

    return (
        <main id="user-content">
            <div className="d-flex flex-column justify-content-center align-items-center flex-grow-1 text-center py-5">
                <h2 className="mb-4">
                    Thank you for your service, <span className="text-primary fw-bold">{props.userName}</span>!
                </h2>

                <div className="d-flex gap-4 mt-3">
                    <Button
                        variant="primary"
                        size="lg"
                        onClick={() => navigate('/date-entry')}
                    >
                        Start
                    </Button>
                    <Button
                        variant="outline-secondary"
                        size="lg"
                        onClick={logout}
                    >
                        Logout
                    </Button>
                </div>
            </div>
        </main>
    );
}
