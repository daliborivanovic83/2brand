import React from "react";

import ContactUsForm from "../components/ContactUsForm";
import Footer from "./Footer";

const ContactUs = () => {
  return (
    <div sx={{ width: "80%", marginTop: "12rem" }}>
      <ContactUsForm sx={{ marginTop: "2rem" }} />
      <Footer />
    </div>
  );
};

export default ContactUs;
/* <AnimatedLogos />*/
