import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BtcAddressImage from './assets/BTC-Adress.png';
import SolAddressImage from './assets/SOL-Adress.png';

function Support() {
  return (
    <section id="supportSection" className="p-5 main-section text-center minimum-height">
      <div className="container">
        <div className="content-box p-4 rounded-4 bg-light" style={{ border: '4px solid black', paddingBottom: '20px' }}>
          <div className="row">
            <div className="col">
              <h2>Did you manage to <strong className="text-success">Profit?</strong></h2><br />
              <p style={{ fontSize: '18px' }}>As a software engineering student, I built this free arbitrage tracker to enhance your trading game. 
                  <br />Consider leaving a tip to support my studies and the site's upkeep. Every bit is appreciated!</p>
            </div>
          </div>
          <div className="row mt-4">
            {/* First QR Code */}
            <div className="col-12 col-md-6 text-center">
              <img src={BtcAddressImage} alt="QR Code 1" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="crypto-address"><br /><strong className="text-dark">BTC:</strong> 1JwTj5DwVtWgBugjhNDfpLZUKdHcEpcTu1</p>
              <h2 style={{ fontSize: '20px' }} id="donation-counter"><strong>BTC received : </strong><strong className="text-success">0,00124 BTC</strong></h2>
            </div>
            {/* Second QR Code */}
            <div className="col-12 col-md-6 text-center">
              <img src={SolAddressImage} alt="QR Code 2" style={{ maxWidth: '100%', height: 'auto' }} />
              <p className="crypto-address"><br /><strong className="text-dark">SOL:</strong> HATesTFaQ7hFVob6BLafjzP28hRvv4qnvMk48zHEgCE</p>
              <h2 style={{ fontSize: '20px' }} id="donation-counter"><strong>SOL received : </strong>  <strong className="text-success" >0,23946 SOL</strong></h2>
            </div>
          </div>
        </div>   
      </div>
    </section>
  );
}

export default Support;