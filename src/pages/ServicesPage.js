import React from 'react';
import './ServicesPage.css';
// Optional: Import images for each service if desired
// import walkInImage from '../assets/images/service-walkin.jpg';

const services = [
  {
    title: "Custom Walk-In Closets",
    description: "Transform your master suite with a luxurious walk-in closet tailored to your wardrobe and style. We design intuitive layouts with features like islands, seating, custom lighting, and specialized storage for shoes, accessories, and more.",
    // image: walkInImage,
    features: ["Personalized Layout Design", "Center Islands & Seating", "Shoe & Accessory Storage", "Integrated LED Lighting", "Premium Finishes & Hardware"]
  },
  {
    title: "Reach-In Closet Systems",
    description: "Maximize the potential of smaller spaces with efficient and stylish reach-in closet systems. Our designs optimize every inch, incorporating adjustable shelving, multi-level hanging rods, drawers, and organizational accessories.",
    // image: reachInImage,
    features: ["Space Optimization", "Adjustable Shelving", "Double/Triple Hang Sections", "Drawers & Baskets", "Sliding or Bi-Fold Doors"]
  },
  {
    title: "Wardrobe Units",
    description: "Add elegant, freestanding or built-in wardrobe units to bedrooms or dressing areas. Perfect for adding storage without major renovations, these units offer a blend of hanging space, shelving, and drawers.",
    // image: wardrobeImage,
    features: ["Freestanding or Built-In", "Customizable Interior Configurations", "Variety of Door Styles", "Ideal for Bedrooms/Guest Rooms", "Complements Existing Decor"]
  },
  {
    title: "Custom Cabinetry & Storage",
    description: "Beyond closets, we design and build custom cabinetry for pantries, laundry rooms, garages, home offices, and entertainment centers, ensuring cohesive style and organization throughout your Austin home.",
    // image: cabinetryImage,
    features: ["Kitchen Pantries", "Laundry Room Organization", "Garage Storage Systems", "Home Office Built-Ins", "Entertainment Centers", "Mudroom Lockers"]
  },
   {
    title: "Design Consultation & 3D Rendering",
    description: "Our process begins with an in-depth consultation to understand your needs. We provide detailed 3D renderings, allowing you to visualize your new space before installation begins.",
    features: ["In-Home Measurement", "Needs Assessment", "Material Selection Guidance", "Detailed 3D Visualizations", "Collaborative Design Process"]
  }
];

const ServicesPage = () => {
  return (
    <div className="services-page page-section container">
      <div className="text-center">
        <h1>Our Services</h1>
        <p>Offering comprehensive custom storage solutions for every area of your Austin home.</p>
      </div>

      <div className="services-list">
        {services.map((service, index) => (
          <div key={index} className="service-item">
            {/* Optional image section */}
            {/* {service.image && <img src={service.image} alt={service.title} className="service-image"/>} */}
            <div className="service-details">
              <h2>{service.title}</h2>
              <p>{service.description}</p>
              {service.features && (
                <>
                  <h3>Key Features:</h3>
                  <ul className="features-list">
                    {service.features.map((feature, fIndex) => (
                      <li key={fIndex}>{feature}</li>
                    ))}
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
         <div className="text-center consultation-cta">
             <h3>Ready to Transform Your Space?</h3>
             <p>Contact us today to schedule your complimentary design consultation in the Austin area.</p>
             <a href="/contact" className="button">Request Consultation</a>
         </div>
    </div>
  );
};

export default ServicesPage;