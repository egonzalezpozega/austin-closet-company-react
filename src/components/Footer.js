import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container container">
        <div className="footer-content">
          <p>&copy; {currentYear} Austin Closet Co. All Rights Reserved.</p>
          <p>Luxury Custom Closets in Austin, TX</p>
        </div>
        <div className="footer-links">
          {/* Optional: Add social media links or quick links */}
          {/* <a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;