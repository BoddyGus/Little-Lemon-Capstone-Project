import React from "react";
import { Layout, Menu, Image } from "antd";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "RESERVATIONS", href: "#reservations" },
  { label: "ORDER ONLINE", href: "#order-online" },
  { label: "LOGIN", href: "#login" },
];

const Header = () => {
  return (
    <Layout.Header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        background: "#ffffff",
        padding: "0 60px",
        margin: "60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div style={{ flex: "none" }}>
        <Image
          src="LittleLemonLogo1.jpg"
          alt="Little Lemon Logo"
          width={203}
          height={68}
          preview={false}
        />
      </div>
      <Menu
        theme="light"
        mode="horizontal"
        style={{
          background: "#ffffff",
          flex: 1,
          justifyContent: "flex-end",
          minWidth: 0,
          borderBottom: "none",
          marginLeft: "20px",
        }}
        selectable={false}
      >
        {navLinks.map((link) => (
          <Menu.Item key={link.label} style={{ fontWeight: "bold" }}>
            <a
              href={link.href}
              style={{
                color: "#000000",
              }}
            >
              {link.label}
            </a>
          </Menu.Item>
        ))}
      </Menu>
    </Layout.Header>
  );
};

export default Header;