import React from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/HeroSection';
import './HomePage.css';
// Import images for mini-gallery (make sure they exist)
import galleryImg1 from '../assets/images/closet-gallery-1.jpg';
import galleryImg2 from '../assets/images/closet-gallery-2.jpg';

const HomePage = () => {
  return (
    <div className="home-page">
      <HeroSection />

      {/* Services Overview Section */}
      <section className="page-section container">
        <div className="text-center">
            <h2>Our Expertise</h2>
            <p>From luxurious walk-in wardrobes to sophisticated reach-in solutions and custom cabinetry, we craft spaces in Austin that perfectly reflect your lifestyle and elevate your home.</p>
        </div>
        <div className="services-overview">
           <div className="service-highlight">
             {/* Placeholder: Add icons if desired */}
             {/* <img src={someServiceIcon} alt="Walk-in Closets"/> */}
             <h3>Walk-In Closets</h3>
             <p>Experience the ultimate in personal luxury and seamless organization.</p>
           </div>
            <div className="service-highlight">
             {/* <img src={someServiceIcon} alt="Reach-In Closets"/> */}
             <h3>Reach-In Closets</h3>
             <p>Maximize space and style with intelligently designed reach-in solutions.</p>
           </div>
           <div className="service-highlight">
             {/* <img src={someServiceIcon} alt="Custom Cabinetry"/> */}
             <h3>Custom Cabinetry</h3>
             <p>Extend bespoke storage solutions throughout your home.</p>
           </div>
        </div>
         <div className="text-center">
            <Link to="/services" className="button">Explore Our Services</Link>
         </div>
      </section>

       {/* Mini Gallery Section */}
      <section className="page-section dark-bg">
         <div className="container">
            <div className="text-center">
                <h2>Inspired Designs</h2>
                <p>Visualize the possibilities with a glimpse into our portfolio.</p>
            </div>
            <div className="mini-gallery">
                <img src={galleryImg1} alt="Luxury custom closet design example 1" />
                <img src={galleryImg2} alt="Modern closet organization example 2" />
                {/* Add a third image if desired */}
            </div>
            <div className="text-center">
                <Link to="/gallery" className="button">View Full Gallery</Link>
            </div>
         </div>
      </section>

       {/* Why Choose Us Section */}
       <section className="page-section container">
           <div className="text-center">
                <h2>Why Choose Austin Closet Co?</h2>
                <p>We are Austin's premier choice for custom closets, dedicated to exceptional craftsmanship, premium materials, and a personalized design experience from start to finish. Let us create the closet of your dreams.</p>
                <Link to="/about" className="button secondary">Learn More About Us</Link>
           </div>
       </section>
    </div>
  );
};

export default HomePage;