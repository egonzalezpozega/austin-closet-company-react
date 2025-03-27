import React from 'react';
import './AboutPage.css';
import aboutImage from '../assets/images/about-us.jpg'; // Add an image representing your team or showroom

const AboutPage = () => {
  return (
    <div className="about-page page-section container">
      <h1>About Austin Closet Co</h1>

      <div className="about-content">
        <div className="about-text">
          <h2>Crafting Austin's Finest Closets</h2>
          <p>
            Founded in Austin, Texas, Austin Closet Co was born from a passion for exceptional design, quality craftsmanship, and transformative organization. We believe your closet should be more than just storage; it should be a personalized sanctuary that reflects your style and simplifies your life.
          </p>
          <p>
            Our team consists of experienced designers and skilled installers who are dedicated to bringing your vision to life. We work closely with homeowners, builders, and interior designers throughout the Austin area to create stunning, functional custom closet solutions.
          </p>
          <h3>Our Commitment</h3>
          <ul>
            <li><strong>Personalized Design:</strong> We listen to your needs and preferences to create a truly bespoke design.</li>
            <li><strong>Premium Materials:</strong> We source high-quality, durable materials for lasting beauty and function.</li>
            <li><strong>Expert Craftsmanship:</strong> Our installers are meticulous and committed to a flawless finish.</li>
            <li><strong>Local Focus:</strong> Proudly serving the Austin community with integrity and exceptional service.</li>
          </ul>
          <p>
            Let us help you transform your space. Contact us today for a consultation.
          </p>
        </div>
        <div className="about-image">
          {/* Make sure about-us.jpg exists in assets/images */}
          <img src={aboutImage} alt="Austin Closet Co team or showroom" />
        </div>
      </div>
    </div>
  );
};

export default AboutPage;