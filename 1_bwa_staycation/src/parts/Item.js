import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import Pagination from "elements/Pagination";

export default function Item(props) {
  const { item, data } = props;

  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 16;
  const pageVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(item.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  if (item.length === 0) return null;

  return (
    <section className="container" key={`item`}>
      <Fade bottom>
        <div className="row">
          <div className="container-grid">
            {item
              .sort((a, b) => {
                if (data.sequenceParams === "") {
                  return 0;
                } else if (data.sequenceParams === "most booking") {
                  return b.sumBooking - a.sumBooking;
                } else if (data.sequenceParams === "least booking") {
                  return a.sumBooking - b.sumBooking;
                } else if (data.sequenceParams === "pricely") {
                  return b.price - a.price;
                } else if (data.sequenceParams === "cheapest") {
                  return a.price - b.price;
                }
              })
              .filter((item) => {
                if (data.searchParams === "") {
                  return item;
                } else if (
                  item.title
                    .toLowerCase()
                    .includes(data.searchParams.toLowerCase())
                ) {
                  return item;
                }
              })
              .slice(pageVisited, pageVisited + usersPerPage)
              .map((item, index) => {
                return (
                  <div className="item column-3 row-1" key={`item-${index}`}>
                    <Fade bottom delay={200 * index}>
                      <div className="card">
                        <div className="tag">
                          ${item.price}
                          <span className="font-weight-light">
                            {" "}
                            per {item.unit}
                          </span>
                        </div>
                        <figure className="img-wrapper" style={{ height: 180 }}>
                          <img
                            src={
                              item.imageId[0]
                                ? `${process.env.REACT_APP_HOST}/${item.imageId[0].imageUrl}`
                                : ""
                            }
                            alt={item.title}
                            className="img-cover"
                          />
                        </figure>
                        <div className="meta-wrapper">
                          <Button
                            type="link"
                            href={`/properties/${item._id}`}
                            className="stretched-link d-block text-gray-900"
                          >
                            <h5 className="h4">{item.title}</h5>
                          </Button>
                          <span className="text-gray-500">
                            {item.city}, {item.country}
                          </span>
                        </div>
                      </div>
                    </Fade>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="row my-4">
          <div className="col">
            <div className="float-right">
              <Pagination pageCount={pageCount} changePage={changePage} />
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}
