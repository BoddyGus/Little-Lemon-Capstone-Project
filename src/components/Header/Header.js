import React, { useState } from "react";
import { Layout, Menu, Image, Row, Col, Drawer, Button } from "antd";
import { MenuOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./Header.css";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/#about" },
  { label: "RESERVATIONS", href: "/reservations" },
  { label: "ORDER ONLINE", href: "#order-online" },
  { label: "LOGIN", href: "#login" },
];

const Header = () => {
  const [drawerVisible, setDrawerVisible] = useState(false);

  return (
    <Layout.Header className="header" role="banner">
      <Row className="header__row">
        <Col xs={24} md={4}>
          <Link to="/" aria-label="Little Lemon Home">
            <Image
              src="LittleLemonLogo1.jpg"
              alt="Little Lemon Logo"
              preview={false}
              className="header__logo"
            />
          </Link>
        </Col>
        <Col xs={0} md={16}>
          <Menu
            theme="light"
            mode="horizontal"
            className="header__menu"
            selectable={false}
            role="navigation"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <Menu.Item key={link.label} className="header__menu-item">
                {link.href.startsWith('/') ? (
                  <Link
                    to={link.href}
                    className="header__link"
                    aria-label={`Navigate to ${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="header__link"
                    aria-label={`Navigate to ${link.label.toLowerCase()}`}
                  >
                    {link.label}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu>
        </Col>
        <Col xs={24} md={0} className="header__mobile-menu-btn">
          <Button
            type="text"
            icon={<MenuOutlined className="header__menu-icon" />}
            onClick={() => setDrawerVisible(true)}
            aria-label="On Click"
            aria-expanded={drawerVisible}
            aria-controls="mobile-navigation-drawer"
          />
        </Col>
      </Row>
      <Drawer
        title={
          <Link to="/" aria-label="Little Lemon Home">
            <Image
              src="LittleLemonLogo1.jpg"
              alt="Little Lemon Logo"
              preview={false}
              className="header__logo"
            />
          </Link>
        }
        placement="right"
        onClose={() => setDrawerVisible(false)}
        open={drawerVisible}
        bodyStyle={{ padding: 0 }}
        id="mobile-navigation-drawer"
        aria-label="Mobile navigation menu"
      >
        <Menu
          mode="vertical"
          selectable={false}
          style={{ border: "none" }}
          onClick={() => setDrawerVisible(false)}
          role="navigation"
          aria-label="Mobile navigation"
        >
          {navLinks.map((link) => (
            <Menu.Item key={link.label} className="header__menu-item">
              {link.href.startsWith('/') ? (
                <Link
                  to={link.href}
                  className="header__link"
                  aria-label={`Navigate to ${link.label.toLowerCase()}`}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  href={link.href}
                  className="header__link"
                  aria-label={`Navigate to ${link.label.toLowerCase()}`}
                >
                  {link.label}
                </a>
              )}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </Layout.Header>
  );
};

export default Header;