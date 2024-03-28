import React, { useEffect, useState } from 'react';
import { Bitcoin, Ethereum } from 'react-cryptocoins'; // Import specific icons
import './index.css';

const CryptoPrices = () => {
  const [cryptoData, setCryptoData] = useState(null);

  useEffect(() => {
    // Fetch cryptocurrency prices from API
    fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => response.json())
      .then(data => {
        // Process data if needed
        setCryptoData(data);
      })
      .catch(error => console.error('Error fetching cryptocurrency prices:', error));
  }, []);

  return (
    <div>
      {cryptoData && (
        <div>
          <div className="crypto-card">
            <h3>Bitcoin Price</h3>
            <Bitcoin size={64} aria-label="close"/> {/* Use Bitcoin icon */}
            <p>{cryptoData.bpi.USD.rate}</p>
          </div>
          <div className="crypto-card">
            <h3>Ethereum Price</h3>
            <Ethereum size={64} aria-label="close"/> {/* Use Ethereum icon */}
            <p>{cryptoData.bpi.USD.rate}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CryptoPrices;
