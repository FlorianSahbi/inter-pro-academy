import React from "react";
import Typography from "../components/Typography";
import Spacer from "../components/Spacer";
import Button from "../components/Button";
import logo from "../logoOnly.png";
import NavBar from "../views/NavBar";

const Header = () => {
  const styles = {
    header: {
      height: "100vh",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#4A515F",
      backgroundImage: "url('https://www.traveldailymedia.com/assets/2019/09/shutterstock_1059887825.jpg')",
      backgroundSize: "cover",
      backgroundAttachment: "fixed"
    },
  }
  return (
    <header style={styles.header}>
       <NavBar home />
      <img src={logo} alt="logo" />
      <Typography type="h1" text="Inter’Pro Academy" textAlign="center" />
      <Typography type="h2" text="Centre de Formation et de Certification Internationale" textAlign="center" />
      <Spacer spacing={2} />
      <Button label="En savoir plus" />
    </header>
  )
}

export default Header;
