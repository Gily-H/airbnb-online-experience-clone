import React from "react";
import "../styles/card.css";

export default function Card(props) {
  let badgeText;
  if (props.card.openSpots === 0) {
    badgeText = "SOLD OUT";
  } else if (props.card.location === "Online") {
    badgeText = "ONLINE";
  }

  return (
    <div className="card-container">
      {badgeText && <div className="card-badge">{badgeText}</div>}

      <img className="card-image" src={`../images/${props.card.coverImg}`} alt="cover-image" />

      <div className="card-stats">
        <img className="star-img" src="../images/star.png" />
        <span className="card-details">{props.card.stats.rating}.0</span>
        <span className="card-details">({props.card.stats.reviewCount}) •</span>
        <span className="card-details">{props.card.location}</span>
      </div>

      <p className="card-title">{props.card.title}</p>
      <p>
        <span className="card-price">From $ {props.card.price}</span> / person
      </p>
    </div>
  );
}
