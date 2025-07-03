import React from 'react';
import Header from "./components/Header";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <main>
        <Header />
      </main>
    </ChakraProvider>
  );
}

export default App;