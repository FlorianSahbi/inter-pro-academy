import React from "react";
import logo from "../assets/images/logo.png";
import Spacer from "./Spacer";
import Typography from "./Typography";
import FooterElem from "../data/footer.json";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="root-footer">
      <div className="wrapper-footer">
        <div className="left-footer">
          <img src={logo} alt="logo" />
        </div>
        <div className="right-footer">
          <ul className="list-footer">
            {
              FooterElem.map(({name}) => {
                return (
                  <span key={`${Math.floor(Math.random() * Math.floor(10))}`}>
                    <Spacer spacing={0.5} direction="horizontal" />
                    <li>
                      <Typography color="#000" text={name} type="body2" />
                    </li>
                  </span>
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
