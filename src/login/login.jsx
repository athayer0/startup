import React from 'react';

export function Login() {
  return (
    <main className="container my-4">
        <div className="row justify-content-center">
            <div className="col-md-6">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Sign in here:</h2>
                        <form action="date-entry.html" method="get">
                            <div className="mb-3">
                                <label for="username" className="form-label">Username</label>
                                <input type="text" id="username" className="form-control" placeholder="Enter username"/>
                            </div>
                            <div className="mb-3">
                                <label for="password" className="form-label">Password</label>
                                <input type="password" id="password" className="form-control" placeholder="Enter password"/>
                            </div>
                            <div className="d-grid gap-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                                <button type="submit" className="btn btn-outline-secondary">Sign Up</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}