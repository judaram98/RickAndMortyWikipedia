import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CardDetails = () => {
  let { id } = useParams();
  const [fetchedData, setFetchedData] = useState([]);
  let { name, image, origin, location, gender, species, status, type } =
    fetchedData;
  let api = `https://rickandmortyapi.com/api/character/${id}`;

  useEffect(() => {
    //Lets open an IIFE function to fetch data
    (async function () {
      //Now we are going to tell javascript that wait until fetching data from API and convert it into a json
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column gap-4">
        <h1 className="text-center">{name}</h1>
        <img src={image} alt="" className="img-fluid" />
        {(() => {
          if (status === "Dead") {
            return <div className="badge bg-danger fs-5">{status}</div>;
          } else if (status === "Alive") {
            return <div className="badge bg-success fs-5">{status}</div>;
          } else {
            return <div className="badge bg-secondary fs-5">{status}</div>;
          }
        })()}
        <div className="content">
          <div className="">
            <span className="fw-bold">Gender :</span>
            {gender}
          </div>
          <div className="">
            <span className="fw-bold">Species :</span>
            {species}
          </div>
          <div className="">
            <span className="fw-bold">Type :</span>
            {type === "" ? "Unknown" : type}
          </div>
          <div className="">
            <span className="fw-bold">Location :</span>
            {location?.name}
          </div>
          <div className="">
            <span className="fw-bold">Origin :</span>
            {origin?.name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
