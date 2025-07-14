import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch }) {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </div>
  );
}

export default BookingPage;