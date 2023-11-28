import Home from "../src/components/Home";
import About from "./components/About";
import Gallery from "../src/components/Gallery";
import Footer from "./components/Footer.jsx";

import ContactUs from "../src/components/ContactUs";

import React from "react";

function App() {
  return (
    <div>
      <Home />
      <About />
      <Gallery />
      <ContactUs />
      <Footer />
    </div>
  );
}
export default App;
