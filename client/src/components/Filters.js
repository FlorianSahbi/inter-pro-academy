import React from "react";
import Chip from "./Chip";
import { useQuery } from "@apollo/react-hooks";
import {GET_CATEGORIES} from "../graphql/filtersQueries";
import Loader from "../components/Loader";
import "./Filters.css";

const Filters = ({ onFilterChange, filter }) => {
  const { data, loading, error } = useQuery(GET_CATEGORIES, {
    onError: error => console.error("filter", error),
  })


  const handleOnFilterClicked = (filter) => {
    onFilterChange(filter);
  }

  const renderFilters = ({ categories }) => {
    return categories.map(({ color, name, icon }) => {
      return (
        <div key={`${name}-${icon}`} className="padding-filters">
          <Chip isActive={name === filter} color={color} label={name} icon={icon} onClickFilter={handleOnFilterClicked} />
        </div>
      )
    })
  }

  if (loading) {
    return <Loader />
  }

  if (error) {
    return <p>{error.message}</p>
  }

  if (data) {
    return (
      <section className="root-filters">
        <div className="list-filters">
          {renderFilters(data)}
        </div>
      </section>
    )
  }
}

export default Filters;
