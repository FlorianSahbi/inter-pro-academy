import React from "react";
import Typography from "./Typography";
import Icon from "./Icon";

const Card = ({ name, description, category: { color, icon, name: nameCat } }) => {
  const styles = {
    root: {
      width: "100%",
      height: "150px",
      background: "#FFFFFF",
      boxShadow: "0px 1px 3px #8A8A8A",
      borderRadius: "5px",
      display: "flex",
      padding: "5px",
      cursor: "pointer",
    },
    categoryPreview: {
      height: "100%",
      minWidth: "195px",
      background: color,
      boxSizing: "border-box",
      borderRadius: "5px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    content: {
      width: "100%",
      height: "100%",
      padding: "1em",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "space-evenly"
    }
  }

  return (
    <div style={styles.root}>
      <div style={styles.categoryPreview}>
        <Icon name={icon} size={72} color="#fff" />
      </div>
      <div style={styles.content}>
        <Typography type="h3" text={name} textAlign="left" />
        <Typography type="body1" text={description} textAlign="left" />
        <Typography type="body1" text={nameCat} textAlign="flex-end" color={color} />
      </div>
    </div>
  )
}

export default Card;