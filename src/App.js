import React, { Fragment, useState, useEffect } from "react";
import Form from "./components/Form";
import Appointment from "./components/Appointment";

function App() {
  // appointments en local storage
  let initialAppointments = JSON.parse(localStorage.getItem("appointments"));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // appointments array
  const [appointments, setAppointments] = useState(initialAppointments);

  useEffect(() => {
    if (initialAppointments) {
      localStorage.setItem("appointments", JSON.stringify(appointments));
    } else {
      localStorage.setItem("appointments", JSON.stringify([]));
    }
  }, [appointments]);

  // function that takes current appointments and adds a new one 
    const createAppointment = (appointment) => {
    setAppointments([...appointments, appointment]);
  };

  //delete appointment by id
  const deleteAppointment = (id) => {
    const newAppointments = appointments.filter((appointment) => appointment.id !== id);
    setAppointments(newAppointments);
  };

  // conditional title
  const title =
    appointments.length === 0
      ? "No appointments"
      : "Administrate your appointments";

  return (
    <Fragment>
      <h1>Vet Patients Administrator</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment appointment={appointment} key={appointment.id} deleteAppointment={deleteAppointment} />
            ))}
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
