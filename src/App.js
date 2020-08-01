import React from 'react';
import './App.css';

import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="main-background">
      <Header />
      <Nav />
      <Footer />
    </div>
  );
}

export default App;
