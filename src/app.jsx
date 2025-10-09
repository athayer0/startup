import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <div>
        <nav className="navbar navbar-dark bg-primary shadow-sm sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#">Home</a>
                <ul className="navbar-nav ms-auto d-flex flex-row">
                    <li className="nav-item me-3"><a className="nav-link text-white" href="index.html">Login</a></li>
                    <li className="nav-item me-3"><a className="nav-link text-white" href="date-entry.html">Date Entry</a></li>
                    <li className="nav-item me-3"><a className="nav-link text-white" href="timeline.html">Timeline</a></li>
                    <li className="nav-item"><a className="nav-link text-white" href="saved-events.html">Saved Events</a></li>
                </ul>
            </div>
        </nav>

        <header className="py-5 bg-white shadow-sm">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-2 text-center">
                        <img src="/public/bom.png" alt="Left Logo" className="img-fluid" style={{ maxHeight: '200px' }}/>
                    </div>

                    <div className="col-8 text-center">
                        <h1 className="display-4 fw-bold">Welcome Home, Elder!</h1>
                        <p className="lead">Two years is a long time. Let's see what you missed...</p>
                        <p className="text-muted">
                            🌍 <em>Returned missionaries currently online:</em>
                            <span className="fw-semibold">47</span>
                        </p>
                    </div>

                    <div className="col-2 text-center">
                        <img src="/public/returnedwithhonor.jpg" alt="Right Logo" className="img-fluid" style={{ maxHeight: '200px' }}/>
                    </div>
                </div>
            </div>
        </header>

        <main>App components go here</main>

        <footer className="bg-primary text-white text-center py-3 mt-5 sticky-bottom">
            <div className="container">
                <p className="mb-1">Created by <strong>Aaron Thayer</strong></p>
                <a href="https://github.com/athayer0/startup" className="text-white text-decoration-underline">GitHub</a>
            </div>
        </footer>
    </div>
  );
}