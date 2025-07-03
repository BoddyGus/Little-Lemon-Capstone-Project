import React from "react";
import { Box, HStack, Image, Link } from "@chakra-ui/react";

const navLinks = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "RESERVATIONS", href: "#reservations" },
  { label: "ORDER ONLINE", href: "#order-online" },
  { label: "LOGIN", href: "#login" },
];

const Header = () => (
  <Box
    as="header"
    position="fixed"
    top={0}
    left={0}
    right={0}
    bg="#18181b"
    zIndex={1000}
  >
    <Box
      maxW="1280px"
      mx="auto"
      color="white"
      px={16}
      py={4}
      display="flex"
      alignItems="center"
      justifyContent="space-between"
    >
      <Image
        src="LittleLemonLogo1.jpg"
        alt="Little Lemon Logo"
        boxSize="72px"
        objectFit="contain"
      />
      <nav>
        <HStack spacing={8}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              color="white"
              fontWeight="bold"
              _hover={{ color: "yellow.400", textDecoration: "none" }}
            >
              {link.label}
            </Link>
          ))}
        </HStack>
      </nav>
    </Box>
  </Box>
);

export default Header;