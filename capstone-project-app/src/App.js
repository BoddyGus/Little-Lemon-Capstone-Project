import React from 'react';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import 'antd/dist/reset.css';

function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Highlights/>
    </main>
  );
}

export default App;