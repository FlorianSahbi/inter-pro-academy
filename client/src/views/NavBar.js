import React from "react";
import Typography from "../components/Typography";
import { useHistory } from "react-router-dom";
import { Palette } from "../pages/Home";

const NavBar = ({ home = false }) => {
  let history = useHistory();
  const styles = {
    root: {
      backgroundColor: home ? "" : Palette.common.white,
      position: home ? "absolute" : "",
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      width: "1200px",
      height: "100%",
    },
    menuWrapper: {
      width: "1200px",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    }
  }

  const menuContent = [
    {
      name: "Accueil",
      url: "/"
    },
    {
      name: "Nos formations",
      url: "/courses"
    },
    {
      name: "Nos centres de formation",
      url: "/"
    },
    {
      name: "Contactez-nous",
      url: "/"
    },
  ]
  return (
    <div style={styles.root}>
      <div style={styles.wrapper}>
        <ul style={styles.menuWrapper}>
          {menuContent.map(e => <li onClick={() => history.push(e.url)}><Typography color="#991A40" type="body1" text={e.name} /></li>)}
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
