import React from 'react';
import Typography from "../components/Typography";
import Spacer from '../components/Spacer';
import ContactForm from "../components/ContactForm";
import Formations from "../components/Formations";
import Layout from '../components/Layout';
import Testimonials from "../components/Testimonials";
import Pros from "../components/Pros";
import Presentation from "../components/Presentation";
import about from "../data/about.json";
import certification from "../data/certification.json";

function Home() {
  return (
    <Layout home>
      <Presentation title="Qui sommes-nous ?" texts={about} />
      <Typography text="Nos meilleures ventes" type="h2" textAlign="center" />
      <Spacer spacing={3} />
      <Formations limit={5} seeMore />
      <Presentation title="Nos certifications" texts={certification} />
      <Spacer spacing={2} />
      <Pros />
      <Testimonials />
      <ContactForm />
    </Layout>
  )
}

export default Home;
