import React from "react";
import Typography from "./Typography";
import Icon from "./Icon";
import "./Card.css";

const Card = ({ name, description, category: { color, icon, name: nameCat } }) => {
  return (
    <div className="root-card">
      <div className="categoryPreview-card" style={{ background: color }}>
        <Icon name={icon} size={72} color="#FBFBFB" />
      </div>
      <div className="content-card">
        <Typography type="h3" text={name} textAlign="left" />
        <Typography type="body1" text={description} textAlign="left" />
        <Typography type="body1" text={nameCat} textAlign="flex-end" color={color} />
      </div>
    </div>
  )
}

export default Card;
