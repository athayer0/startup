import React from 'react';
import Button from 'react-bootstrap/Button';

export function Login() {
  return (
    <main className="container my-4">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Sign in here:</h2>
                        <div>
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="Enter username"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="d-grid gap-2">
                                <Button variant="primary" onClick={() => window.location.href = "/date-entry"}>Login</Button>
                                <Button variant="outline-secondary" onClick={() => window.location.href = "/date-entry"}>Sign Up</Button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}