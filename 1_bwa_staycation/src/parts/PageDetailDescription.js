import React from "react";
import ReactHtmlParser from "react-html-parser";

export default function PageDetailDescription({ data }) {
  return (
    <main>
      <h4>About the Place</h4>
      {ReactHtmlParser(data.description)}
      <div className="row" style={{ marginBottom: 30, marginTop: 30 }}>
        {
          data.featureId.length === 0 ? "tidak ada features" : data.featureId.map((feature, index) => {
          return (
            <div
              className="col-3"
              key={`feature${index}`}
              style={{ marginBottom: 20 }}
            >
              <img
                src={`${process.env.REACT_APP_HOST}/${feature.imageUrl}`}
                alt={feature.name}
                className="d-block mb-2"
                style={{height:40}}
              />{" "}
              <span>{feature.qty}</span>{" "}
              <span className="text-gray-500 font-weight-light">
                {feature.name}
              </span>
            </div>
          );
        })}
      </div>
    </main>
  );
}
