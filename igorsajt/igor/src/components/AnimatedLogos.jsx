import React from "react";
import { motion } from "framer-motion";

import NesteaLogo from "../AssetsLogo/nestea2.JPG";
import BayerLogo from "../AssetsLogo/bayer2.PNG";
import AudiLogo from "../AssetsLogo/a2.PNG";
import MaggiLogo from "../AssetsLogo/magi2.PNG";
import GilleteLogo from "../AssetsLogo/gillete2.PNG";
import HeadShouldersLogo from "../AssetsLogo/hs2.PNG";
import MigrosLogo from "../AssetsLogo/migros2.PNG";
import NestleLogoAll from "../AssetsLogo/Nestle-logo_web.png";
import ScwarkopfLogo from "../AssetsLogo/schwarzkopf-corporate.png";
import Mercedes from "../AssetsLogo/Mercedes-Benz-logo-2011-1920x1080.png";
import AfterEightLogo from "../AssetsLogo/Nestle_AfterEight_logo-295x295.png";
import ProctorLogo from "../AssetsLogo/pg2.PNG";
import WellaLogo from "../AssetsLogo/Wella_logo.svg.png";
import VisaLogo from "../AssetsLogo/visa_PNG34.png";
import AspirinLogo from "../AssetsLogo/aspirin-vector-logo.jpg";
import Box from "@mui/material/Box";

import Zwilling from "../Assets/zwilling.jpg";
import Watsons from "../Assets/watsons.jpg";
import Tweezerman from "../Assets/tweezerman.jpg";
import EastSignLogo from "../Assets/eastsign.jpg";

const containerStyles = {
  borderRadius: "1rem",

  height: "auto",
  width: "100%",
};

export const AnimatedLogos = () => (
  <Box
    style={{
      display: "flex",
      flexDirection: "column",
      marginBottom: "2rem",
      marginTop: "2rem",
    }}
  >
    <Box style={{ display: "flex" }}>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 1,
        }}
      >
        <img src={NesteaLogo} alt="Nestea" width={"80%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 1.5,
        }}
      >
        <img src={AfterEightLogo} alt="Nestea" width={"80%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 2,
        }}
        src={{}}
      >
        <img src={BayerLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 2.5,
        }}
      >
        <img src={AudiLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 3,
        }}
      >
        <img src={MaggiLogo} alt="Nestea" width={"60%"}></img>
      </motion.div>
    </Box>

    <Box style={{ display: "flex" }}>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 3.5,
        }}
      >
        <img src={GilleteLogo} alt="Nestea" width={"60%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 4,
        }}
      >
        <img src={HeadShouldersLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 4.5,
        }}
      >
        <img src={MigrosLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 5,
        }}
      >
        <img src={NestleLogoAll} alt="Nestea" width={"70%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 5.5,
        }}
      >
        <img src={ScwarkopfLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>
    </Box>

    <Box style={{ display: "flex" }}>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 6,
        }}
      >
        <img src={Mercedes} alt="Nestea" width={"80%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 6.5,
        }}
      >
        <img src={ProctorLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 7,
        }}
      >
        <img src={WellaLogo} alt="Nestea" width={"70%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 7.5,
        }}
      >
        <img src={VisaLogo} alt="Nestea" width={"90%"}></img>
      </motion.div>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 8,
        }}
      >
        <img src={AspirinLogo} alt="Nestea" width={"90%"}></img>
      </motion.div>
    </Box>

    <Box style={{ display: "flex" }}>
      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 8.5,
        }}
      >
        <img src={Zwilling} alt="Nestea" width={"90%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 9,
        }}
      >
        <img src={Watsons} alt="Nestea" width={"90%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 9.5,
        }}
      >
        <img src={Tweezerman} alt="Nestea" width={"90%"}></img>
      </motion.div>

      <motion.div
        style={containerStyles}
        className="container"
        initial={{ scale: 0 }}
        animate={{ rotate: 360, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 40,
          damping: 10,
          delay: 10,
        }}
      >
        <img src={EastSignLogo} alt="Nestea" width={"60%"} height={"80%"}></img>
      </motion.div>
    </Box>
  </Box>
);

export default AnimatedLogos;
