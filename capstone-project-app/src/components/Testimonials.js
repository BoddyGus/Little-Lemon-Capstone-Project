import React from "react";
import { Row, Col, Card, Typography, Avatar, Rate } from "antd";

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
  <div style={{ background: "#495E57", padding: "60px 0" }}>
    <Title level={2} style={{ textAlign: "center", marginBottom: 40, color: "#FFFEFE"}}>
      Testimonials
    </Title>
    <Row gutter={24} justify="center">
      {testimonials.map((t, idx) => (
        <Col xs={24} sm={12} md={6} key={t.name}>
          <Card
            style={{ borderRadius: 12, minHeight: 260, marginBottom: 24 }}
          >
            <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
              <Avatar src={t.avatar} size={48} style={{ marginRight: 12 }} />
              <Text strong style={{ fontSize: 16 }}>{t.name}</Text>
            </div>
            <Rate disabled defaultValue={t.rating} style={{ fontSize: 18, marginBottom: 12 }} />
            <Paragraph style={{ marginTop: 12 }}>{t.review}</Paragraph>
          </Card>
        </Col>
      ))}
    </Row>
  </div>
);

export default Testimonials;