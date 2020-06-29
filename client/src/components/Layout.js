import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import NavBar from "./NavBar";
import "./Layout.css";

function Layout({ children, home }) {

  return (
    <div className="root-layout">
      <div className="header-layout" style={{ height: home ? "100vh" : "unset" }}>
        <NavBar home={home} />
        <Header home={home} />
      </div>
      <div className="content-layout">
        {children}
      </div>
      <div className="footer-layout">
        <Footer />
      </div>
    </div>
  )
}

export default Layout;