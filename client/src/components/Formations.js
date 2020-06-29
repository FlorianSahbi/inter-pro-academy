import React from "react";
import Card from "./Card";
import { useQuery } from "@apollo/react-hooks";
import { GET_COURSES } from "../graphql/coursesQueries";
import Loader from "./Loader";
import Spacer from "./Spacer";
import Typography from "./Typography";
import { useHistory } from "react-router-dom";
import "./Formations.css";

const Formations = ({ limit, filter, seeMore }) => {
  const history = useHistory();
  const { data, loading, error } = useQuery(GET_COURSES, {
    onError: error => console.error(error),
  })

  const renderFormations = ({ courses }) => {
    if (filter) {
      return courses.filter(formation => formation.category.name === filter).map(({ name, description, category }) => <Card key={`${name}-${category}`} name={name} description={description} category={category} />);
    } else if (limit) {
      return courses.map(({ name, description, category }) => <Card key={`${name}-${category}`} name={name} description={description} category={category} />).slice(0, limit);
    } else {
      return courses.map(({ name, description, category }) => <Card key={`${name}-${category}`} name={name} description={description} category={category} />);
    }
  }
  if (loading) {
    return <Loader />
  }
  if (error) {
    return <p>{error.message}</p>
  }
  if (data) {
    return (
      <section className="root-formations">
        <div className="list-formations">
          {renderFormations(data)}
        </div>
        <Spacer spacing={1} />
        {seeMore &&
          <div style={{ cursor: "pointer" }} onClick={() => history.push("/courses")}>
            <Typography text="Voir toutes les formations" type="body1" textAlign="center" />
          </div>
        }
      </section>
    )
  }
}

export default Formations; 
