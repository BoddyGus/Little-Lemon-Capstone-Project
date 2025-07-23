import React, { useReducer } from 'react';
import BookingPage from '../Booking/BookingPage/BookingPage';
import { useNavigate } from 'react-router-dom';
export function initializeTimes() {
  const today = new Date();
  if (typeof window !== 'undefined' && window.fetchAPI) {
    return window.fetchAPI(today);
  }

  return [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
  ];
}

export function updateTimes(state, action) {
  switch (action.type) {
    case 'UPDATE_TIMES':
      if (typeof window !== 'undefined' && window.fetchAPI && action.date) {
        const dateObject = new Date(action.date);
        return window.fetchAPI(dateObject);
      }
      return state;
    default:
      return state;
  }
}

function Main() {
  const navigate = useNavigate();
  const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
  const submitForm = (formData) => {

    try {
      if (typeof window !== 'undefined' && window.submitAPI) {
        const success = window.submitAPI(formData);

        if (success) {
          navigate('/confirmed', {
            state: { reservation: formData }
          });
          return true;
        } else {
          return false;
        }
      } else {
        navigate('/confirmed', {
          state: { reservation: formData }
        });
        return true;
      }
    } catch (error) {
      return false;
    }
  };
  return (
    <main>
      <BookingPage availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </main>
  );
}

export default Main;