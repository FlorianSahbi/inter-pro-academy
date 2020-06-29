import React, { useState } from "react";
import Filters from "../components/Filters";
import Spacer from "../components/Spacer";
import Layout from "../components/Layout";
import Formations from "../components/Formations";

function Courses() {
  const [filter, setFilter] = useState(null);
  const handleFilterChange = (filter) => {
    setFilter(filter)
  }
  return (
    <Layout>
      <Spacer spacing={3} />
      <Filters onFilterChange={handleFilterChange} filter={filter} />
      <Spacer spacing={3} />
      <Formations filter={filter} />
      <Spacer spacing={3} />
    </Layout>
  )
}

export default Courses;
