import React from "react";
import { Row, Col, Card, Typography, Button, Image } from "antd";
import "./Highlights.css";
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
  <div className="highlights">
    <Row justify="space-between" align="middle" className="highlights__header">
      <Col>
        <Title level={2} className="highlights__title">Specials</Title>
      </Col>
      <Col>
        <Button type="primary" className="highlights__menu-btn">
          Online Menu
        </Button>
      </Col>
    </Row>
    <Row gutter={[24, 24]} align="stretch" wrap>
      {dishes.map((dish) => (
        <Col xs={24} sm={12} md={8} key={dish.name} className="highlights__col">
          <Card
            cover={
              <Image
                src={dish.image}
                alt={dish.name}
                className="highlights__image"
                preview={false}
              />
            }
            className="highlights__card"
          >
            <Row justify="space-between" align="middle" className="highlights__card-header">
              <Col>
                <Text strong className="highlights__dish-name">{dish.name}</Text>
              </Col>
              <Col>
                <Text className="highlights__dish-price">{dish.price}</Text>
              </Col>
            </Row>
            <Paragraph className="highlights__description">{dish.description}</Paragraph>
            <Row align="middle" gutter={8} className="highlights__order-row">
              <Col>
                <Text strong className="highlights__order-text">Order a delivery</Text>
              </Col>
              <Col>
                <Image src="CycleLogo.jpg" alt="Bicycle" width={24} preview={false} className="highlights__order-icon" />
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Highlights;