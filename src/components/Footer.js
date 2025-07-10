import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import "../components_styles/Footer.css";

const { Title, Text, Paragraph } = Typography;

const Footer = () => (
  <div className="footer">
    <Row gutter={48} justify="space-between">
      <Col xs={24} md={8}>
        <img
          src="littlelemon-og-image.jpg"
          alt="Little Lemon Logo"
          className="footer__logo"
        />
        <Paragraph className="footer__description">
          Little Lemon is your neighborhood Mediterranean bistro, serving fresh and vibrant dishes every day.
        </Paragraph>
        <div className="footer__socials">
          <FacebookFilled className="footer__icon" />
          <InstagramFilled className="footer__icon" />
          <YoutubeFilled className="footer__icon" />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Row gutter={32}>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">NAVIGATION</Title>
            <Text className="footer__link">Home</Text>
            <Text className="footer__link">About</Text>
            <Text className="footer__link">Menu</Text>
            <Text className="footer__link">Reservations</Text>
            <Text className="footer__link">Order online</Text>
            <Text className="footer__link">Login</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">HOURS</Title>
            <Text className="footer__link">Mon - Fri: 8am - 10pm</Text>
            <Text className="footer__link">Sat & Sun: 10am - 4pm</Text>
            <Text className="footer__link">Online ordering: 11am - 9pm</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">ADDRESS</Title>
            <Text className="footer__link">123 Main St, Chicago, IL 60601</Text>
            <Text className="footer__link">info@littlelemon.com</Text>
            <Text className="footer__link">(312) 555-1234</Text>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Footer;