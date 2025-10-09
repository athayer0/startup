import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import { Login } from './login/login';
import { DateEntry } from './date-entry/date-entry';
import { Timeline } from './timeline/timeline';
import { SavedEvents } from './saved-events/saved-events';

export default function App() {
  return (
    <BrowserRouter>
        <div>
            <nav className="navbar navbar-dark bg-primary shadow-sm sticky-top">
                <div className="container">
                    <a className="navbar-brand" href="#">Home</a>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                        <li className="nav-item me-3"><NavLink className="nav-link text-white" to="">Login</NavLink></li>
                        <li className="nav-item me-3"><NavLink className="nav-link text-white" to="date-entry">Date Entry</NavLink></li>
                        <li className="nav-item me-3"><NavLink className="nav-link text-white" to="timeline">Timeline</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link text-white" to="saved-events">Saved Events</NavLink></li>
                    </ul>
                </div>
            </nav>

            <header className="py-5 bg-white shadow-sm">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-2 text-center">
                            <img src="/bom.png" alt="Left Logo" className="img-fluid" style={{ maxHeight: '200px' }}/>
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
                            <img src="/returnedwithhonor.jpg" alt="Right Logo" className="img-fluid" style={{ maxHeight: '200px' }}/>
                        </div>
                    </div>
                </div>
            </header>

            <Routes>
                <Route path='/' element={<Login />} exact />
                <Route path='/date-entry' element={<DateEntry />} />
                <Route path='/timeline' element={<Timeline />} />
                <Route path='/saved-events' element={<SavedEvents />} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            <footer className="bg-primary text-white text-center py-3 mt-5 sticky-bottom">
                <div className="container">
                    <p className="mb-1">Created by <strong>Aaron Thayer</strong></p>
                    <a href="https://github.com/athayer0/startup" className="text-white text-decoration-underline">GitHub</a>
                </div>
            </footer>
        </div>
    </BrowserRouter>
  );
}

function NotFound() {
  return <main className="container-fluid bg-secondary text-center">404: Return to sender. Address unknown.</main>;
}