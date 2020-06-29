import React from "react";
import Spacer from "../components/Spacer";
import Typography from "../components/Typography";
import Layout from "../components/Layout";
import places from "../data/places.json";
import map from "../assets/images/mockupGmap.png";

const Place = ({ name, phone, email, address, location }) => {
  const styles = {
    root: {
      height: "500px",
      width: "400px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
    },
    map: {
      backgroundColor: "lightgrey",
      height: "200px",
      width: "100%",
    },
    image: {
      height: "100%",
      width: "100%",
      objectFit: "cover"
    }
  }
  return (
    <div style={styles.root}>
      <Typography textAlign="center" type="h3" text={name} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Phone :" />
      <Typography textAlign="center" type="body1" text={phone} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Mail :" />
      <Typography textAlign="center" type="body1" text={email} />
      <Spacer spacing={1} />
      <Typography textAlign="center" type="body1" text="Address :" />
      <Typography textAlign="center" type="body1" text={address} />
      <Spacer spacing={1} />
      <div style={styles.map}>
        {/* Temporary since we are waiting to get gmap api key */}
        <img style={styles.image} src={map} alt={`${map}-gmap`} />
      </div>
    </div>
  )
}

function Places() {
  const styles = {
    root: {
      padding: "5rem",
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
        {places.map(({ name, phone, address, location, email }) => <Place name={name} email={email} phone={phone} address={address} location={location} />)}
      </section>
    </Layout>
  )
}

export default Places;
