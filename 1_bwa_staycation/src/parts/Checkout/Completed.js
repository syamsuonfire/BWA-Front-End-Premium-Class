import React from "react";
import Fade from "react-reveal/Fade";
import CompletedIlustration from "assets/images/completed.png";

export default function Completed() {
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center text-center">
          <div className="col-7">
            <img
              src={CompletedIlustration}
              alt="completed checkout apartment"
              className="img-fluid"
            />
            <p className="mt-2 text-gray-500">
              We will inform you you via email later once the transaction has
              been accepted
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
}
