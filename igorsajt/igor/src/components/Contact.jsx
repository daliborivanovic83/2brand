import { Box, Stack } from "@mui/system";
import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";

const Contact = () => {
  return (
    <Box
      sx={{
        display: "flex",
        margin: 2,
        position: "fixed",
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={0}
        sx={{
          borderRadius: 3,
          height: 220,
          width: 70,
          border: "1px solid black",
          backgroundColor: "black",
          opacity: 0.85,
        }}
      >
        <InstagramIcon sx={{ color: "white", width: 40, height: 80 }} />
        <EmailIcon sx={{ color: "white", width: 40, height: 80 }} />
        <FacebookIcon sx={{ color: "white", width: 40, height: 80 }} />
      </Stack>
    </Box>
  );
};
export default Contact;
