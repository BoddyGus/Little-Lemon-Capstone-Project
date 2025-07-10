import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";
import "./Footer.css";

const { Title, Paragraph } = Typography;

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Menu", href: "#menu" },
  { label: "Reservations", href: "#reservations" },
  { label: "Order Online", href: "#order-online" },
  { label: "Login", href: "#login" },
];

const hours = [
  "Mon - Fri: 8am - 10pm",
  "Sat & Sun: 10am - 4pm",
  "Online ordering: 11am - 9pm",
];

const addressLines = [
  "123 Main St, Chicago, IL 60601",
  "info@littlelemon.com",
  "(312) 555-1234",
];

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
            <ul className="footer__nav-list">
              {navLinks.map(({ label, href }) => (
                <li key={href} className="footer__nav-item">
                  <a href={href} className="footer__link">{label}</a>
                </li>
              ))}
            </ul>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">HOURS</Title>
            {hours.map((line, idx) => (
              <div className="footer__text" key={idx}>{line}</div>
            ))}
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">ADDRESS</Title>
            <address style={{ fontStyle: "normal" }}>
              {addressLines.map((line, idx) => (
                <div className="footer__text" key={idx}>{line}</div>
              ))}
            </address>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Footer;