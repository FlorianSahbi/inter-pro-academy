import React from "react";
import Typography from "./Typography";
import { useHistory } from "react-router-dom";
import { Theme } from "../config/Theme";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const NavBar = ({ home = false }) => {
  let history = useHistory();
  const styles = {
    root: {
      backgroundColor: home ? "" : Theme.palette.common.white,
      position: home ? "absolute" : "",
      width: "100%",
      height: "100px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    wrapper: {
      width: "100%",
      height: "100%",
    },
    menuWrapper: {
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-evenly",
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
      url: "/places"
    },
  ]
  return (
    <div style={styles.root}>
      <div style={styles.wrapper}>
        <ul style={styles.menuWrapper}>
          {menuContent.map(({name, url}) => <li key={`${name}`} style={{ cursor: "pointer" }} onClick={() => history.push(url)}><Typography color="#991A40" type="body1" text={name} /></li>)}
          <AnchorLink href='#contact'>
            <div style={{border: "2px solid #991A40", padding: ".5rem", borderRadius: "5px"}}>
              <Typography color="#991A40" type="body1" text="Contactez-nous" />
            </div>
          </AnchorLink>
        </ul>
      </div>
    </div>
  )
}

export default NavBar;
