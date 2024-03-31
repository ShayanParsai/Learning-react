import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Faq() {
    return (
      <section className="p-5 main-section background-of-all">
        <div className="container py-3">
          <div className="content-box p-4 rounded-4 bg-light" style={{ border: '4px solid black'}}>
            <div className="row">
              <div className="col">
                <h2 className="text-center" style={{ fontSize: '28px', fontWeight: 'bold' }}>Frequently Asked Questions</h2>
                <div className="faq-item">
                  <h3 style={{ fontSize: '22px' }}>What's arbitrage?</h3>
                  <p>Arbitrage is the art of spotting and capitalizing on price differences across markets. It involves purchasing a cryptocurrency on one exchange where it's priced lower and selling it on another where the price is higher.</p>
                </div>
                <div className="faq-item">
                  <h3 style={{ fontSize: '22px' }}>Is it possible to lose money?</h3>
                  <p>Absolutely. Market fluctuations can occur during the transfer period, potentially leading to a sale at a lower price than anticipated. It's crucial to stay vigilant and factor in these risks.</p>
                </div>
                <div className="faq-item">
                  <h3 style={{ fontSize: '22px' }}>How much money can I make?</h3>
                  <p>Your earnings hinge on the percentage differences in prices between exchanges and the amount you're leveraging for arbitrage. A common benchmark is a 1% gain on the total amount invested per transaction.</p>
                </div>
                <div className="faq-item">
                  <h3 style={{ fontSize: '22px' }}>Is arbitrage illegal?</h3>
                  <p>Not at all. Arbitrage is a legal and widely used strategy in various financial markets, including cryptocurrencies.</p>
                </div>
                <div className="faq-item">
                  <h3 style={{ fontSize: '22px' }}>When is the best time to arbitrage?</h3>
                  <p>Optimal arbitrage opportunities typically arise in more stable, less volatile market conditions. High volatility increases the risk of significant price shifts during transfers, affecting potential profits or losses.</p>
                </div>
              </div>
            </div>
          </div>   
        </div>
      </section>
    );
  }

export default Faq;