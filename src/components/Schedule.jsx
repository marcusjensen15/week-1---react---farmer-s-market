import React from 'react';
import Appointment from './Appointment'

const marketSchedule = [
 {
    day: "Sunday",
    location: "Lents International",
    hours: "9:00am - 2:00pm",
    booth: "4A"
 },
 {
    day: "Monday",
    location: "Pioneer Courthouse Square",
    hours: "10:00am - 2:00pm",
    booth: "7C"
 },
 {
    day: "Tuesday",
    location: "Hillsboro",
    hours: "5:00pm - 8:30pm",
    booth: "1F"
 },
 {
    day: "Wednesday",
    location: "Shemanski Park",
    hours: "10:00am - 2:00pm",
    booth: "3E"
 },
 {
    day: "Thursday",
    location: "Northwest Portland",
    hours: "2:00pm - 6:00pm",
    booth: "6D"
 },
 {
    day: "Saturday",
    location: "Beaverton",
    hours: "10:00am - 1:30pm",
    booth: "9G"
 }
];

function Schedule() {
  let schedStyle = {
    padding: '150px',
    display: 'grid',
    border: '15px solid rgb(255,0,150)',
    boxShadow: '10px 15px rgb(37,211,210)',
    borderRadius: '20px',
    backgroundColor: 'rgb(200,175,255)',
    margin: '55px',
    marginBottom: '30px'
  }
  return (
    <div className="Schedule" style={schedStyle}>
      {
        marketSchedule.map((appointment, index) =>
          <Appointment
            day={appointment.day}
            location={appointment.location}
            hours={appointment.hours}
            booth={appointment.booth}
            key={index}
          />
      )}
    </div>
  );
}

export default Schedule;
