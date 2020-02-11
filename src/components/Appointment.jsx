import React from 'react';
import PropTypes from "prop-types";


function Appointment(props) {
  let apptStyle = {
    border: '2px solid black',
    margin: '5px',
    padding: '15px',
    backgroundColor: 'white',
    textAlign: 'center',
    // listStylePosition: 'inside'
  }
  let listStyler = {
    listStyleType: 'none'
  }
  return (
    <div className="Appointment" style={apptStyle}>
      <ul style={listStyler}>
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
