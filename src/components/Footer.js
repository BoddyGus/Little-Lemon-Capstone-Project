import React from "react";
import { Row, Col, Typography } from "antd";
import {
  FacebookFilled,
  InstagramFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const { Title, Text, Paragraph } = Typography;

const footerStyle = {
  background: "#495E57",
  color: "#fff",
  padding: "48px 0 32px 0",
};

const iconStyle = {
  fontSize: 24,
  color: "#fff",
  marginRight: 16,
  verticalAlign: "middle",
  cursor: "pointer",
};

const Footer = () => (
  <div style={footerStyle}>
    <Row gutter={48} justify="space-between">
      <Col xs={24} md={8}>
        <img
          src="littlelemon-og-image.jpg"
          alt="Little Lemon Logo"
          style={{ width: 120, marginBottom: 16 }}
        />
        <Paragraph style={{ color: "#fff", fontSize: 14, marginBottom: 16 }}>
          Little Lemon is your neighborhood Mediterranean bistro, serving fresh and vibrant dishes every day.
        </Paragraph>
        <div>
          <FacebookFilled style={iconStyle} />
          <InstagramFilled style={iconStyle} />
          <YoutubeFilled style={iconStyle} />
        </div>
      </Col>
      <Col xs={24} md={16}>
        <Row gutter={32}>
          <Col xs={24} sm={8}>
            <Title level={5} style={{ color: "#fff", marginBottom: 12, fontWeight: "bold" }}>NAVIGATION</Title>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Home</Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>About</Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Menu</Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Reservations</Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Order online</Text>
            <Text style={{ display: "block", color: "#fff" }}>Login</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} style={{ color: "#fff", marginBottom: 12, fontWeight: "bold"}}>HOURS</Title>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Mon - Fri: 8am - 10pm</Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>Sat & Sun: 10am - 4pm</Text>
            <Text style={{ display: "block", color: "#fff" }}>Online ordering: 11am - 9pm</Text>
          </Col>
          <Col xs={24} sm={8}>
            <Title level={5} style={{color: "#fff", marginBottom: 12, fontWeight: "bold" }}>ADDRESS</Title>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>
              123 Main St, Chicago, IL 60601
            </Text>
            <Text style={{ display: "block", color: "#fff", marginBottom: 6 }}>
              info@littlelemon.com
            </Text>
            <Text style={{ display: "block", color: "#fff" }}>
              (312) 555-1234
            </Text>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);

export default Footer;