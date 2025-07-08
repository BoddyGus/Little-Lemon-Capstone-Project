import React from "react";
import { Row, Col, Card, Typography, Button, Image } from "antd";

const { Title, Text, Paragraph } = Typography;

const dishes = [
  {
    image: "GreekSalad.jpg",
    name: "Greek Salad",
    price: "12,99 €",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "Bruchecta.jpg",
    name: "Bruchecta",
    price: "13,99 €",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    image: "lemon dessert.jpg",
    name: "Lemon Dessert",
    price: "15,99 €",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

const Highlights = () => (
  <div style={{ padding: "40px 0" }}>
    <Row justify="space-between" align="middle" style={{ marginBottom: 32 }}>
      <Col>
        <Title level={2} style={{ margin: 0 }}>Specials</Title>
      </Col>
      <Col>
        <Button type="primary" style={{ background: "#F4CE14", color: "#000", border: "none" }}>
          Online Menu
        </Button>
      </Col>
    </Row>
    <Row gutter={24}>
      {dishes.map((dish, idx) => (
        <Col xs={24} md={8} key={dish.name}>
          <Card
            cover={<Image src={dish.image} alt={dish.name} height={200} style={{ objectFit: "cover" }} preview={false} />}
            style={{ borderRadius: 12, minHeight: 420 }}
            bodyStyle={{ padding: 24 }}
          >
            <Row justify="space-between" align="middle">
              <Col>
                <Text strong style={{ fontSize: 20 }}>{dish.name}</Text>
              </Col>
              <Col>
                <Text style={{ color: "#495E57", fontWeight: 600, fontSize: 18 }}>{dish.price}</Text>
              </Col>
            </Row>
            <Paragraph style={{ marginTop: 16, marginBottom: 24 }}>{dish.description}</Paragraph>
            <Row align="middle" gutter={8}>
              <Col>
                <Text strong>Order a delivery</Text>
              </Col>
              <Col>
                <Image src="CycleLogo.jpg" alt="Bicycle" width={24} preview={false} />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Highlights;