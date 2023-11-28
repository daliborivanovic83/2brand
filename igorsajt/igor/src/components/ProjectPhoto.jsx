import { Box } from "@mui/material";
import React from "react";
import projectpic from "../Assets/projectslika.png";
import CardMedia from "@mui/material/CardMedia";
import { delay, motion } from "framer-motion";

const ProjectPhoto = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    >
      <Box
        sx={{
          width: { xl: 700 },
          height: { xl: 210 },
          margin: "0 auto",
          display: {
            xl: "block",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <CardMedia
          src={projectpic}
          alt="project"
          component={"img"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>

      <Box
        sx={{
          width: { lg: 520 },
          height: { lg: 180 },
          margin: " 0 auto",
          display: {
            xl: "none",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <CardMedia
          src={projectpic}
          alt="project"
          component={"img"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: "3rem",
          width: { md: 400 },
          height: { md: 150 },
          margin: "0 auto",
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <CardMedia
          src={projectpic}
          alt="project"
          component={"img"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: "3rem",
          width: { sm: 300 },
          height: { sm: 110 },
          margin: "0 auto",
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "none",
          },
        }}
      >
        <CardMedia
          src={projectpic}
          alt="project"
          component={"img"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>

      <Box
        sx={{
          marginTop: "3rem",
          width: { xs: 300 },
          height: { xs: 100 },
          margin: "0 auto",
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "block",
          },
        }}
      >
        <CardMedia
          src={projectpic}
          alt="project"
          component={"img"}
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
          }}
        />
      </Box>
    </motion.div>
  );
};

export default ProjectPhoto;
