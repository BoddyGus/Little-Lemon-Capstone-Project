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
        background: "#18181b",
        padding: "0 60px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Image
        src="LittleLemonLogo1.jpg"
        alt="Little Lemon Logo"
        width={72}
        preview={false}
        style={{ marginRight: "auto" }}
      />
      <Menu
        theme="dark"
        mode="horizontal"
        style={{ background: "transparent", minWidth: 0 }}
        selectable={false}
      >
        {navLinks.map((link) => (
          <Menu.Item key={link.label}>
            <a
              href={link.href}
              style={{
                color: "white",
                fontWeight: "bold",
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