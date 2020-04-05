import React from "react";
import Header from "../views/Header";
import Footer from "../views/Footer";

function Layout({ children }) {
  const styles = {
    root: {
      minHeight: "100vh",
      width: "100vw",
      // border: "5px solid blue",
    },
    header: {
      height: "100vh",
      width: "100%",
      // border: "5px solid red",
    },
    content: {
      height: "auto",
      width: "100%",
      // border: "5px solid purple",
    },
    footer: {
      height: "20vh",
      width: "100%",
      // border: "5px solid green",
    }
  }
  return (
    <div style={styles.root}>
      <div style={styles.header}>
        <Header />
      </div>
      <div style={styles.content}>
        {children}
      </div>
      <div style={styles.footer}>
        <Footer />
      </div>
    </div>
  )
}

export default Layout;