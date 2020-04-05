import React from "react";
import Typography from "./Typography";

const RoundImage = ({ src, alt }) => {
  const styles = {
    root: {
      height: "122px",
      width: "122px",
      borderRadius: "50%",
      boxShadow: "0px 5px 10px 0px grey",
      // border: "5px solid green",
    },
    image: {
      borderRadius: "50%",
      height: "100%",
      width: "100%",
      objectFit: "cover",
      objectPosition: "center",
      border: "5px solid white",
    }
  }
  return (
    <div style={styles.root}>
      <img style={styles.image} src={src} alt={alt} />
    </div>
  )
}

function TestimonialCard() {
  const styles = {
    root: {
      width: "525px",
      height: "405px",
      padding: "2rem",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: "white",
      borderRadius: "10px",
      // border: "5px solid blue",
    }
  }
  return (
    <div style={styles.root}>
      <RoundImage src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="image" />
      <Typography type="body1" text="Chicago" textAlign="center" />
      <Typography type="body1" text="Jane Doe" textAlign="center" />
      <Typography textAlign="justify" text="Ce qui m'a convaincu chez Inter’Pro Academy c'est que la formation est diplômante et surtout inscrite au RNCP, ce qui pour moi était une garantie dans sa qualité. On y acquiert des compétences recherchées dans son domaine professionnel pour trouver un emploi à la fin, dans un domaine où le télétravail est largement répandu." type="body1" color="#000" />
    </div>
  )
}

export default TestimonialCard;