import React from "react";
import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <img className="hero-img" src={"../images/photo-grid.png"} alt="photo-grid" />
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by one-of-a-kind hosts-all without leaving home.
      </p>
    </section>
  );
}
