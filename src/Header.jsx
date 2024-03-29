import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <nav className="navbar navbar-expand-lg bg-success bg-gradient navbar-dark py-1" style={{ borderBottom: '4px solid black' }}>
            <div className="container">
                <a href="index.html" className="navbar-brand text-stroke fw-bold">Arbitrage Tracker</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navmenu">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a href="index.html" className="nav-link text-light text-stroke fw-bold">Start Tracking</a>
                        </li>
                        <li className="nav-item">
                            <a href="how.html" className="nav-link text-light text-stroke fw-bold">How does it work?</a>
                        </li>
                        <li className="nav-item">
                            <a href="support.html" className="nav-link text-light text-stroke fw-bold">Support me</a>
                        </li>
                        <li className="nav-item">
                            <a href="faq.html" className="nav-link text-light text-stroke fw-bold">FAQ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Header;