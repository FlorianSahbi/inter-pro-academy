import React from "react";
import Typography from "./Typography";
import Spacer from "./Spacer";
import Button from "./Button";
import logo from "../assets/images/logoOnly.png";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import "./Header.css";

const Header = ({ home }) => {
  return (
    <header className="root-header" style={{ height: home ? "100vh" : "50vh" }}>
      <img src={logo} alt="logo" />
      <Typography type="h1" text="Inter’Pro Academy" textAlign="center" />
      <Typography type="h2" text="Centre de Formation et de Certification Internationale" textAlign="center" />
      <Spacer spacing={2} />
      {home &&
        <AnchorLink href='#top-site'>
          <Button label="En savoir plus" />
        </AnchorLink>
      }
    </header>
  )
}

export default Header;
