import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function HowItWorks() {
    return (
        <section id="mainSection" className="p-5 main-section">
            <div className="container">
                <div className="content-box p-4 rounded-4 bg-light" style={{ border: '4px solid black' }}>
                    <div className="row">
                        <div className="col">
                            <h2>How does it work?</h2>
                            <p>We grab the latest trade prices from big crypto exchanges and spot the price differences for you. Check them out on our "Start Tracking" page.
                                <br /><br />Here's what the colors mean:</p>
                            <ul>
                                <li><strong>White:</strong> If the price difference is between 0 to 0.5%, we mark it white. It's like a heads-up that it wont be worth the hustle.</li>
                                <li><strong>Orange:</strong> See an orange? That's a 0.5 to 1% price gap. It's like a nudge saying, "Hey, there could be something happening here!"</li>
                                <li><strong>Green:</strong> Green means go! Over 1% difference? That's your green light for a good arbitrage chance.</li>
                            </ul>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Whats Arbitraging?</h3>
                            <ol>
                                <li><strong className="text-success">Buy Low:</strong> Snag cryptocurrency cheap on one exchange.</li>
                                <li><strong>Move It:</strong> Zip it over to where it's selling for more.</li>
                                <li><strong className="text-danger">Sell High:</strong> Cash in on the difference.</li>
                                <li><strong>Repeat:</strong> And just like that, you're ready for another round.</li>
                            </ol>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <h3>Tiny Details, Big Difference</h3>
                            <p>Don't forget, moving and trading crypto comes with fees. Make sure the math adds up by checking the fees on both exchanges before you leap.</p>
                            <p>Usually, you'll want at least a 1% price difference to make it worthwhile, but it depends on the game you're playing (a.k.a. the currency and exchange).</p>
                            <p>Ready for some crypto arbitrage?</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default HowItWorks;
