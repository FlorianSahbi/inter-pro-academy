import React from "react";
import Typography from "./Typography";
import Spacer from "./Spacer";
import "./TestimonialCard.css";

const RoundImage = ({ src, alt }) => {
  return (
    <div className="root-round-image">
      <img className="root-round-image" src={src} alt={alt} />
    </div>
  )
}

function TestimonialCard({ image, alt, city, identity, message }) {
  return (
    <div className="root-testimonial-card">
      <RoundImage src={image} alt={alt} />
      <Spacer spacing={1} />
      <Typography type="body1" text={city} textAlign="center" />
      <Typography type="h3" text={identity} textAlign="center" />
      <Typography textAlign="justify" text={message} type="body1" color="#000" />
    </div>
  )
}

export default TestimonialCard;