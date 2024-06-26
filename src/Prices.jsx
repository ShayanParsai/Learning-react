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
import pythLogo from './assets/PYTH-USD.png';
import qntLogo from './assets/QNT-USD.png';
import wifLogo from './assets/WIF-USD.png';
import vetLogo from './assets/VET-USD.png';
import enjLogo from './assets/ENJ-USD.png';
import batLogo from './assets/BAT-USD.png';
import zecLogo from './assets/ZEC-USD.png';
import omgLogo from './assets/OMG-USD.png';
import xtzLogo from './assets/XTZ-USD.png';
import compLogo from './assets/COMP-USD.png';
import zilLogo from './assets/ZIL-USD.png';
import kncLogo from './assets/KNC-USD.png';
import bandLogo from './assets/BAND-USD.png';
import cakeLogo from './assets/CAKE-USD.png';
import crvLogo from './assets/CRV-USD.png';
import inchLogo from './assets/1INCH-USD.png';
import sushiLogo from './assets/SUSHI-USD.png';
import yfiLogo from './assets/YFI-USD.png';
import lunaLogo from './assets/LUNA-USD.png';
import celoLogo from './assets/CELO-USD.png';
import chzLogo from './assets/CHZ-USD.png';

const initializePrices = (pairs, exchanges) => { // Dynamically initialize prices for each exchange and pair
  const initialPrices = {};
  exchanges.forEach((exchange) => {
    initialPrices[exchange.toLowerCase()] = {};
    pairs.forEach((pair) => {
      initialPrices[exchange.toLowerCase()][pair] = 'Loading...';
    });
  });
  return initialPrices;
};

const Prices = () => {
  const logos = { // All logos
    'BTC-USD': btcLogo, 'ETH-USD': ethLogo, 'SOL-USD': solLogo, 'AXS-USD': axsLogo, 'DOGE-USD': dogeLogo,
    'XRP-USD': xrpLogo, 'SAND-USD': sandLogo, 'MANA-USD': manaLogo, 'AVAX-USD': avaxLogo, 'LTC-USD': ltcLogo,
    'LINK-USD': linkLogo, 'ADA-USD': adaLogo, 'ICP-USD': icpLogo, 'DOT-USD': dotLogo, 'XLM-USD': xlmLogo,
    'UNI-USD': uniLogo, 'NEAR-USD': nearLogo, 'TRX-USD': trxLogo, 'MATIC-USD': maticLogo, 'BCH-USD': bchLogo,
    'APT-USD': aptLogo, 'MKR-USD': mkrLogo, 'LDO-USD': ldoLogo, 'SUI-USD': suiLogo, 'FIL-USD': filLogo,
    'ETC-USD': etcLogo, 'ATOM-USD': atomLogo, 'ARB-USD': arbLogo, 'IMX-USD': imxLogo, 'RNDR-USD': rndrLogo,
    'GRT-USD': grtLogo, 'OP-USD': opLogo, 'INJ-USD': injLogo, 'FTM-USD': ftmLogo, 'TIA-USD': tiaLogo,
    'FET-USD': fetLogo, 'ALGO-USD': algoLogo, 'SEI-USD': seiLogo, 'FLOW-USD': flowLogo, 'GALA-USD': galaLogo,
    'AAVE-USD': aaveLogo, 'EGLD-USD': egldLogo, 'DYDX-USD': dydxLogo, 'STRK-USD': strkLogo, 'SNX-USD': snxLogo,
    'PYTH-USD': pythLogo, 'QNT-USD': qntLogo, 'WIF-USD': wifLogo, 'VET-USD': vetLogo, 'ENJ-USD': enjLogo,
    'BAT-USD': batLogo, 'ZEC-USD': zecLogo, 'OMG-USD': omgLogo, 'XTZ-USD': xtzLogo, 'COMP-USD': compLogo,
    'ZIL-USD': zilLogo, 'KNC-USD': kncLogo, 'BAND-USD': bandLogo, 'CAKE-USD': cakeLogo, 'CRV-USD': crvLogo,
    '1INCH-USD': inchLogo, 'SUSHI-USD': sushiLogo, 'YFI-USD': yfiLogo, 'LUNA-USD': lunaLogo, 'CELO-USD': celoLogo,
    'CHZ-USD': chzLogo
};

  const pairs = [ // Pairs for all other exchanges
    'btcusdt', 'ethusdt', 'solusdt', 'axsusdt', 'dogeusdt', 'xrpusdt',
    'sandusdt', 'manausdt', 'avaxusdt', 'ltcusdt', 'linkusdt',    
    'adausdt', 'icpusdt', 'dotusdt', 'xlmusdt', 'uniusdt', 'nearusdt',
    'trxusdt', 'maticusdt', 'bchusdt', 'aptusdt', 'filusdt',
    'etcusdt', 'atomusdt', 'arbusdt', 'imxusdt', 'rndrusdt', 'grtusdt',
    'opusdt', 'injusdt', 'ftmusdt', 'mkrusdt', 'ldousdt',
    'tiausdt', 'fetusdt', 'suiusdt', 'algousdt', 'seiusdt', 'flowusdt',
    'galausdt', 'aaveusdt', 'egldusdt', 'dydxusdt', 'strkusdt',
    'snxusdt', 'pythusdt', 'qntusdt', 'wifusdt', 'vetusdt', 'enjusdt',
    'batusdt', 'zecusdt', 'omgusdt', 'xtzusdt', 'compusdt',
    'zilusdt', 'kncusdt', 'bandusdt', 'cakeusdt', 'crvusdt', '1inchusdt',
    'sushiusdt', 'yfiusdt', 'lunausdt', 'celousdt', 'chzusdt'
  ];
  
  const coinbasePairs = [ // Pairs for coinbase, some USD some USDT
    'BTC-USDT', 'ETH-USDT', 'SOL-USDT', 'AXS-USDT', 'DOGE-USDT',
    'XRP-USDT', 'SAND-USDT', 'MANA-USD', 'AVAX-USDT', 'LTC-USD',
    'LINK-USDT', 'ADA-USDT', 'ICP-USDT', 'DOT-USDT', 'XLM-USDT',
    'UNI-USD', 'NEAR-USDT', 'MATIC-USDT', 'BCH-USD', 'APT-USDT',
    'FIL-USD', 'ETC-USD', 'ATOM-USDT', 'ARB-USD', 'IMX-USDT',
    'RNDR-USDT', 'GRT-USD', 'OP-USDT', 'INJ-USD', 'MKR-USD',
    'LDO-USD', 'TIA-USD', 'FET-USDT', 'SUI-USD', 'ALGO-USD',
    'SEI-USD', 'FLOW-USDT', 'AAVE-USD', 'EGLD-USD', 'STRK-USD',
    'SNX-USD', 'QNT-USDT', 'VET-USD', 'ENJ-USDT', 'BAT-USD',
    'ZEC-USD', 'XTZ-USD', 'COMP-USD', 'KNC-USD', 'BAND-USD',
    'CRV-USD', '1INCH-USD', 'SUSHI-USD', 'YFI-USD', 'CHZ-USDT'
  ];
 
  const exchanges = ['Binance', 'Bybit', 'Mexc', 'Coinbase']; // List of exchanges
  const [prices, setPrices] = useState(initializePrices(pairs, exchanges));

  const [filterBadDeals, setFilterBadDeals] = useState(false); // Filter Button
  const toggleFilter = () => { 
    setFilterBadDeals(!filterBadDeals);
  };
  
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

    const coinbaseWs = new WebSocket('wss://ws-feed.exchange.coinbase.com'); // Coinbase WebSocket Setup
    coinbaseWs.onopen = () => { // Differates USD and USDT pairs, lists them as USDT
        coinbaseWs.send(JSON.stringify({
            type: 'subscribe',
            product_ids: coinbasePairs,
            channels: ['ticker']
        }));
    };
    const coinbasePairMapping = coinbasePairs.reduce((acc, pair) => {
      const stateKey = pair.toLowerCase().replace('-usdt', 'usdt').replace('-usd', 'usdt');
      acc[pair] = stateKey;
      return acc;
    }, {});
    coinbaseWs.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message.type === 'ticker' && message.product_id) {
        const coinbasePair = message.product_id;
        const stateKey = coinbasePairMapping[coinbasePair];
        if (!stateKey) {
          console.warn(`No mapping found for ${coinbasePair}, skipping update.`);
          return;
        }
        const price = parseFloat(message.price);
        const decimalPlaces = getDecimalPlaces(price);
        setPrices(prevPrices => ({
          ...prevPrices,
          coinbase: {
            ...prevPrices.coinbase,
            [stateKey]: price.toFixed(decimalPlaces),
          },
        }));
      }
    };
    coinbaseWs.onerror = (error) => {
        console.error('Coinbase WebSocket Error:', error);
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
    binanceWs.onerror = (error) => {
      console.error('Binance WebSocket Error:', error);
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
    bybitWs.onerror = (error) => {
      console.error('Bybit WebSocket Error:', error);
    };

    const chunkPairs = (pairsArray, chunkSize) => { // Mexc WebSocket Setup
      let result = [];
      for (let i = 0; i < pairsArray.length; i += chunkSize) {
        result.push(pairsArray.slice(i, i + chunkSize));
      }
      return result;
    }; 
    const pairsChunks = chunkPairs(pairs, 30);
    pairsChunks.forEach((pairsChunk, index) => {
      const mexcWs = new WebSocket('wss://wbs.mexc.com/ws');
      mexcWs.onopen = () => {
        pairsChunk.forEach(pair => {
          mexcWs.send(JSON.stringify({
            "method": "SUBSCRIPTION",
            "params": [`spot@public.deals.v3.api@${pair.toUpperCase()}`]
          }));
        });
      };

    mexcWs.onmessage = (event) => {
      const message = JSON.parse(event.data);
      if (message && message.d && message.d.deals) {
        const { s: symbol, d: { deals } } = message;
        const lastDeal = deals[deals.length - 1];
        const price = parseFloat(lastDeal.p);
        const decimalPlaces = getDecimalPlaces(price);
        setPrices(prevPrices => ({
          ...prevPrices,
          mexc: {
            ...prevPrices.mexc,
            [symbol.toLowerCase()]: price.toFixed(decimalPlaces),
          },
        }));
      }};
    mexcWs.onerror = (error) => {
      console.error(`MexC WebSocket Error for chunk ${index}:`, error);
    };

    // Closing down all Websockets
    return () => {
      binanceWs.close();
      bybitWs.close();
      coinbaseWs.close();
      mexcWs.close();
    };
  });
}, []);

  return ( // The Table setup
    <div className="p-3 mt-4 minimum-height">
      <div className="container mb-5 border border-dark rounded-4 border-3 py-3 px-4 bg-light">
        {/* <--Filter Button--> */}
        <div className="d-flex justify-content-center mb-3">
          <button className="btn btn-primary border-dark rounded-2 border-2 text-stroke" onClick={toggleFilter}>
            {filterBadDeals ? 'Show All Deals' : 'Hide Bad Deals'}
          </button>
        </div>
        {/* <--Filter Button--> */}
        <table className="table table-bordered custom-table">
          {/* <--Titles--> */}
          <thead className="border border-black">
            <tr> 
              <th>Pairs to USDT</th>
              {exchanges.map((exchange) => (
                <th key={exchange}>{exchange}</th>
              ))}
              <th>Buy at - Sell at - Diff</th>
            </tr> 
          </thead>
          {/* <--Titles--> */}
          {/* <--Content Collumns--> */}
          <tbody className="border border-black">
            {pairs.map((pair, index) => {
            const priceData = exchanges.map((exchange) => ({
              name: exchange,
              price: parseFloat(prices[exchange.toLowerCase()][pair]),
            })).filter(({ price }) => !isNaN(price));
            if (priceData.length === 0) return <tr key={`${pair}-${index}`}><td colSpan="exchanges.length + 2">Fetching</td></tr>;
            const minPriceData = priceData.reduce((min, data) => (data.price < min.price ? data : min), priceData[0]);
            const maxPriceData = priceData.reduce((max, data) => (data.price > max.price ? data : max), priceData[0]);
            const diffPercentage = (((maxPriceData.price - minPriceData.price) / minPriceData.price) * 100).toFixed(2);
            const rowStyle = {
              backgroundColor: diffPercentage > 0.999 ? '#78FF8D ' : diffPercentage > 0.499 ? '#FFCB5E' : '#FBFBFB',
            };
            {/* <--Filter Logic--> */} 
            if (filterBadDeals && diffPercentage < 0.5) {
              return null;
            }
            {/* <--Filter Logic--> */} 
            return (
              <tr key={`${pair}-${index}`}>
                <td style={rowStyle}>
                  <img src={logos[pair.toUpperCase().replace('USDT', '-USD')]} alt={pair} style={{ width: '23px', marginRight: '13px' }} />
                  {pair.replace('usdt', '').toUpperCase()}
                </td>
                {exchanges.map((exchange) => {
                  const price = prices[exchange.toLowerCase()][pair];
                  return (
                    <td key={`${exchange}-${pair}`} style={rowStyle}>
                      {price !== 'Loading...' ? `$${price}` : '-'}
                    </td>
                  );
                })}
                <td style={rowStyle}>
                  <>
                    <span className="text-success fw-bold">{minPriceData.name}</span>
                    {' - '}
                    <span className="text-danger fw-bold">{maxPriceData.name}</span>
                    {': '}
                    <span className="text-dark fw-bold">{diffPercentage}%</span>
                  </>
                </td>
              </tr>
            );
          })}  
          </tbody>
          {/* <--Content Collumns--> */}
        </table>
      </div>
    </div>
  );   
};

export default Prices;