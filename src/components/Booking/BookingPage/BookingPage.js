import React from 'react';
import BookingForm from '../BookingForm/BookingForm';
import './BookingPage.css';

function BookingPage({ availableTimes, dispatch, submitForm }) {
  return (
    <div className="booking-page">
      <h1>Reserve a Table</h1>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </div>
  );
}

export default BookingPage;