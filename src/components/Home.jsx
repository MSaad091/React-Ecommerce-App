import React from "react";
import "./home.css";
import HomeCard from "./HomeCard";
import Navbar from "./Navbar"; // import new component
import { useNavigate } from "react-router-dom";




const Home = () => {
  const navigate = useNavigate();
  
  const handleNavigate  = () => {
    navigate('/shop')
  }
  return (
    <>
      <section className="hero">
        {/* Navbar component */}
        <Navbar />

        {/* Hero Content */}
        <div className="hero-content">
          <div className="hero-box">
            <h1>
              Discover Premium <span>Products</span>
            </h1>
            <p>
              Explore high-quality footwear & accessories designed for comfort,
              style and performance.
            </p>
            <button onClick={handleNavigate} className="hero-btn">Shop Now</button>
          </div>
        </div>
      </section>

      <HomeCard />
    </>
  );
};

export default Home;
