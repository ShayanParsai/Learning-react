import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Newsletter() {
    return (
        <div id="newsletter" style={{ borderBottom: '5px solid black', borderTop: '5px solid black' }}>
            <section className="bg-success bg-gradient text-light p-3">
                <div className="container">
                    <div className="d-md-flex justify-content-between align-items-center">
                        <h3 className="mb-3 mb-md-0 text-stroke">Subscribe for Arbitrage signals</h3>
                        <form name="signupForm" method="POST" className="email-form d-flex" data-netlify="true">
                            <input type="email" name="email" className="form-control" placeholder="Enter your email" required />
                            <button type="submit" className="btn btn-dark btn-lg text-stroke ms-2">Submit</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Newsletter;