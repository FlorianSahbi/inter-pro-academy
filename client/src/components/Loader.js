import React from "react";
import loading from "../assets/images/loading.svg";
import Typography from "../components/Typography";

function Loader() {
  const styles = {
    root: {
      position: "fixed",
      top: 0,
      left: 0,
      height: "100vh",
      width: "100vw",
      zIndedx: 999,
      backgroundColor: "#F1F2F3",
      display: "flex",
      justifyContent: "center",
      flexDirection: "column",
      alignItems: "center",
    },
    image: {
      height: "20%",
      width: "100%",
    }
  }

  return (
    <div style={styles.root}>
      <img style={styles.image} src={loading} alt="loader-img" />
      <Typography text="Chargement en cours..." type="body1" textAlign="center" />
    </div>
  )
}

export default Loader;