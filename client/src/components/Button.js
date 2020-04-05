import React from "react";
import Typography from "./Typography";
import { Palette } from "../pages/Home";

const Button = ({ label }) => {
  const styles = {
    root: {
      padding: "1rem 1.5rem",
      width: "fit-content",
      height: "55px",
      background: "#991A40",
      borderRadius: "30px",


      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",


      cursor: "pointer",
    }
  }
  return (
    <div style={styles.root}><Typography color={Palette.common.white} type="body1" text={label} /></div>
  )
}

export default Button;