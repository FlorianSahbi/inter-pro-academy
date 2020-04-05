import React from "react";
import Card from "../components/Card";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Palette } from "../pages/Home";

const GET_COURSES = gql`
  query {
    courses {
      id
      name
      description
      category {
        name
        icon
        color
      }
    }
  }
`;

const Formations = ({ limit, filter }) => {
  const { data, loading, error } = useQuery(GET_COURSES, { onError: error => console.log(error), onCompleted: data => console.log(data) })
  const styles = {
    root: {
      height: "auto",
      width: "100%",
      backgroundColor: Palette.common.white,
      display: "flex",
      justifyContent: "center",
      // border: "5px solid black",
    },
    list: {
      display: "grid",
      gridTemplateColumns: "repeat(1, 1fr)",
      gridGap: "10px",
      minWidth: "1200px",
      width: "1200px",
    }
  }

  const renderFormations = ({ courses }) => {
    if (filter) {
      return courses.filter(formation => formation.category.name === filter).map(({ name, description, category }) => <Card name={name} description={description} category={category} />);
    } else if (limit) {
      return courses.map(({ name, description, category }) => <Card name={name} description={description} category={category} />).slice(0, limit);
    } else {
      return courses.map(({ name, description, category }) => <Card name={name} description={description} category={category} />);
    }
  }
  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error.message}</p>
  }
  if (data) {
    console.log(data)
    return (
      <section style={styles.root}>
        <div style={styles.list}>
          {renderFormations(data)}
        </div>
      </section>
    )
  }
}

export default Formations; 
