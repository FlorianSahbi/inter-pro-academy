import React from "react";
import Chip from "./Chip";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";
import { Palette } from "../pages/Home.js";

const GET_CATEGORIES = gql`
  query {
    categories {
      id
      name
      icon
      color
    }
  }
`;

const Filters = ({ onFilterChange, filter }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES, { onError: error => console.log("filter", error), onCompleted: data => console.log("filter", data) })
  const styles = {
    root: {
      display: 'flex',
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      backgroundColor: Palette.common.white,
    },
    list: {
      width: "1200px",
      minWidth: "1200px",
      display: 'flex',
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: 'wrap',
    },
    padding: {
      padding: "0.5em",
    }
  }

  const handleOnFilterClicked = (filter) => {
    onFilterChange(filter);
  }

  const renderFilters = ({ categories }) => {
    return categories.map(({ color, name, icon }) => {
      return (
        <div style={styles.padding}>
          <Chip isActive={name === filter} color={color} label={name} icon={icon} onClickFilter={handleOnFilterClicked} />
        </div>
      )
    })
  }

  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    return (
      <section style={styles.root}>
        <div style={styles.list}>
          {renderFilters(data)}
        </div>
      </section>
    )
  }
}

export default Filters;
