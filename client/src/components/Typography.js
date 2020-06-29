import React from "react";
import Spacer from "./Spacer";
import Icon from "./Icon";

const Typography = ({ text, type, textAlign, color = "#464646", iconRight, iconLeft, onHoverEffect }) => {
  const styles = {
    h1: {
      width: "100%",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "72px",
      lineHeight: "73px",
      textTransform: "uppercase",
      textAlign: textAlign,
      display: "flex",
      justifyContent: textAlign,
      alignItems: "center",
      fontFamily: "poppins",
      color: "#991A40",
    },
    h2: {
      width: "100%",
      fontStyle: "normal",
      fontWeight: "normal",
      fontSize: "36px",
      lineHeight: "37px",
      textAlign: textAlign,
      display: "flex",
      justifyContent: textAlign,
      alignItems: "center",
      fontFamily: "poppins",
      color: color,
    },
    h3: {
      fontSize: "24px",
      lineHeight: "166.76%",
      width: "100%",
      fontStyle: "normal",
      fontWeight: "normal",
      textAlign: textAlign,
      display: "flex",
      justifyContent: textAlign,
      alignItems: "center",
      fontFamily: "poppins",
      color: color,
    },
    body1: {
      fontStyle: "normal",
      fontWeight: "400",
      fontSize: "16px",
      lineHeight: "25px",
      width: "100%",
      fontFeatureSettings: "'pnum' on, 'lnum' on",
      textAlign: textAlign,
      display: "flex",
      justifyContent: textAlign,
      alignItems: "center",
      fontFamily: "poppins",
      color: color,
    },
    body2: {
      fontWeight: "400",
      fontSize: "12px",
      lineHeight: "138.76%",
      width: "100%",
      fontStyle: "normal",
      textAlign: textAlign,
      display: "flex",
      justifyContent: textAlign,
      alignItems: "center",
      fontFamily: "poppins",
      color: color,
    }
  }

  return (
    <div style={styles[type]}>
      {iconLeft && (
        <>
          <Icon color={color} size={styles[type].fontSize} name={iconLeft} />
          <Spacer spacing={0.2} direction="horizontal" />
        </>
      )
      }
      {text}
      {iconRight && (
        <>
          <Spacer spacing={0.2} direction="horizontal" />
          <Icon color={color} size={styles[type].fontSize} name={iconRight} />
        </>
      )
      }
    </div>
  )
}

export default Typography;
