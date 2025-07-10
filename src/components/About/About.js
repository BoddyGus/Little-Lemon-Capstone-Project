import React from "react";
import { Row, Col, Typography, Image } from "antd";
import "./About.css";

const { Title, Paragraph } = Typography;

const About = () => (
  <div className="about">
    <Row align="middle" gutter={40}>
      <Col xs={24} md={12}>
        <Title level={1} className="about__title">
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
        <div className="about__images-wrapper">
          <Image
            src="ds.jpg"
            alt="Little Lemon 1"
            width={220}
            height={220}
            className="about__image about__image--front"
            preview={false}
          />
          <Image
            src="dss.jpg"
            alt="Little Lemon 2"
            width={220}
            height={220}
            className="about__image about__image--back"
            preview={false}
          />
        </div>
      </Col>
    </Row>
  </div>
);

export default About;