import React from "react";
import { Row, Col, Typography, Image } from "antd";

const { Title, Paragraph } = Typography;

const About = () => (
  <div style={{ padding: "60px 0", background: "#fff" }}>
    <Row align="middle" gutter={40}>
      <Col xs={24} md={12}>
        <Title level={1} style={{fontFamily: "Markazi Text, serif", fontSize: 64 }}>
          Little Lemon
        </Title>
        <Title level={3} style={{fontFamily: "Markazi Text, serif", fontSize: 40 }}>
          Chicago
        </Title>
        <Paragraph style={{ fontFamily: "Karla, sans-serif", fontSize: 18, marginTop: 24 }}>
          Little Lemon is a family-owned Mediterranean restaurant, focused on traditional recipes with a modern twist. Located in the heart of Chicago, we bring fresh ingredients and vibrant flavors to every dish. Join us for a memorable dining experience!
        </Paragraph>
      </Col>
      <Col xs={24} md={12} style={{ position: "relative", minHeight: 320 }}>
        <div style={{ position: "relative", width: 320, height: 320, margin: "0 auto" }}>
          <Image
            src="ds.jpg"
            alt="Little Lemon 1"
            width={220}
            height={220}
            style={{
              borderRadius: 16,
              position: "absolute",
              left: 0,
              bottom: 0,
              zIndex: 2,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
            preview={false}
          />
          <Image
            src="dss.jpg"
            alt="Little Lemon 2"
            width={220}
            height={220}
            style={{
              borderRadius: 16,
              position: "absolute",
              right: 0,
              top: 0,
              zIndex: 1,
              boxShadow: "0 8px 24px rgba(0,0,0,0.08)"
            }}
            preview={false}
          />
        </div>
      </Col>
    </Row>
  </div>
);

export default About;