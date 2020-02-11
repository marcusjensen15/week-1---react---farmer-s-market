import React from 'react';
import PropTypes from "prop-types";


function Appointment(props) {
  return (
    <div className="Appointment">
      <ul>
        <li>{props.day}</li>
        <li>{props.location}</li>
        <li>{props.hours}</li>
        <li>{props.booth}</li>
      </ul>
    </div>
  );
}

Appointment.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired
};


export default Appointment;
