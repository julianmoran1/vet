import React, { Fragment, useState } from "react";
import uuid from "uuid/v4";

export default function Form({ createAppointment }) {
  const [appointment, setAppointment] = useState({
    pet: "",
    owner: "",
    date: "",
    hour: "",
    symptoms: "",
  });

  const [error, setError] = useState(false);

  //set the state with the input values
  const setState = (event) => {
    setAppointment({
      ...appointment,
      [event.target.name]: event.target.value,
    });
  };

  //extract input values
  const { pet, owner, date, hour, symptoms } = appointment;

  //submits appointment
  const submitAppointment = (event) => {
    event.preventDefault();
    
    //validation
    if (
      pet.trim() === "" ||
      owner.trim() === "" ||
      date.trim() === "" ||
      hour.trim() === "" ||
      symptoms.trim() === ""
    ) {
      setError(true);
      return;
    }

    setError(false);

    //asign id
    appointment.id = uuid();

    //create appointment
    createAppointment(appointment);

    //delete form
    setAppointment({
      pet: "",
      owner: "",
      date: "",
      hour: "",
      symptoms: "",
    });
  };

  return (
    <Fragment>
      <h2>Create appointment</h2>
      <form onSubmit={submitAppointment}>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet´s name"
          onChange={setState}
          value={pet}
        />
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner´s name"
          onChange={setState}
          value={owner}
        />
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={setState}
          value={date}
        />
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={setState}
          value={hour}
        />
        <textarea
          className="u-full-width"
          name="symptoms"
          placeholder="Symptoms"
          onChange={setState}
          value={symptoms}
        ></textarea>

        {error && <p className="error-alert">All fields are mandatory</p>}
        <button type="submit" className="u-full-width button-primary">
          Add appointment
        </button>
      </form>
    </Fragment>
  );
}
