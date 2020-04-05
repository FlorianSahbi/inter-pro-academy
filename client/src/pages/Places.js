import React from "react";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import Layout from "../components/Layout";
import { Palette } from "./Home";

const Place = ({ name, phone, mail, address, location }) => {
  const styles = {
    root: {
      height: "500px",
      width: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      // border: "5px solid pink",
    },
    map: {
      backgroundColor: "lightgrey",
      height: "200px",
      width: "100%",
      // border: "5px solid red",
    }
  }
  return (
    <div style={styles.root}>
      <Typography textAlign="center" type="body1" text="Name :" />
      <Typography textAlign="center" type="body1" text={name} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Phone :" />
      <Typography textAlign="center" type="body1" text={phone} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Mail :" />
      <Typography textAlign="center" type="body1" text={mail} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Address :" />
      <Typography textAlign="center" type="body1" text={address} />
      <Spacer spacing={1} />
      <div style={styles.map}></div>
    </div>
  )
}

function Places() {
  const places = [
    {
      name: "Centre de Tunis",
      phone: "N/A",
      mail: "N/A",
      address: "Rue Eben Kholdoun, 2058 Ryadh Landalous, Tunis",
      location: {
        lat: "36.8773697",
        long: "10.1677512,15z",
      },
    },
    {
      name: "Centre d’El Kef",
      phone: "N/A",
      mail: "N/A",
      address: "N/A",
      location: "N/A",
    },
  ]

  const styles = {
    root: {
      border: "5px solid black",
      height: "100%",
      width: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      justifyItems: "center",
    }
  }

  return (
    <Layout>
      <section style={styles.root}>
        {places.map(({ name, phone, address, location }) => <Place name={name} phone={phone} address={address} location={location} />)}
      </section>
    </Layout>
  )
}

export default Places;
