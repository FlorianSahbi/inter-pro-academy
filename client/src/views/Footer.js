import React from "react";
import logo from "../logo.png";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import { Palette } from "../pages/Home.js";

const Footer = () => {
  const styles = {
    root: {
      width: "100%",
      height: "20vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "1rem, 0",
      backgroundColor: Palette.common.white,
      // border: "5px solid blue",
    },
    wrapper: {
      borderTop: "1px dotted grey",
      height: "100%",
      width: "100%",
      display: "grid",
      girdColumnsTemplate: "repeat(2, 1fr)",
      width: "1200px",
      // border: "5px solid red",

    },
    left: {
      height: "100%",
      // width: "100%",
      display: "flex",
      justifyContent: "flex-start",
      alignItems: "center",
      // border: "5px solid pink",
    },
    right: {
      height: "100%",
      width: "100%",
      // border: "5px solid black",

    },
    list: {
      height: "100%",
      // width: "100%",
      display: "flex",
      justifyContent: "flex-end",
      alignItems: "center",
      // border: "5px solid green",

    }
  }
  const footerElem = [
    {
      name: "Mentions Légales",
      url: "#"
    },
    {
      name: "Confidentialités",
      url: "#"
    },
    {
      name: "Copyright 2020",
      url: "#"
    },
  ]
  return (
    <footer style={styles.root}>
      <div style={styles.wrapper}>
        <div style={styles.left}>
          <img src={logo} alt="logo" />
        </div>
        <div style={styles.right}>
          <ul style={styles.list}>
            {
              footerElem.map(e => {
                return (
                  <>
                    <Spacer spacing={0.5} direction="horizontal" />
                    <li><Typography color="#000" text={e.name} type="body2" /></li>
                  </>
                )
              })
            }
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
