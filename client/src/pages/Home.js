import React from 'react';
import Typography from "../components/Typography";
import ContactForm from "../components/ContactForm";
import IconBox from "../components/IconBox";
import Formations from "../views/Formations";
import Spacer from '../components/Spacer';
import Layout from '../components/Layout';
import TestimonialCard from '../components/TestimonialCard';

const Presentation = () => {
  const presentation = [
    "Notre centre de formation est destiné à toutes les tranches d’âge et vise à assurer des formations professionnelles et certifiantes de qualité dans différents domaines.",
    "Les candidats auront le droit à, non seulement, un bilan de compétence dès leur entrée au centre, mais aussi à un accompagnement post-formation.",
    "Nos différents partenariats seront mis au service de la facilitation de l’intégration professionnel"
  ]
  const styles = {
    root: {
      height: "10vh",
      width: "100%",
      border: "5px solid pink",
    }
  }
  return (
    <div style={styles.root}>
      {presentation.map((p) => < Typography text={p} type="body1" />)}
    </div>
  )
}


const Testimonials = () => {
  const testimonials = [
    {
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "image",
      city: "Chicago",
      identity: "Jane Doe",
      message: "Ce qui m'a convaincu chez Inter’Pro Academy c'est que la formation est diplômante et surtout inscrite au RNCP, ce qui pour moi était une garantie dans sa qualité. On y acquiert des compétences recherchées dans son domaine professionnel pour trouver un emploi à la fin, dans un domaine où le télétravail est largement répandu."
    },
    {
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      alt: "image",
      city: "Chicago",
      identity: "Jane Doe",
      message: "Ce qui m'a convaincu chez Inter’Pro Academy c'est que la formation est diplômante et surtout inscrite au RNCP, ce qui pour moi était une garantie dans sa qualité. On y acquiert des compétences recherchées dans son domaine professionnel pour trouver un emploi à la fin, dans un domaine où le télétravail est largement répandu."
    },
  ]
  const styles = {
    root: {
      width: "100%",
      height: "100%",
      display: "grid",
      gridTemplateColumns: "repeat(2, 1fr)",
      gap: "1rem",
      justifyItems: "center",
      alignItems: "center",
      // border: "5px solid blue",
    }
  }
  return (
    <>
      {/* <Typography text="Avis de nos étudiants et clients" type="h2" color="#D3936D" textAlign="center" /> */}
      <div style={styles.root} >
        {testimonials.map(t => <TestimonialCard />)}
      </div>
    </>
  )
}

const Pros = () => {
  const pros = [
    {
      description: "Un catalogue de formation complet",
      icon: "GiFiles"
    },
    {
      description: "Une équipe de formateurs qualifiés et certifiés",
      icon: "IoIosPeople"
    },
    {
      description: "Des partenariats dans tous les domaines",
      icon: "FaHandshake"
    },
    {
      description: "Un conseil et un accompagnement personnalisé",
      icon: "GiFiles"
    },
    {
      description: "Des prix compétitifs",
      icon: "FaEuroSign"
    },
  ]

  const styles = {
    root: {
      backgroundColor: "#49525F",
      display: "grid",
      gridTemplateColumns: "repeat(5, 1fr)",
      gap: "1rem",
      justifyContent: "center",
      width: "100%",
      // border: "5px solid red",

    }
  }
  return (
    <>
      {/* <Typography text="Pourquoi nous choisir ?" type="h2" color="#D3936D" textAlign="center" /> */}
      <div style={styles.root}>
        {pros.map(({ description, icon }) => <IconBox text={description} icon={icon} />)}
      </div>
    </>
  )
}

export const Palette = {
  primary: {
    light: "",
    main: "#991A40",
    dark: "",
  },
  secondary: {
    light: "",
    main: "#D3936D",
    dark: "",
  },
  common: {
    black: "#2D2D2D",
    white: "#FBFBFB",
    grey: "#979797",
  }
}

function Home() {
  return (
    <Layout>
      <Spacer spacing={3} />
      <Presentation />
      <Spacer spacing={3} />
      <Typography text="Nos meilleures ventes" type="h2" color="#D3936D" textAlign="center" />
      <Spacer spacing={3} />
      <Formations limit={5} />
      <Spacer spacing={3} />
      <Pros />
      <Spacer spacing={3} />
      <Testimonials />
      <Spacer spacing={3} />
      <ContactForm />
      <Spacer spacing={3} />
    </Layout>
  )
}

export default Home;
