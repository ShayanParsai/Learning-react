import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import arbitrageTrackerLogo from './assets/ArbitrageTrackerLogo.png';


function Semiheader() {
    return (
        <section className="bg-dark bg-gradient text-light p-1 text-center text-sm-start" style={{borderBottom: '5px solid black' }}>
            <div className="container">
                <div className="d-sm-flex align-items-center justify-content-between">
                    <div className="text-stroke">
                        <h1>Track <span className="text-success">Arbitrage</span> opportunities across exchanges</h1>
                        <p className="lead my-4">
                            Arbitrage tracker will find you the best deals.
                            <br /><strong className="text-success">Buy Low</strong> on one exchange, <strong className="text-danger">Sell Higher</strong> on another.<br />
                        </p>
                    </div>
                    <img className="img-fluid d-none d-lg-block" src={arbitrageTrackerLogo} alt="" style={{ width: '15%' }} />
                </div>
            </div>
        </section>
    );
}

export default Semiheader;