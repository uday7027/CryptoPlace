import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span className="footer-logo">CryptoPlace</span>
        <nav className="footer-links">
          <a href="https://www.coingecko.com/" target="_blank" rel="noopener noreferrer">CoinGecko API</a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="mailto:support@cryptoplace.com">Contact</a>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>&copy; {new Date().getFullYear()} CryptoPlace. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;