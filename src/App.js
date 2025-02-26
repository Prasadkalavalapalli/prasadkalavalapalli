import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Projects from "./Projects";
import Others from "./Others";
import Footer from "./Footer"; // Ensure you import Footer component if it's used

function App() {
  return (
    <div>  {/* Wrap everything with BrowserRouter */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/details" element={<Others />} />
      </Routes>
      <Footer />  {/* Ensure Footer component is included if necessary */}
    </div>
  );
}

export default App;
