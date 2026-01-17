import React from "react";
import "../Stylesheets/About.css";

const About = () => {
  return (
    <div className="about-container">

      {/* ===== HERO SECTION ===== */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
        </div>
      </section>

      {/* ===== MISSION SECTION ===== */}
      <section className="about-mission">
        <div className="mission-text">
          <h2>Our Mission</h2>
          <p>
            To make high-quality products accessible to everyone, while ensuring
            sustainability, ethical sourcing, and exceptional service.
          </p>
        </div>
      </section>

      {/* ===== VALUES SECTION ===== */}
      <section className="about-values">
        <h2>Why Choose Us?</h2>
        <div className="values-grid">
          <div className="value-card">
            <h3>Premium Quality</h3>
            <p>Only the finest materials and craftsmanship go into our products.</p>
          </div>
          <div className="value-card">
            <h3>Fast Delivery</h3>
            <p>Get your orders quickly with our reliable shipping partners.</p>
          </div>
          <div className="value-card">
            <h3>24/7 Support</h3>
            <p>We’re here to help you anytime, anywhere with dedicated support.</p>
          </div>
          <div className="value-card">
            <h3>Sustainable</h3>
            <p>We care about the planet and ensure eco-friendly production.</p>
          </div>
        </div>
      </section>

      {/* ===== TEAM SECTION ===== */}
      <section className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-grid">
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=1" alt="CEO" />
            <h4>Jane Doe</h4>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=2" alt="CTO" />
            <h4>John Smith</h4>
            <p>Chief Technical Officer</p>
          </div>
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=3" alt="Designer" />
            <h4>Emily Clark</h4>
            <p>Lead Designer</p>
          </div>
          <div className="team-member">
            <img src="https://i.pravatar.cc/150?img=4" alt="Marketing" />
            <h4>Michael Lee</h4>
            <p>Marketing Head</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
