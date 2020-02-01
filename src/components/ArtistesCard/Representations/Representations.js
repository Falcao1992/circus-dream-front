import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/fr";
import "./Representations.css";

const Representations = () => {
  const [representations, setRepresentations] = useState([]);
  moment.locale("fr");

  useEffect(() => {
    const fetchRepresentations = async () => {
      const result = await axios.get(
        "http://localhost:5000/api/v1/representations"
      );
      setRepresentations(result.data);
      console.log(representations);
    };
    fetchRepresentations();
  }, []);

  return (
    <>
      <div className="representations__content">
        {representations.map(representation => (
          <div key={representation.id} className="representation__card">
            <h3 className="representation-ville">
              {representation.city.toUpperCase()}
            </h3>
            <p className="representation-date">
              {moment(representation.date).format("[le ]dddd Do MMMM")}
            </p>
            <div className="block-ticket-price">
              <p className="representation-price">
                {representation.ticket_price}€
              </p>
              <p className="representation-ticket">{`${representation.ticket_available -
                representation.ticket_sold} billet restants`}</p>
            </div>
            <button className="representation-button" type="button">
              reserver
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Representations;
