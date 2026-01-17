import React from "react";
import "../Stylesheets/Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      {/* Hero Section */}
      <section className="contact-hero">
        <h1>Contact Us</h1>
        <p>
          Have questions or feedback? We’re here to help you. Reach out to us anytime!
        </p>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section">
        <form className="contact-form">
          <h2>Send Us a Message</h2>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>

        {/* Contact Info */}
        <div className="contact-info">
          <h2>Our Contact Info</h2>
          <p><strong>Email:</strong> support@ecommerce.com</p>
          <p><strong>Phone:</strong> +1 (555) 123-4567</p>
          <p><strong>Address:</strong> 123 E-commerce St, Shopville, USA</p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
