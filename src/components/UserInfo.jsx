import React from "react";
import Rating from "./Rating.jsx";
import "../styles/userCard.css";

export default function UserInfo({
  index,
  name,
  commentaire,
  connaissance,
  star,
  smiley,
}) {
  return (
    <li className={index % 2 === 0 ? "blue_card" : "white_card"}>
      <span>{name}</span>
      <span>{commentaire}</span>
      <span className="right">{connaissance ? "Suivi" : "Suivez le"}</span>{" "}
      <br />
      <Rating ratingValue="smiley" value={smiley} />
      <Rating ratingValue="star" value={star} />
    </li>
  );
}
