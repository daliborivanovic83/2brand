import React from "react";
import AnimatedLogos from "../components/AnimatedLogos";
import Box from "@mui/material/Box";
const OurClients = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AnimatedLogos />
    </Box>
  );
};

export default OurClients;
