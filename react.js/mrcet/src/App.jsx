import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./nav.jsx";
import Home from "./pages/home.jsx";
import Contact from "./pages/contact.jsx";
import About from "./pages/about.jsx";
function App() {
  return (
    <Router>
      <div>
        <h1>Welcome to My React App</h1>
        <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<p>Page not Found</p>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;