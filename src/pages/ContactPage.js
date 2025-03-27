import React from 'react';
import ContactForm from '../components/ContactForm';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page page-section container">
      <div className="text-center">
        <h1>Contact Us</h1>
        <p>We'd love to hear about your project! Reach out to schedule a consultation or ask any questions.</p>
      </div>

      <div className="contact-content">
        <div className="contact-details">
          <h2>Get In Touch</h2>
          <p>Fill out the form, or contact us directly:</p>
          <ul>
            <li>
                <strong>Phone:</strong> <a href="tel:+15125551234">(512) 555-1234</a> {/* Replace with real number */}
            </li>
            <li>
                <strong>Email:</strong> <a href="mailto:info@austinclosetco.com">info@austinclosetco.com</a> {/* Replace with real email */}
            </li>
            <li>
                <strong>Address:</strong> 123 Luxury Lane, Austin, TX 78701 {/* Replace with real address */}
                {/* (By Appointment Only - Optional) */}
            </li>
             <li>
                <strong>Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM
            </li>
          </ul>
          {/* Optional: Embedded Google Map */}
          {/* <div className="map-container"> */}
            {/* Add Google Maps Embed Code here - Remember you need an API Key */}
            {/* Example Placeholder */}
            {/* <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d..."
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Austin Location Map"
            ></iframe> */}
             {/* <p>(Google Map Placeholder - Replace with embed code)</p> */}
          {/* </div> */}
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>
          <ContactForm />
           <p className="form-note">
            We typically respond within 1-2 business days.
            <br />
             <strong>Note:</strong> This form is currently for demonstration only and doesn't send emails.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;