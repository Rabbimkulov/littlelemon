import React from 'react';

const Confirmation = ({ reservation }) => {
  return (
    <div className="confirmation">
      <h2>Reservation Confirmed!</h2>
      <p>Thank you, {reservation.name}! Here are your reservation details:</p>
      <p><strong>Date:</strong> {reservation.date}</p>
      <p><strong>Time:</strong> {reservation.time}</p>
      <p><strong>Number of Guests:</strong> {reservation.guests}</p>
      <p><strong>Special Requests:</strong> {reservation.specialRequest}</p>
    </div>
  );
};

export default Confirmation;
