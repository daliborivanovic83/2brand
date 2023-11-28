import React from "react";
import ReactDOM from "react-dom/client";

import Home from "../src/components/Home";
import About from "../src/components/About";
import Gallery from "../src/components/Gallery";
import ContactUs from "../src/components/ContactUs";
import OurClients from "../src/components/OurClients";
import { HashRouter } from "react-router-dom";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="Home" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Gallery" element={<Gallery />} />
        <Route path="ContactUs" element={<ContactUs />} />
        <Route path="OurClients" element={<OurClients />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
