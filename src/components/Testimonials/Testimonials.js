import React from "react";
import { Row, Col, Card, Typography, Avatar, Rate } from "antd";
import "./Testimonials.css";

const { Title, Text, Paragraph } = Typography;

const testimonials = [
  {
    avatar: "https://randomuser.me/api/portraits/women/32.jpg",
    name: "Alice Smith",
    rating: 5,
    review: "Amazing food and great service! Highly recommend Little Lemon.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    name: "John Doe",
    rating: 4,
    review: "Delicious Mediterranean dishes. The ambiance was perfect.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    name: "Ralitsa Lefterova",
    rating: 5,
    review: "Best restaurant experience I've had in a long time.",
  },
  {
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    name: "Michael Brown",
    rating: 4,
    review: "Loved the desserts! Will definitely come back.",
  },
];

const Testimonials = () => (
  <section
    className="testimonials"
    aria-labelledby="testimonials-title"
    aria-label="Customer testimonials and reviews"
  >
    <Title level={2} className="testimonials__title" id="testimonials-title">
      Testimonials
    </Title>
    <Row gutter={24} justify="center" role="list" aria-label="Customer reviews">
      {testimonials.map((t) => (
        <Col xs={24} sm={12} md={6} key={t.name}>
          <Card
            className="testimonials__card"
            role="listitem"
            aria-label={`Review by ${t.name}, ${t.rating} out of 5 stars`}
          >
            <div className="testimonials__header">
              <Avatar
                src={t.avatar}
                size={48}
                className="testimonials__avatar"
                alt={`${t.name}'s profile picture`}
              />
              <Text strong className="testimonials__name">{t.name}</Text>
            </div>
            <Rate
              disabled
              defaultValue={t.rating}
              className="testimonials__rate"
              aria-label={`Rating: ${t.rating} out of 5 stars`}
            />
            <Paragraph className="testimonials__review">{t.review}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </section>
);

export default Testimonials;