import React from "react";
import IconBox from "../components/IconBox";
import pros from "../data/pros.json";
import Typography from "../components/Typography";
import Spacer from '../components/Spacer';
import "./Pros.css";

const Pros = () => {
  return (
    <div className="root-pros">
      <div className="titleSection-pros">
        <Typography text="Pourquoi nous choisir ?" type="h2" textAlign="center" color="#FBFBFB" />
      </div>
      <Spacer spacing={1} />
      <div className="contentSection-pros">
        {pros.map(({ description, icon }) => <IconBox key={`${description}-${icon}`} text={description} icon={icon} />)}
      </div>
    </div>
  )
}

export default Pros;