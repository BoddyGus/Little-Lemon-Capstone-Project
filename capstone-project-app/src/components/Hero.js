import React from "react";
import { Row, Col, Typography, Image, Button } from "antd";

const { Title, Paragraph } = Typography;

const Hero = () => (
  <div style={{ background: "#495E57", padding: "60px 0" }}>
    <Row gutter={20} columns={12}>
      <Col xs={16} md={8} offset={4}>
        <Title level={1} style={{ color: "#F4CE14", fontFamily: "Markazi Text, serif", fontSize: 64, marginTop: 20,  marginBottom: 20}}>Little Lemon</Title>
        <Title level={3} style={{ color: "#FFFEFE", fontFamily: "Markazi Text, serif", fontSize: 40}}>Chicago</Title>
        <Paragraph style={{color: "#000", fontFamily: "Karla, sans-serif", fontSize: 16}}>
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Paragraph>
        <Button type="primary" size="large" href="#reservations" style={{ background: "#F4CE14", color: "#000", borderRadius: 8, marginTop: 70}}>
          Reserve a Table
        </Button>
      </Col>
      <Col xs={8} md={4} offset={1} style={{ textAlign: "right" }}>
        <Image
          src="Photo1.jpg"
          width={400}
          height={400}
          preview={false}
          style={{ borderRadius: 8, marginTop: 20}}
        />
      </Col>
    </Row>
  </div>
);

export default Hero;