import React from "react";
import { Row, Col, Typography, Image } from "antd";
import "./About.css";

const { Title, Paragraph } = Typography;

const About = () => (
  <section
    className="about"
    aria-labelledby="about-title"
    aria-label="About Little Lemon restaurant"
  >
    <Row align="middle" gutter={40}>
      <Col xs={24} md={12}>
        <Title level={1} className="about__title" id="about-title">
          Little Lemon
        </Title>
        <Title level={3} className="about__subtitle">
          Chicago
        </Title>
        <Paragraph className="about__description">
          Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist. Located in the heart of Chicago, we bring fresh ingredients and vibrant flavors to every dish. Join us for a memorable dining experience!
        </Paragraph>
      </Col>
      <Col xs={24} md={12} className="about__images-col">
        <div
          className="about__images-wrapper"
          role="img"
          aria-label="Restaurant atmosphere photos"
        >
          <Image
            src="ds.jpg"
            alt="Little Lemon restaurant interior showing dining atmosphere"
            width={220}
            height={220}
            className="about__image about__image--front"
            preview={false}
          />
          <Image
            src="dss.jpg"
            alt="Little Lemon restaurant kitchen and food preparation"
            width={220}
            height={220}
            className="about__image about__image--back"
            preview={false}
          />
        </div>
      </Col>
    </Row>
  </section>
);

export default About;