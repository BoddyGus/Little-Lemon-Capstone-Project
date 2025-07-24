import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import ReservationForm from './ui/ReservationForm/Main';

function ReservationPage() {
  return (
    <>
      <Header />
      <main>
        <ReservationForm />
      </main>
      <Footer />
    </>
  );
}

export default ReservationPage;