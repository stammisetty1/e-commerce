import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p className="copyright">&copy; {new Date().getFullYear()} All rights reserved.</p>
        <p className="developer">
          Developed by{' '}
          <a href="#" target="_blank" rel="noopener noreferrer" className="developer-link">
            John Doe
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;