import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TwitterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16">
        <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.084.797A3.286 3.286 0 0 0 7.88 6.027 9.325 9.325 0 0 1 1.112 2.13 3.286 3.286 0 0 0 2.13 8.458 3.273 3.273 0 0 1 .64 7.884v.04a3.285 3.285 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 0 13.545a9.29 9.29 0 0 0 5.026 1.455"/>
    </svg>
);

function Footer() {
    return (
        <footer className="p-2 bg-dark bg-gradient text-light">
            <div className="container">
                <div className="d-flex justify-content-center align-items-center">
                    <a href="https://twitter.com/TrackArbitrage" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm" style={{ border: '2px solid black', borderRadius: '10px' }}>
                        <TwitterIcon />
                        <strong className="text-stroke text-light desktop-text">Follow on Twitter for alerts</strong>
                        <strong className="text-stroke text-light mobile-text">Twitter</strong>
                    </a>
                    <h2 className="text-center mb-3 flex-grow-1">
                        <strong className="lead text-stroke">
                        Copyright © 2024. Arbitrage Tracker - Design By {' '}
                        <a href="https://webfixer.se/" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff' }}>
                            <span style={{ color: '#467FF7' }}>Webfixer</span>
                        </a>
                        </strong>
                    </h2>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
