import React from 'react';
import { Link } from 'react-router-dom'; // Use Link for internal navigation
import './HeroSection.css';
// Ensure you have this image in the correct path!
import heroBg from '../assets/images/hero-bg.jpg';

const HeroSection = () => {
  return (
    <div className="hero-container" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay"></div> {/* Overlay for text readability */}
      <div className="hero-content container">
        <h1>Luxury Custom Closets in Austin</h1>
        <p>Transform your space with bespoke storage solutions designed for elegance and function.</p>
        {/* Use Link component for internal routing */}
        <Link to="/contact" className="button hero-button">Request a Consultation</Link>
      </div>
    </div>
  );
};

export default HeroSection;