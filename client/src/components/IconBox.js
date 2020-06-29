import React from "react";
import Spacer from "./Spacer";
import Icon from "./Icon";
import Typography from "./Typography";

const IconBox = ({ text, icon }) => {
  const styles = {
    root: {
      minWidth: "220px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "start",
      alignItems: "center",
    },
    background: {
      backgroundColor: "#FFF9F0",
      height: "100px",
      width: "100px",
      borderRadius: "50%",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  }
  return (
    <div style={styles.root}>
      <div style={styles.background}>
        <Icon name={icon} size={54} color="#D3936D" />
      </div>
      <Spacer spacing={0.5} />
      <Typography type="body1" color="#D3936D" text={text} textAlign="center" />
    </div>
  )
}
export default IconBox;