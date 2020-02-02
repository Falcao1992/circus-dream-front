import React, { useState, useEffect } from "react";
import axios from "axios";

import "./Reservation.css";

const Reservation = () => {
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputPhoneNumber, setInputPhoneNumber] = useState("");
  const [inputDateReservation, setInputDateReservation] = useState("");
  const [inputNombresPersonne, setInputNombresPersonne] = useState(0);
  const [inputCity, setInputCity] = useState("");
  const [
    currentRepresentationTicketSold,
    setCurrentRepresentationTicketSold
  ] = useState(0);

  const [test, setTest] = useState(false);

  useEffect(() => {
    checkInputCity();
  });

  const checkInputCity = () => {
    if (inputCity) {
      const fetchRepresentations = async () => {
        const result = await axios.get(
          `http://localhost:5000/api/v1/representations/${inputCity.toUpperCase()}`
        );
        setCurrentRepresentationTicketSold(result.data[0].ticket_sold);
        console.log(currentRepresentationTicketSold);
      };
      fetchRepresentations();
    } else {
      console.log("pas dans le else");
    }
  };

  const submitFormulaire = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    axios
      .post("http://localhost:5000/api/v1/reservations/", {
        name: inputName,
        number_ticket: inputNombresPersonne,
        email: inputEmail,
        phone_number: inputPhoneNumber,
        city: inputCity,
        date: inputDateReservation
      })
      .then(req => {
        axios.put(
          `http://localhost:5000/api/v1/representations/${inputCity.toUpperCase()}`,
          {
            ticket_sold: currentRepresentationTicketSold + inputNombresPersonne
          }
        );
      });
  };

  return (
    <div className="reservation__content">
      <div className="reservation__block-titre">
        <h1 className="reservation__titre">
            Reserver
        </h1>
      </div>
      <form
        encType="multipart/formdata"
        className="reservation__form"
        onSubmit={submitFormulaire}
      >
        <label htmlFor="name">
          Nom:
          <input
            value={inputName}
            onChange={e => setInputName(e.target.value)}
            name="name"
            type="text"
            placeholder=" Nom"
            className="form__item"
          />
        </label>
        <div className="reservation__form-block-select">
        <label htmlFor="city-select" className="reservation__form-select-label">Ville:</label>
        <select
          value={inputCity}
          onChange={e => setInputCity(e.target.value)}
          name="city"
          id="city-select"
        >
          <option value=""> Choississez votre ville</option>
          <option value="TOURS">TOURS</option>
          <option value="LA ROCHE SUR YON">LA ROCHE SUR YON</option>
        </select>

        </div>

        <label htmlFor="email">
          Email:
          <input
            value={inputEmail}
            onChange={e => setInputEmail(e.target.value)}
            name="email"
            type="email"
            placeholder=" Email"
            className="form__item"
          />
        </label>
        <label htmlFor="phoneNumber">
          Téléphone:
          <input
            value={inputPhoneNumber}
            onChange={e => setInputPhoneNumber(e.target.value)}
            name="phone_number"
            type="number"
            placeholder=" 02 XX XX XX XX"
            className="form__item"
          />
        </label>
        <label htmlFor="dateReservation">
          Date:
          <input
            value={inputDateReservation}
            onChange={e => setInputDateReservation(e.target.value)}
            name="date"
            type="date"
            className="form__item"
          />
        </label>

        <label htmlFor="nombresPersonne">
          Nb de personnes: &nbsp; {inputNombresPersonne} &nbsp;
          <input
            value={inputNombresPersonne}
            onChange={e => setInputNombresPersonne(parseInt(e.target.value))}
            name="number_ticket"
            type="range"
            min="1"
            max="9"
            className="form__item-range"
          />
        </label>

        <button type="submit">envoyer</button>
      </form>
    </div>
  );
};

export default Reservation;
