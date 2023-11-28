import { Box } from "@mui/system";
import React from "react";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { delay, motion } from "framer-motion";

const text =
  "Design is a lifestyle. Europe & Asia based design company, founded in 2008 by specialists in Packaging and Graphic Design.";

const textTwo =
  "We believe that creativity has no boundaries and that good ideas deserve a good company.";

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

const Headline = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            marginTop: 1,
            marginLeft: 3,
            marginRight: 3,
            marginBottom: { xl: 1, lg: 1, md: 1, sm: 6, xs: 6 },
            fontWeight: 200,
            fontSize: { xl: 15, lg: 13, md: 12, sm: 10, xs: 8 },
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
            transition={{ delay: 5, duration: 5 }}
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            {textTwo.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
        </Box>
        <Box
          sx={{
            marginTop: 0,
            marginLeft: 2,
            marginRight: 2,
            fontWeight: 200,
            fontSize: { sm: 12, xs: 8 },
            marginBottom: { sm: 0, xs: 1 },
            display: {
              xs: "block",
              sm: "block",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        >
          <motion.h3
            className="load-screen-message"
            variants={sentence}
            initial="hidden"
            animate="visible"
            transition={{ delay: 5, duration: 5 }}
          >
            {text.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
            <br />
            {textTwo.split("").map((char, index) => {
              return (
                <motion.span key={char + "-" + index} variants={letter}>
                  {char}
                </motion.span>
              );
            })}
          </motion.h3>
        </Box>
      </Box>
    </motion.div>
  );
};

export default Headline;
