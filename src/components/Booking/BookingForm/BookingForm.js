import React, { useState } from 'react';
import './BookingForm.css';

function BookingForm() {

  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ]);

  return (
    <form className="booking-form">
      <label htmlFor="res-date" className="booking-form__label">Choose date</label>
      <input
        type="date"
        id="res-date"
        className="booking-form__input"
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />

      <label htmlFor="res-time" className="booking-form__label">Choose time</label>
      <select
        id="res-time"
        className="booking-form__select"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        <option value="">Select a time</option>
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}
      </select>

      <label htmlFor="guests" className="booking-form__label">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        className="booking-form__input"
        value={guests}
        onChange={(e) => setGuests(parseInt(e.target.value))}
      />

      <label htmlFor="occasion" className="booking-form__label">Occasion</label>
      <select
        id="occasion"
        className="booking-form__select"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>

      <input type="submit" value="Make Your reservation" className="booking-form__submit" />
    </form>
  );
}

export default BookingForm;