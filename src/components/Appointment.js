import React from "react";

export default function Appointment({ appointment, deleteAppointment }) {
  return (
    <div className="appointment">
      <p>
        Pet: <span>{appointment.pet}</span>
      </p>
      <p>
        Owner: <span>{appointment.owner}</span>
      </p>
      <p>
        Date: <span>{appointment.date}</span>
      </p>
      <p>
        Hour: <span>{appointment.hour}</span>
      </p>
      <p>
        Syntoms: <span>{appointment.symptoms}</span>
      </p>
      <button
        className="button delete u-full-width"
        onClick={() => deleteAppointment(appointment.id)}
      >
        Delete
      </button>
    </div>
  );
}
