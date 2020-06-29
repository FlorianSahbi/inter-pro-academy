import React from "react";
import TestimonialCard from "./TestimonialCard";
import testimonials from "../data/testimonials.json";
import Typography from "../components/Typography";
import Spacer from '../components/Spacer';
import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div className="root-testimonials">
      <div className="titleSection-testimonials">
        <Typography text="Avis de nos étudiants et clients" type="h2" textAlign="center" />
      </div>
      <Spacer spacing={1} />
      <div className="contentSection-testimonials" >
        {testimonials.map(({image, alt, city, identity, message}) => <TestimonialCard image={image} alt={alt} city={city} identity={identity} message={message} />)}
      </div>
    </div>
  )
}

export default Testimonials;