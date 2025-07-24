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
  { label: "Reservations", href: "/reservations" },
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
  <footer
    className="footer"
    role="contentinfo"
    aria-label="Site footer with contact information and navigation"
  >
    <Row gutter={48} justify="space-between">
      <Col xs={24} md={8}>
        <img
          src="littlelemon-og-image.jpg"
          alt="Little Lemon restaurant logo"
          className="footer__logo"
        />
        <Paragraph className="footer__description">
          Little Lemon is your neighborhood Mediterranean bistro, serving fresh and vibrant dishes every day.
        </Paragraph>
        <div className="footer__socials" role="list" aria-label="Social media links">
          <FacebookFilled
            className="footer__icon"
            role="link"
            aria-label="Visit our Facebook page"
            tabIndex={0}
          />
          <InstagramFilled
            className="footer__icon"
            role="link"
            aria-label="Visit our Instagram page"
            tabIndex={0}
          />
          <YoutubeFilled
            className="footer__icon"
            role="link"
            aria-label="Visit our YouTube channel"
            tabIndex={0}
          />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Row gutter={32}>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">NAVIGATION</Title>
            <nav aria-label="Footer navigation">
              <ul className="footer__nav-list">
                {navLinks.map(({ label, href }) => (
                  <li key={href} className="footer__nav-item">
                    <a
                      href={href}
                      className="footer__link"
                      aria-label={`Navigate to ${label.toLowerCase()}`}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">HOURS</Title>
            <div role="list" aria-label="Restaurant hours">
              {hours.map((line, idx) => (
                <div className="footer__text" key={idx} role="listitem">{line}</div>
              ))}
            </div>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} className="footer__section-title">ADDRESS</Title>
            <address style={{ fontStyle: "normal" }} aria-label="Restaurant contact information">
              {addressLines.map((line, idx) => (
                <div className="footer__text" key={idx}>{line}</div>
              ))}
            </address>
          </Col>
        </Row>
      </Col>
    </Row>
  </footer>
);

export default Footer;