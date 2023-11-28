import { CardMedia } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import CertificateIgor from "../Assets/igorsertifikat.jpg";
import IgorSlika from "../Assets/igorfotografija.jpg";
import { motion } from "framer-motion";

const MoreInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          flexDirection: "column",
          margin: "auto",
          border: "none",
          marginTop: { xl: 70, lg: 65, md: 30, sm: 20, xs: 15 },
          marginBottom: { xl: 30, lg: 30, md: 25, sm: 20, xs: 15 },
        }}
      >
        <CardMedia
          component={"img"}
          src={CertificateIgor}
          alt="Background image"
          sx={{ maxWidth: "50%", maxHeight: "100vh" }}
        ></CardMedia>

        <CardMedia
          component={"img"}
          src={IgorSlika}
          alt="Igor image"
          sx={{ maxWidth: "50%", maxHeight: "100vh" }}
        ></CardMedia>
      </Box>
    </motion.div>
  );
};

export default MoreInfo;
