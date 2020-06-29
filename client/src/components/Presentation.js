import React from "react";
import "./Presentation.css";
import Typography from "../components/Typography";
import Spacer from '../components/Spacer';

const Presentation = ({title, texts}) => {

  return (
    <div id="top-site" className="root-presentation">
      <div className="wrapper-presentation">

        <Typography text={title} type="h2" textAlign="center" />
        <Spacer spacing={1.5} />
        <div className="content-presentation">
          {texts.map((p) => <Typography key={`${p}`} text={p} type="body1" />)}
        </div>
      </div>
    </div>
  )
}

export default Presentation;