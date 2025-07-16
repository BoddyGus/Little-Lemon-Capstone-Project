import React, { useState} from 'react';
import { Row, Col, Space, Flex, Form, Select, InputNumber, Button, DatePicker, message } from 'antd';
import './BookingForm.css';

const { Option } = Select;

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [loading, setLoading] = useState(false);

  const handleDateChange = (dateObj, dateString) => {
    setDate(dateString);
    setTime('');
    dispatch({ type: 'UPDATE_TIMES', date: dateString });
  };

  const handleSubmit = async (values) => {
    setLoading(true);

    const formData = {
      date,
      time,
      guests,
      occasion
    };

    try {

      const success = submitForm(formData);

      if (success) {
        message.success('Reservation submitted successfully!');
      } else {
        message.error('Failed to submit reservation. Please try again.');
      }
    } catch (error) {
      message.error('An error occurred while submitting your reservation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="booking-form">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          initialValues={{
            guests: 1,
            occasion: 'Birthday'
          }}
        >
          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Choose date"
                name="date"
                rules={[{ required: true, message: 'Please select a date!' }]}
              >
                <DatePicker
                  style={{ width: '100%' }}
                  onChange={handleDateChange}
                  placeholder="Select date"
                  disabledDate={(current) => {
                    return current && current < new Date().setHours(0, 0, 0, 0);
                  }}
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Choose time"
                name="time"
                rules={[{ required: true, message: 'Please select a time!' }]}
              >
                <Select
                  placeholder="Select a time"
                  value={time}
                  onChange={(value) => {
                    console.log('Time selected:', value);
                    setTime(value);
                  }}
                  style={{ width: '100%' }}
                  disabled={!date || availableTimes.length === 0}
                >
                  {availableTimes.map((availableTime) => (
                    <Option key={availableTime} value={availableTime}>
                      {availableTime}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={[16, 16]}>
            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Number of guests"
                name="guests"
                rules={[{ required: true, message: 'Please enter number of guests!' }]}
              >
                <InputNumber
                  min={1}
                  max={10}
                  value={guests}
                  onChange={(value) => setGuests(value)}
                  style={{ width: '100%' }}
                  placeholder="1"
                />
              </Form.Item>
            </Col>

            <Col xs={24} sm={12} md={12}>
              <Form.Item
                label="Occasion"
                name="occasion"
                initialValue="Birthday"
              >
                <Select
                  value={occasion}
                  onChange={(value) => setOccasion(value)}
                  style={{ width: '100%' }}
                >
                  <Option value="Birthday">Birthday</Option>
                  <Option value="Anniversary">Anniversary</Option>
                  <Option value="Engagement">Engagement</Option>
                  <Option value="Graduation">Graduation</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row justify="center" className="booking-form__submit-row">
            <Col>
              <Flex justify="center">
                <Button
                  type="primary"
                  htmlType="submit"
                  size="large"
                  loading={loading}
                  disabled={!date || !time || !guests}
                  className="booking-form__submit-button"
                >
                  Make Your Reservation
                </Button>
              </Flex>
            </Col>
          </Row>
        </Form>
      </Space>
    </div>
  );
}

export default BookingForm;