import React from "react";
import styles from "./Cards.module.scss";
import { Link } from "react-router-dom";

const Cards = ({ results, page }) => {
  let display;
  if (results) {
    display = results.map((character) => {
      let { id, name, image, location, status } = character;
      return (
        <Link
          style={{ textDecoration: "none" }}
          to={`${page} ${id}`}
          key={id}
          className="col-4 mb-4 position-relative text-dark"
        >
          <div className={styles.cards}>
            <img
              src={image}
              alt={image}
              className={`${styles.img} img-fluid`}
            />
            <div className="content">
              <div className="fs-4 fw-bold mb-4">{name}</div>
              <div className="fs-6">Last location</div>
              <div className="fs-5">{location.name}</div>
            </div>
          </div>
          {(() => {
            if (status === "Dead") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-danger`}
                >
                  {status}
                </div>
              );
            } else if (status === "Alive") {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-success`}
                >
                  {status}
                </div>
              );
            } else {
              return (
                <div
                  className={`${styles.badge} position-absolute badge bg-secondary`}
                >
                  {status}
                </div>
              );
            }
          })()}
        </Link>
      );
    });
  } else {
    display = "No results found";
  }
  return <>{display}</>;
};

export default Cards;
