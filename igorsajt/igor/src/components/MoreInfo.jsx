import { Button, Typography } from "@mui/material";
import React from "react";
import { motion } from "framer-motion";
import { useState } from "react";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import IgorSlikaSajam from "../Assets/igorslikasajam.jpg";
import Container from "@mui/material/Container";
import Image from "mui-image";

const MoreInfo = () => {
  const [clicked, setClicked] = useState(true);

  const textOne = "Our brands and clients include over three thousand designs.";
  const textTwo =
    "The most famous clients and brands working with 2brand and Roman Klis are:";
  const textThree =
    "Nestle, Maggi, Nescafe, Bayer, Aspirin, Visa, Schwarzkopf, Wella Cosmetics, Audi,";
  const textFour =
    "Mercedes Benz, MigrosSwiss Delice, Midor, Mibelle Cosmetics, Naomi Campbell,";
  const textFive =
    "Bruno Banani, Marco Polo, Puma, Philip Morris, Marlboro, ATP World Tour, Lidl,";
  const textSix =
    "Mibelle, Dunhill, Kit Kat, After Eight, Smarties, Bambi, Swiss Lion, Ritter Sport,";
  const textSeven =
    "Jaffa, Vino Zupa, City Express, ProCredit Bank, Farrina, EastSign Hong Kong,";
  const textEight =
    "Zwilling Beauty Group, Bohor, Kras, Guess, Unilever, Schogetten,";
  const textNine =
    "Eastsign China, Olympic Games Beijing 2008, QVS, Tweezerman.";

  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.1,
        staggerChildren: 0.1,
      },
    },
  };

  const letter = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        backgroundColor: "white",
        marginRight: 1,
        marginLeft: 1,
        marginTop: 5,

        flexDirection: "column",
      }}
    >
      <Box
        sx={{
          marginTop: {
            xl: "13rem",
            lg: "1rem",
            md: "14rem",
            sm: "10rem",
            xs: "4rem",
          },
          marginBottom: {
            xl: "1rem",
            lg: "10rem",
            md: "1rem",
            sm: "15rem",
            xs: "14rem",
          },
          maxWidth: "100%",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white",
          marginRight: 1,
          marginLeft: 1,
          border: "none",
          flexDirection: "column",
          fontSize: { xl: 10, lg: 8, md: 6, sm: 6, xs: 4 },
          display: {
            xs: "block",
            sm: "block",
            md: "block",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textOne.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textTwo.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textThree.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textFour.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textFive.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textSix.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textSeven.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textEight.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>

        <motion.h1
          className="load-screen-message"
          variants={sentence}
          initial="hidden"
          animate="visible"
        >
          {textNine.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            );
          })}
          <br />
        </motion.h1>
      </Box>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2.5 }}
      >
        <Box
          sx={{
            maxWidth: "100%",
            maxHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            marginLeft: { xl: 10, lg: 8, md: 6, sm: 5, xs: 5 },
            alignContent: "center",
            flexDirection: "column",
            backgroundColor: "white",
          }}
        >
          <Container
            sx={{
              maxWidth: "100%",
              maxHeight: "100vh",
              display: "flex",
              justifyContent: "center",
              marginTop: { xl: 50, lg: 40, md: 30, sm: 20, xs: 10 },
              alignContent: "center",
              flexDirection: "column",
              backgroundColor: "white",
            }}
          >
            <Image
              src={IgorSlikaSajam}
              height="100%"
              width="100%"
              fit="scale-down"
            />
          </Container>
          <Typography
            variant="h4"
            sx={{
              color: "black",
              fontFamily: "roboto",
              fontSize: { xl: 35, lg: 33, md: 30, sm: 22, xs: 20 },
            }}
          >
            Igor Acimovic.<br></br> Founder of 2brand design in 2007.<br></br>
            Stuttgart. Germany.
          </Typography>

          <Typography
            variant="h7"
            sx={{
              color: "black",
              fontFamily: "roboto",
              fontSize: { xl: 40, lg: 29, md: 25, sm: 15, xs: 12 },
              marginTop: { xl: 7, lg: 6, md: 5, sm: 2, xs: 1 },
            }}
          >
            Started working as a designer in 1995.<br></br>
            Worked in German agencies for the last 20 years.<br></br> Greatest
            success: Working as Designer & Art Director<br></br> at the German
            agency Klis Design. Currently based in Asia.
          </Typography>
          <Button
            disableRipple
            variant="outlined"
            type="submit"
            id="button"
            value="Send Email"
            onClick={() => setClicked(!clicked)}
            component={Link}
            to="/OurClients"
            sx={{
              borderColor: "black !important",
              color: clicked ? "black" : "white",
              backgroundColor: clicked ? "white" : "black",
              border: "1px solid black",
              width: { xl: 120, lg: 110, md: 100, sm: 85, xs: 75 },
              height: { xl: 40, lg: 35, md: 33, sm: 25, xs: 21 },
              fontSize: { xl: 25, lg: 12, md: 10, sm: 8, xs: 25 },
              fontFamily: "roboto",
              fontWeight: 500,
              "&:hover": {
                backgroundColor: "#fff",
                color: "#000",
              },
              marginTop: {
                xl: "3rem",
                lg: "3rem",
                md: "2.5rem",
                sm: "1.5rem",
                xs: "1.5rem",
              },
            }}
          >
            <Typography
              sx={{
                fontSize: { xl: 18, lg: 16, md: 14, sm: 10, xs: 8 },
              }}
            >
              Clients
            </Typography>
          </Button>
        </Box>
      </motion.div>
    </Box>
  );
};

export default MoreInfo;
