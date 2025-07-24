import React from "react";
import { Row, Col, Typography, Image, Button } from "antd";
import { Link } from "react-router-dom";
import "./Hero.css";

const { Title, Paragraph } = Typography;

const Hero = () => (
  <section className="hero" role="banner" aria-label="Hero section">
    <Row className="hero__row" align="middle" justify="center">
      <Col xs={24} md={12} className="hero__content">
        <Title level={1} className="hero__title">Little Lemon</Title>
        <Title level={3} className="hero__subtitle">Chicago</Title>
        <Paragraph className="hero__paragraph">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Link to="/reservations">
          <Button
            type="primary"
            size="large"
            className="hero__button"
            aria-label="Reserve a table at Little Lemon"
          >
            Reserve a Table
          </Button>
        </Link>
      </Col>
      <Col xs={24} md={12} className="hero__image-col">
        <Image
          src="Hero_Dish.jpg"
          preview={false}
          className="hero__image"
          alt="Restaurant interior showing dining area"
        />
      </Col>
    </Row>
  </section>
);

export default Hero;