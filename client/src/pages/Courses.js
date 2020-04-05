import React, { useState } from "react";
import Footer from "../views/Footer";
import NavBar from "../views/NavBar";
import Filters from "../components/Filters";
import Spacer from "../components/Spacer";
import Formations from "../views/Formations";
import { Palette } from "./Home";

function Courses() {
  const [filter, setFilter] = useState(null);
  const handleFilterChange = (filter) => {
    setFilter(filter)
  }
  return (
    <section style={{ backgroundColor: Palette.common.white }}>
      <NavBar />
      <Filters onFilterChange={handleFilterChange} filter={filter} />
      <Spacer spacing={3} />
      <Formations filter={filter} />
      <Spacer spacing={3} />
      <Footer />
    </section>
  )
}

export default Courses;
