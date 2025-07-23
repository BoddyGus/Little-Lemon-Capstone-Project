import React from 'react';
import Header from '../../shared/Header/Header';
import Footer from '../../shared/Footer/Footer';
import ConfirmationCard from './ui/ConfirmationCard/ConfirmedBooking';

function ConfirmationPage() {
  return (
    <>
      <Header />
      <main>
        <ConfirmationCard />
      </main>
      <Footer />
    </>
  );
}

export default ConfirmationPage;