import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import MainPage from './pages/MainPage/MainPage';
import ReservationPage from './pages/ReservationPage/ReservationPage';
import ConfirmationPage from './pages/ConfirmationPage/ConfirmationPage';
import 'antd/dist/reset.css';

const { Content } = Layout;

function App() {
  return (
    <Router>
      <Layout>
        <Content>
          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/reservations" element={<ReservationPage />} />
            <Route path="/confirmed" element={<ConfirmationPage />} />
          </Routes>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;