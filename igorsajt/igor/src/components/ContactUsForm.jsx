import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Box } from "@mui/material";
import { useState } from "react";

import { TextField } from "@mui/material";
import Button from "@mui/material/Button";

const ContactUsForm = () => {
  const form = useRef();

  const [clicked, setClicked] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_2mztl5e",
        "template_okyw20o",
        form.current,
        "Vc2BZ7DmLoXj65Cf9"
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "Message Sent Successfully",
            color: "black",
            background: "white",
            timer: 3000,
            allowOutsideClick: true,
            allowEscapeKey: true,
            confirmButtonColor: "black",
            confirmButtonText: "Ok",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops, check your input",
            text: error.text,
            color: "black",
            background: "white",
            timer: 3000,
            allowOutsideClick: true,
            allowEscapeKey: true,
            confirmButtonColor: "black",
            confirmButtonText: "Ok",
          });
        }
      );

    e.target.reset();
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center",
        width: "100vw",
        height: "50vh",

        direction: "row",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "40vw",
          height: "40vh",
          marginTop: {
            xl: "2rem",
            lg: "2rem",
            md: "1.5rem",
            sm: "1.5rem",
            xs: "1.5rem",
          },

          marginBottom: {
            xl: "2rem",
            lg: "2rem",
            md: "1.5rem",
            sm: "1.5rem",
            xs: "1.5rem",
          },
        }}
      >
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            margin: 3,
            padding: 4,
          }}
          ref={form}
          onSubmit={sendEmail}
        >
          <TextField
            sx={{
              marginBottom: "2rem",
              color: "black",
              width: { xl: 300, lg: 280, md: 240, sm: 200, xs: 180 },
              height: { xl: 50, lg: 35, md: 25, sm: 20, xs: 17 },
            }}
            required
            id="outlined-required"
            defaultValue="Username"
            name="from_name"
            variant="outlined"
          />

          <TextField
            sx={{
              marginBottom: "2rem",
              marginTop: "1rem",
              color: "black",
              width: { xl: 300, lg: 280, md: 240, sm: 200, xs: 180 },
            }}
            required
            id="outlined-required"
            defaultValue="Email"
            name="from_email"
          />

          <TextField
            sx={{
              marginBottom: "2rem",
              color: "black",
              width: { xl: 400, lg: 330, md: 280, sm: 240, xs: 220 },
            }}
            defaultValue="Your message"
            name="from_message"
            id="outlined-multiline-static"
            multiline
            rows={4}
          />

          <Button
            variant="outlined"
            type="submit"
            id="button"
            value="Send Email"
            onClick={() => setClicked(!clicked)}
            sx={{
              borderColor: "black !important",
              color: clicked ? "black" : "white",
              backgroundColor: clicked ? "white" : "black",
              width: { xl: 100, lg: 80, md: 60, sm: 50, xs: 40 },
              height: { xl: 35, lg: 30, md: 28, sm: 26, xs: 24 },
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
              fontSize: { xl: 17, lg: 16, md: 14, sm: 12, xs: 11 },
              fontFamily: "roboto",
              fontWeight: 500,
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default ContactUsForm;
