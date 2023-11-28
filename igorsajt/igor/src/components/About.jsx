import React from "react";
import { Typography } from "@mui/material";

import { Box } from "@mui/system";

import MoreInfo from "../components/MoreInfo";
import Certificates from "../components/Certificates";

const About = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginBottom: { xl: 1, lg: 1, md: 20, sm: 3, xs: 8 },
          marginTop: { xl: 5, lg: 3, md: 20, sm: 3, xs: 12 },
        }}
      >
        <Typography
          variant="h3"
          sx={{
            fontSize: { xl: 40, lg: 30, md: 20, sm: 15, xs: 8 },
            margin: { xl: 2, lg: 2, md: 1.5, sm: 1, xs: 1 },
            fontFamily: "roboto",
            fontWeight: 500,
          }}
        >
          Our philosophy is SMART and QUICK design solution.
        </Typography>
        <Typography
          variant="h3"
          sx={{
            fontSize: { xl: 40, lg: 30, md: 20, sm: 15, xs: 10 },
            margin: { xl: 2, lg: 2, md: 1.5, sm: 1, xs: 1 },
            fontFamily: "roboto",
            fontWeight: 500,
          }}
        >
          Our tool is experience.
        </Typography>
        <Typography
          variant="h4"
          sx={{
            fontSize: { xl: 40, lg: 30, md: 20, sm: 15, xs: 10 },
            margin: { xl: 2, lg: 2, md: 1.5, sm: 1, xs: 1 },
            fontFamily: "roboto",
            fontWeight: 300,
          }}
        >
          Graphic Design. Brand Strategy. Corporate Design.<br></br>
          Packaging Design. Photography. E-commerce. Web Design
        </Typography>
      </Box>

      <MoreInfo sx={{ marginBottom: "10rem", marginTop: "10rem" }} />

      <Certificates />
    </Box>
  );
};
export default About;
