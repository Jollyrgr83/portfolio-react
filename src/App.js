import React from 'react';
import './App.css';

import Header from "./components/Header";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
