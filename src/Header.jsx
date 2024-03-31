import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-success bg-gradient navbar-dark py-1" style={{ borderBottom: '4px solid black' }}>
            <div className="container">
                <a href="/" className="navbar-brand text-stroke fw-bold">Arbitrage Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link text-light text-stroke fw-bold">Start Tracking</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/how-it-works" className="nav-link text-light text-stroke fw-bold">How does it work?</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/support" className="nav-link text-light text-stroke fw-bold">Support me</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/faq" className="nav-link text-light text-stroke fw-bold">FAQ</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;