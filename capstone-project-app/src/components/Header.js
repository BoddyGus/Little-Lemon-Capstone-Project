import React from "react";
import { Layout, Menu, Image, Row, Col } from "antd";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "RESERVATIONS", href: "#reservations" },
  { label: "ORDER ONLINE", href: "#order-online" },
  { label: "LOGIN", href: "#login" },
];

const Header = () => (
  <Layout.Header
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: "#ffffff",
      padding: "0 60px",
    }}
  >
    <Row gutter={20} columns={12}>
      <Col span={4} offset={4}>
        <Image
          src="LittleLemonLogo1.jpg"
          alt="Little Lemon Logo"
          preview={false}
        />
      </Col>
      <Col span={12} offset={1}>
        <Menu
          theme="light"
          mode="horizontal"
          style={{
            background: "#ffffff",
            borderBottom: "none",
          }}
          selectable={false}
        >
          {navLinks.map((link) => (
            <Menu.Item key={link.label} style={{ fontWeight: "bold" }}>
              <a
                href={link.href}
                style={{
                  color: "#000000",
                  fontWeight: "bold",
                  fontFamily: "Karla, sans-serif",
                  fontSize: 20,
                }}
              >
                {link.label}
              </a>
            </Menu.Item>
          ))}
        </Menu>
      </Col>
    </Row>
  </Layout.Header>
);

export default Header;