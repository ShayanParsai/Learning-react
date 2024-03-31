import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import btcLogo from './assets/BTC-USD.png';
import ethLogo from './assets/ETH-USD.png';
import solLogo from './assets/SOL-USD.png';
import axsLogo from './assets/AXS-USD.png';
import dogeLogo from './assets/DOGE-USD.png';
import xrpLogo from './assets/XRP-USD.png';
import sandLogo from './assets/SAND-USD.png';
import manaLogo from './assets/MANA-USD.png';
import avaxLogo from './assets/AVAX-USD.png';
import ltcLogo from './assets/LTC-USD.png';
import linkLogo from './assets/LINK-USD.png';
import adaLogo from './assets/ADA-USD.png';
import icpLogo from './assets/ICP-USD.png';
import dotLogo from './assets/DOT-USD.png';
import xlmLogo from './assets/XLM-USD.png';
import uniLogo from './assets/UNI-USD.png';
import nearLogo from './assets/NEAR-USD.png';
import trxLogo from './assets/TRX-USD.png';
import maticLogo from './assets/MATIC-USD.png';
import bchLogo from './assets/BCH-USD.png';
import aptLogo from './assets/APT-USD.png';
import mkrLogo from './assets/MKR-USD.png';
import ldoLogo from './assets/LDO-USD.png';
import suiLogo from './assets/SUI-USD.png';
import filLogo from './assets/FIL-USD.png';
import etcLogo from './assets/ETC-USD.png';
import atomLogo from './assets/ATOM-USD.png';
import arbLogo from './assets/ARB-USD.png';
import imxLogo from './assets/IMX-USD.png';
import rndrLogo from './assets/RNDR-USD.png';
import grtLogo from './assets/GRT-USD.png';
import opLogo from './assets/OP-USD.png';
import injLogo from './assets/INJ-USD.png';
import ftmLogo from './assets/FTM-USD.png';
import tiaLogo from './assets/TIA-USD.png';
import fetLogo from './assets/FET-USD.png';
import algoLogo from './assets/ALGO-USD.png';
import seiLogo from './assets/SEI-USD.png';
import flowLogo from './assets/FLOW-USD.png';
import galaLogo from './assets/GALA-USD.png';
import aaveLogo from './assets/AAVE-USD.png';
import egldLogo from './assets/EGLD-USD.png';
import dydxLogo from './assets/DYDX-USD.png';
import strkLogo from './assets/STRK-USD.png';
import snxLogo from './assets/SNX-USD.png';

const Prices = () => {
  const logos = { // All logos
    'BTC-USD': btcLogo,
    'ETH-USD': ethLogo,
    'SOL-USD': solLogo,
    'AXS-USD': axsLogo,
    'DOGE-USD': dogeLogo,
    'XRP-USD': xrpLogo,
    'SAND-USD': sandLogo,
    'MANA-USD': manaLogo,
    'AVAX-USD': avaxLogo,
    'LTC-USD': ltcLogo,
    'LINK-USD': linkLogo,
    'ADA-USD': adaLogo,
    'ICP-USD': icpLogo,
    'DOT-USD': dotLogo,
    'XLM-USD': xlmLogo,
    'UNI-USD': uniLogo,
    'NEAR-USD': nearLogo,
    'TRX-USD': trxLogo,
    'MATIC-USD': maticLogo,
    'BCH-USD': bchLogo,
    'APT-USD': aptLogo,
    'MKR-USD': mkrLogo,
    'LDO-USD': ldoLogo,
    'SUI-USD': suiLogo,
    'FIL-USD': filLogo,
    'ETC-USD': etcLogo,
    'ATOM-USD': atomLogo,
    'ARB-USD': arbLogo,
    'IMX-USD': imxLogo,
    'RNDR-USD': rndrLogo,
    'GRT-USD': grtLogo,
    'OP-USD': opLogo,
    'INJ-USD': injLogo,
    'FTM-USD': ftmLogo,
    'TIA-USD': tiaLogo,
    'FET-USD': fetLogo,
    'ALGO-USD': algoLogo,
    'SEI-USD': seiLogo,
    'FLOW-USD': flowLogo,
    'GALA-USD': galaLogo,
    'AAVE-USD': aaveLogo,
    'EGLD-USD': egldLogo,
    'DYDX-USD': dydxLogo,
    'STRK-USD': strkLogo,
    'SNX-USD': snxLogo
  };
  const pairs = [ // All pairs
    'btcusdt', 'ethusdt', 'solusdt',
    'axsusdt', 'dogeusdt', 'xrpusdt', 'sandusdt', 'manausdt', 'avaxusdt', 'ltcusdt',
    'linkusdt', 'adausdt', 'icpusdt', 'dotusdt', 'xlmusdt', 'uniusdt', 'nearusdt', 
    'trxusdt', 'maticusdt', 'bchusdt', 'aptusdt', 'filusdt', 'etcusdt', 'atomusdt', 
    'arbusdt', 'imxusdt', 'rndrusdt', 'grtusdt', 'opusdt', 'injusdt', 
    'ftmusdt', 'mkrusdt', 'ldousdt', 'tiausdt', 'fetusdt', 'suiusdt', 
    'algousdt', 'seiusdt', 'flowusdt', 'galausdt', 'aaveusdt', 'egldusdt', 
    'dydxusdt', 'strkusdt', 'snxusdt'
  ]; 
  const [prices, setPrices] = useState({ // List of the pairs we want to fetch per exchange
    binance: {
      btcusdt: 'Loading...',
      ethusdt: 'Loading...',
      solusdt: 'Loading...',
      axsusdt: 'Loading...',
      dogeusdt: 'Loading...',
      xrpusdt: 'Loading...',
      sandusdt: 'Loading...',
      manausdt: 'Loading...',
      avaxusdt: 'Loading...',
      ltcusdt: 'Loading...',
      linkusdt: 'Loading...',
      adausdt: 'Loading...',
      icpusdt: 'Loading...',
      dotusdt: 'Loading...',
      xlmusdt: 'Loading...',
      uniusdt: 'Loading...',
      nearusdt: 'Loading...',
      trxusdt: 'Loading...',
      maticusdt: 'Loading...',
      bchusdt: 'Loading...',
      aptusdt: 'Loading...',
      filusdt: 'Loading...',
      etcusdt: 'Loading...',
      atomusdt: 'Loading...',
      arbusdt: 'Loading...',
      imxusdt: 'Loading...',
      rndrusdt: 'Loading...',
      grtusdt: 'Loading...',
      opusdt: 'Loading...',
      injusdt: 'Loading...',
      ftmusdt: 'Loading...',
      mkrusdt: 'Loading...',
      ldousdt: 'Loading...',
      tiausdt: 'Loading...',
      fetusdt: 'Loading...',
      suiusdt: 'Loading...',
      algousdt: 'Loading...',
      seiusdt: 'Loading...',
      flowusdt: 'Loading...',
      galausdt: 'Loading...',
      aaveusdt: 'Loading...',
      egldusdt: 'Loading...',
      dydxusdt: 'Loading...',
      strkusdt: 'Loading...',
      snxusdt: 'Loading...',
    },
    bybit: {
      btcusdt: 'Loading...',
      ethusdt: 'Loading...',
      solusdt: 'Loading...',
      axsusdt: 'Loading...',
      dogeusdt: 'Loading...',
      xrpusdt: 'Loading...',
      sandusdt: 'Loading...',
      manausdt: 'Loading...',
      avaxusdt: 'Loading...',
      ltcusdt: 'Loading...',
      linkusdt: 'Loading...',
      adausdt: 'Loading...',
      icpusdt: 'Loading...',
      dotusdt: 'Loading...',
      xlmusdt: 'Loading...',
      uniusdt: 'Loading...',
      nearusdt: 'Loading...',
      trxusdt: 'Loading...',
      maticusdt: 'Loading...',
      bchusdt: 'Loading...',
      aptusdt: 'Loading...',
      filusdt: 'Loading...',
      etcusdt: 'Loading...',
      atomusdt: 'Loading...',
      arbusdt: 'Loading...',
      imxusdt: 'Loading...',
      rndrusdt: 'Loading...',
      grtusdt: 'Loading...',
      opusdt: 'Loading...',
      injusdt: 'Loading...',
      ftmusdt: 'Loading...',
      mkrusdt: 'Loading...',
      ldousdt: 'Loading...',
      tiausdt: 'Loading...',
      fetusdt: 'Loading...',
      suiusdt: 'Loading...',
      algousdt: 'Loading...',
      seiusdt: 'Loading...',
      flowusdt: 'Loading...',
      galausdt: 'Loading...',
      aaveusdt: 'Loading...',
      egldusdt: 'Loading...',
      dydxusdt: 'Loading...',
      strkusdt: 'Loading...',
      snxusdt: 'Loading...',
    }
  });
  const exchanges = ['Binance', 'Bybit']; // List of exchanges
  
  useEffect(() => { // Websocket connections
    const getDecimalPlaces = (price) => {
        if (price >= 250) {
            return 1;
        } else if (price >= 50) {
            return 2;
        } else if (price > 0.99) {
            return 3;
        } else {
            return 4;
        }
    };

    const binanceWs = new WebSocket('wss://stream.binance.com:9443/stream'); // Binance WebSocket Setup
    binanceWs.onopen = () => {
        binanceWs.send(JSON.stringify({
            method: "SUBSCRIBE",
            params: Object.keys(prices.binance).map(pair => `${pair}@aggTrade`),
            id: 1
        }));
    };
    binanceWs.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.data && message.stream) {
            const pair = message.stream.split('@')[0];
            const price = parseFloat(message.data.p);
            const decimalPlaces = getDecimalPlaces(price);
            setPrices(prevPrices => ({
                ...prevPrices,
                binance: {
                    ...prevPrices.binance,
                    [pair]: price.toFixed(decimalPlaces),
                },
            }));
        }
    };

    const bybitWs = new WebSocket('wss://stream.bybit.com/v5/public/linear'); // Bybit WebSocket Setup
    bybitWs.onopen = () => {
        bybitWs.send(JSON.stringify({
            op: "subscribe",
            args: Object.keys(prices.bybit).map(pair => `tickers.${pair.toUpperCase()}`)
        }));
    };
    bybitWs.onmessage = (event) => {
        const message = JSON.parse(event.data);
        if (message.topic && message.data) {
            const symbol = message.topic.split('.')[1].toLowerCase();
            if (message.data.lastPrice) {
                const lastPrice = parseFloat(message.data.lastPrice);
                const decimalPlaces = getDecimalPlaces(lastPrice);
                setPrices(prevPrices => ({
                    ...prevPrices,
                    bybit: {
                        ...prevPrices.bybit,
                        [symbol]: lastPrice.toFixed(decimalPlaces),
                    },
                }));
            }
        }
    };

    return () => {
        binanceWs.close();
        bybitWs.close();
    };
}, []);

  return ( // The Table setup
    <div className="container mb-5">
      <table className="table table-striped table-bordered">
        <thead className="border border-black">
          <tr>
            <th>Currency Pairs in USD</th>
            {exchanges.map((exchange) => (
              <th key={exchange}>{exchange}</th>
            ))}
            <th>Buy at - Sell at - Percentage diff</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {pairs.map((pair) => {
          const priceData = exchanges.map((exchange) => ({
            name: exchange,
            price: parseFloat(prices[exchange.toLowerCase()][pair]),
          })).filter(({ price }) => !isNaN(price));
          if (priceData.length === 0) return <tr><td colSpan="exchanges.length + 2">Loading...</td></tr>;
          const minPriceData = priceData.reduce((min, data) => (data.price < min.price ? data : min), priceData[0]);
          const maxPriceData = priceData.reduce((max, data) => (data.price > max.price ? data : max), priceData[0]);
          const diffPercentage = (((maxPriceData.price - minPriceData.price) / minPriceData.price) * 100).toFixed(2);
          const rowStyle = {
            backgroundColor: diffPercentage > 0.5 ? 'lightgreen' : diffPercentage > 0.25 ? '#FFD580' : 'white',
          };
          return (
            <tr key={pair}>
              <td style={rowStyle}>
                <img src={logos[pair.toUpperCase().replace('USDT', '-USD')]} alt={pair} style={{ width: '23px', marginRight: '13px' }} />
                {pair.replace('usdt', '').toUpperCase()}
              </td>
              {exchanges.map((exchange) => {
                const price = prices[exchange.toLowerCase()][pair];
                return (
                  <td key={exchange + pair} style={rowStyle}>
                    {price !== 'Loading...' ? `$${price}` : 'Loading...'}
                  </td>
                );
              })}
              <td style={rowStyle}>
                <>
                  <span className="text-success fw-bold">{minPriceData.name}</span>
                  {' --> '}
                  <span className="text-danger fw-bold">{maxPriceData.name}</span>
                  {': '}
                  <span className="text-dark fw-bold">{diffPercentage}%</span>
                </>
              </td>
            </tr>
          );
        })}
        </tbody>
      </table>
    </div>
  );   
};

export default Prices;