import React from "react";
import Typography from "./Typography";
import "./Chip.css";

const Chip = ({ color, label, onClickFilter, isActive, icon }) => {
  const styles = {
    rootDefault: {
      border: `1px solid ${color}`,
    },
    rootActive: {
      border: `1px solid ${color}`,
      backgroundColor: isActive ? color : "",
    },
  }

  const handleClick = (filter) => {
    isActive ? onClickFilter(null) : onClickFilter(filter);
  }

  return (
    <div
      onClick={() => handleClick(label)}
      className={isActive ? "root-chip-active" : "root-chip-active"}
      style={isActive ? styles.rootActive : styles.rootDefault}
    >
      <Typography
        color={isActive ? "#FBFBFB" : color}
        type="body1"
        text={label}
        textAlign="center"
        iconRight={icon}
      />
    </div>
  )
}

export default Chip;
