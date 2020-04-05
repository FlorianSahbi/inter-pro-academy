import React from "react";
import Typography from "./Typography";

const Chip = ({ color, label, onClickFilter, isActive, icon }) => {
  const styles = {
    rootDefault: {
      height: "37px",
      border: `1px solid ${color}`,
      width: "fit-content",
      borderRadius: "18px",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
    rootActive: {
      height: "37px",
      border: `1px solid ${color}`,
      backgroundColor: isActive ? color : "",
      width: "fit-content",
      borderRadius: "18px",
      padding: "1rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",
    },
  }
  const handleClick = (filter) => {
    isActive ? onClickFilter(null) : onClickFilter(filter);
  }
  return (
    <div onClick={() => handleClick(label)} style={isActive ? styles.rootActive : styles.rootDefault}>
      <Typography color={isActive ? "#fff" : color} type="body1" text={label} textAlign="center" iconRight={icon} />
    </div>
  )
}

export default Chip;