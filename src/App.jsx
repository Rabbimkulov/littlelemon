import React, { useState } from 'react';
import ReservationForm from './ReservationForm';
import Confirmation from './Confirmation';
import './App.css'; // Ensure you import the CSS file

const App = () => {
  const [reservation, setReservation] = useState(null);

  const handleReservation = (data) => {
    setReservation(data);
  };

  return (
    <div className="container">
      <h1>Little Lemon Reservation</h1>
      {reservation ? (
        <Confirmation reservation={reservation} />
      ) : (
        <ReservationForm onReserve={handleReservation} />
      )}
    </div>
  );
};

export default App;
