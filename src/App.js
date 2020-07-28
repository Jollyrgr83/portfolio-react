import React from 'react';
import './App.css';

import Header from "./components/Header";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div>
      <Header />
      <Contact />
      <Projects />
    </div>
  );
}

export default App;
