import React from "react";
import Fade from "react-reveal/Fade";

import Breadcrumb from "elements/Breadcrumb";

export default function Title(props) {
  return (
    <div className="container spacing-sm" style={{ marginBottom: "50px" }}>
      <Fade bottom>
        <div className="row align-items-center">
          <div className="col">
            <Breadcrumb data={props.breadcrumb} />
          </div>
          <div className="col-auto text-center">
            <h1 className="h2">{props.heading.title}</h1>
            <span className="text-gray-400">{props.heading.subtitle}</span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </div>
  );
}
