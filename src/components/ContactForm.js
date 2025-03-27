import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState(''); // To show submission status

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // **IMPORTANT:** Add your form submission logic here!
    // This could involve sending data to a backend API, Netlify Forms, Formspree, etc.
    console.log('Form data submitted:', formData);
    setStatus('Thank you for your message! We will be in touch soon.'); // Example status
    // Reset form after submission (optional)
    setFormData({ name: '', email: '', message: '' });

    // Hide status message after a few seconds
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <button type="submit" className="button form-submit-button">Send Message</button>

      {status && <p className="form-status">{status}</p>}
    </form>
  );
};

export default ContactForm;