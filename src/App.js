import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";
import "./styles/app.css";

export default function App() {
  const cards = data.map(function (card) {
    return <Card key={card.id} card={card} />;
  });

  return (
    <div>
      <Navbar />
      <Hero />
      <div className="card-group">{cards}</div>
    </div>
  );
}
