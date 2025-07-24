import React from "react";
import { Row, Col, Card, Typography, Image } from "antd";
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
  <section
    className="highlights"
    aria-labelledby="highlights-title"
    aria-label="Restaurant specials and featured dishes"
  >
    <Row justify="space-between" align="middle" className="highlights__header">
      <Col>
        <Title level={2} className="highlights__title" id="highlights-title">
          Specials
        </Title>
      </Col>
      <Col>
        <a
          href="#menu"
          className="highlights__menu-link"
          aria-label="View our online menu"
        >
          Online Menu
        </a>
      </Col>
    </Row>

    <Row gutter={[24, 24]} align="stretch" wrap role="list" aria-label="Featured dishes">
      {dishes.map((dish) => (
        <Col xs={24} sm={12} md={8} key={dish.name} className="highlights__col">
          <Card
            cover={
              <Image
                src={dish.image}
                alt={`${dish.name} - delicious Mediterranean dish`}
                className="highlights__image"
                preview={false}
              />
            }
            className="highlights__card"
            role="listitem"
            aria-label={`${dish.name} for ${dish.price}`}
          >
            <Row justify="space-between" align="middle" className="highlights__card-header">
              <Col>
                <Text strong className="highlights__dish-name">{dish.name}</Text>
              </Col>
              <Col>
                <Text className="highlights__dish-price" aria-label={`Price: ${dish.price}`}>
                  {dish.price}
                </Text>
              </Col>
            </Row>
            <Paragraph className="highlights__description">{dish.description}</Paragraph>
            <Row align="middle" gutter={8} className="highlights__order-row">
              <Col>
                <a
                  href="#order-online"
                  className="highlights__order-link"
                  aria-label={`Order ${dish.name} for delivery`}
                >
                  <Text strong className="highlights__order-text">Order a delivery</Text>
                  <Image
                    src="CycleLogo.jpg"
                    alt="Delivery bicycle icon"
                    width={24}
                    preview={false}
                    className="highlights__order-icon"
                    role="img"
                    style={{ marginLeft: '8px' }}
                  />
                </a>
              </Col>
            </Row>
          </Card>
        </Col>
      ))}
    </Row>

    <div className="highlights__menu-bottom">
      <a
        href="#menu"
        className="highlights__menu-link"
        aria-label="View our online menu"
      >
        Online Menu
      </a>
    </div>
  </section>
);

export default Highlights;