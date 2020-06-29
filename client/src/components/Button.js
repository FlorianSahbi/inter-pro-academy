import React from "react";
import Typography from "./Typography";
import { Theme } from "../config/Theme";
import "./Button.css";

const Button = ({ label }) => {
  return (
    <div className="root-button">
      <Typography color={Theme.palette.common.white} type="body1" text={label} />
    </div>
  )
}

export default Button;
