import React from 'react';
import { Row, Col, Typography, Button, Card, Space } from 'antd';
import { CheckCircleOutlined, HomeOutlined, CalendarOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import './ConfirmedBooking.css';

const { Title, Text, Paragraph } = Typography;

function ConfirmedBooking() {
  const navigate = useNavigate();
  const location = useLocation();

  const reservation = location.state?.reservation;

  const handleGoHome = () => {
    navigate('/');
  };

  const handleNewReservation = () => {
    navigate('/reservations');
  };

  return (
    <div className="confirmed-booking">
      <Card className="confirmed-booking__card">
        <Space direction="vertical" size="large" style={{ width: '100%', textAlign: 'center' }}>
          <CheckCircleOutlined className="confirmed-booking__icon" />

          <Title level={1} className="confirmed-booking__title">
            Booking Confirmed!
          </Title>

          <Paragraph className="confirmed-booking__message">
            Thank you for choosing Little Lemon! Your table reservation has been successfully confirmed.
          </Paragraph>

          {reservation && (
            <Card className="confirmed-booking__details">
              <Title level={3} className="confirmed-booking__details-title">
                Reservation Details
              </Title>
              <Row gutter={[16, 16]}>
                <Col span={12}>
                  <div className="confirmed-booking__detail-item">
                    <Text strong className="confirmed-booking__detail-label">Date:</Text>
                    <Text className="confirmed-booking__detail-value">{reservation.date}</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="confirmed-booking__detail-item">
                    <Text strong className="confirmed-booking__detail-label">Time:</Text>
                    <Text className="confirmed-booking__detail-value">{reservation.time}</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="confirmed-booking__detail-item">
                    <Text strong className="confirmed-booking__detail-label">Guests:</Text>
                    <Text className="confirmed-booking__detail-value">{reservation.guests}</Text>
                  </div>
                </Col>
                <Col span={12}>
                  <div className="confirmed-booking__detail-item">
                    <Text strong className="confirmed-booking__detail-label">Occasion:</Text>
                    <Text className="confirmed-booking__detail-value">{reservation.occasion}</Text>
                  </div>
                </Col>
              </Row>
            </Card>
          )}

          <Paragraph className="confirmed-booking__info">
            We look forward to serving you! If you need to make any changes to your reservation,
            please contact us at (312) 555-1234.
          </Paragraph>

          <Space size="middle">
            <Button
              type="primary"
              icon={<HomeOutlined />}
              onClick={handleGoHome}
              size="large"
              className="confirmed-booking__button"
            >
              Go Home
            </Button>
            <Button
              icon={<CalendarOutlined />}
              onClick={handleNewReservation}
              size="large"
              className="confirmed-booking__button"
            >
              Make Another Reservation
            </Button>
          </Space>
        </Space>
      </Card>
    </div>
  );
}

export default ConfirmedBooking;