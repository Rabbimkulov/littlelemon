import React, { useState } from 'react';

const ReservationForm = ({ onReserve }) => {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState('');
  const [specialRequest, setSpecialRequest] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const reservationData = {
      name,
      date,
      time,
      guests,
      specialRequest,
    };
    onReserve(reservationData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Name:</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Time:</label>
        <input type="time" value={time} onChange={(e) => setTime(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Number of Guests:</label>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Special Requests:</label>
        <textarea value={specialRequest} onChange={(e) => setSpecialRequest(e.target.value)} />
      </div>
      <button type="submit">Reserve Table</button>
    </form>
  );
};

export default ReservationForm;
