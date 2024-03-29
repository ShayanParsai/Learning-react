import React from 'react';
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
  const exchanges = ["Binance", "Bybit", "Kraken", "Htx", "Coinbase"];
  const pairs = ["BTC-USD", "ETH-USD", "SOL-USD", "AXS-USD", "DOGE-USD", "XRP-USD", "SAND-USD", "MANA-USD", "AVAX-USD", "LTC-USD", "LINK-USD",
    "ADA-USD", "ICP-USD", "DOT-USD", "XLM-USD", "UNI-USD", "NEAR-USD", "TRX-USD", "MATIC-USD", "BCH-USD", "APT-USD", "MKR-USD", "LDO-USD", "SUI-USD",
    "FIL-USD", "ETC-USD", "ATOM-USD", "ARB-USD", "IMX-USD", "RNDR-USD", "GRT-USD", "OP-USD", "INJ-USD", "FTM-USD", "TIA-USD", "FET-USD", "ALGO-USD",
    "SEI-USD", "FLOW-USD", "GALA-USD", "AAVE-USD", "EGLD-USD", "DYDX-USD", "STRK-USD", "SNX-USD"];

    const logos = {
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

  return (
    <div className="container mb-5">
      <table className="table table-striped table-bordered">
        <thead className="border border-black">
          <tr>
            <th>Currency Pair</th>
            {exchanges.map((exchange, index) => (
              <th key={index}>{exchange}</th>
            ))}
            <th className="last-column">Buy at - Sell at - Price Difference</th>
          </tr>
        </thead>
        <tbody className="border border-black">
          {pairs.map((pair, index) => (
            <tr key={index}>
              <td>
                <img src={logos[pair]} alt={pair} style={{ width: '23px', marginRight: '9px' }} />
                {pair}
              </td>
              {exchanges.map((_, idx) => (
                <td key={idx}>price from websocket</td>
              ))}
              <td className="last-column">Cheapest exchange for pair - most expensive exchange for pair - diffrence in % on price</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Prices;