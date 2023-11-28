import { Box } from "@mui/system";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { motion } from "framer-motion";

const text = "Our Gallery";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
    },
  },
};

const letter = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
  },
};

const Headlinegallery = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: { xl: 4, lg: 3, md: 2, sm: 1, xs: 1 },
            marginLeft: 3,
            marginRight: 3,
            fontWeight: 400,
            fontSize: { xl: 42, lg: 35, md: 30 },
            display: {
              xs: "none",
              sm: "none",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <motion.h3
            className="load-screen-message"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
          </motion.h3>
        </Box>
        <Box
          sx={{
            fontWeight: 300,
            fontSize: { sm: 14, xs: 12 },
            display: {
              marginTop: { sm: 1, xs: 1 },
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <motion.h4
            className="load-screen-message"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
          </motion.h4>
        </Box>
      </Box>
    </>
  );
};

export default Headlinegallery;
