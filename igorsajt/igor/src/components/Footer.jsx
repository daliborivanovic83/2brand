import { Box } from "@mui/material";
import React from "react";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import IconButton from "@mui/material/IconButton";
import PhoneIcon from "@mui/icons-material/Phone";

import Typography from "@mui/material/Typography";
import QrCode from "../Assets/qrcode.jpg";

const Footer = () => (
  <Box
    className="footer"
    sx={{
      padding: "0.15rem",
      backgroundColor: "white",
      position: "fixed",
      bottom: "0",
      left: "0",
      width: "100%",
      height: "auto",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
    }}
  >
    <Box
      sx={{
        display: "flex",
        alignContent: "flex-end",

        flexDirection: "row",
      }}
    >
      <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
      >
        <PhoneIcon
          sx={{
            fontSize: { xl: 25, lg: 22, md: 16, sm: 12, xs: 10 },
            color: "black",
            marginRight: "2px",
          }}
        />{" "}
        <br />
        <Typography
          sx={{
            fontSize: { xl: 21, lg: 15, md: 13, sm: 11, xs: 9 },
            color: "black",
          }}
        >
          +8618688644842
        </Typography>
      </IconButton>
      <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            height: {
              xl: "2.8rem",
              lg: "2.4rem",
              md: "2rem",
              sm: "1.8rem",
              xs: "1rem",
            },
            width: {
              xl: "4rem",
              lg: "3.5rem",
              md: "3rem",
              sm: "2rem",
              xs: "1rem",
            },
            marginLeft: {
              xl: "5rem",
              lg: "4rem",
              md: "3.5rem",
              sm: "3",
              xs: "1",
            },
          }}
        >
          <img
            src={QrCode}
            alt="qrcodeimg"
            style={{
              maxWidth: "80%",
              maxHeight: "800%",
              margin: "auto",
              display: "block",
            }}
          />
        </Box>
      </IconButton>
    </Box>

    <Box
      sx={{
        display: "flex",

        alignContent: "center",
        flexDirection: "row",
      }}
    >
      <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
        aria-label="facebook.com"
        onClick={() => window.open("https://www.facebook.com/2branddesign/")}
      >
        <FacebookIcon
          sx={{
            fontSize: { xl: 25, lg: 22, md: 16, sm: 14, xs: 12 },
            color: "black",
          }}
        />
      </IconButton>
      <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
        aria-label="Instagram.com"
        onClick={() => window.open("https://www.instagram.com/2branddesign/")}
      >
        <InstagramIcon
          sx={{
            fontSize: { xl: 25, lg: 22, md: 16, sm: 14, xs: 12 },
            color: "black",
          }}
        />
      </IconButton>
      <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
        aria-label="linkedin.com"
        onClick={() =>
          window.open(
            "https://il.linkedin.com/company/2brand?trk=public_profile_experience-item_profile-section-card_image-click"
          )
        }
      >
        <LinkedInIcon
          sx={{
            fontSize: { xl: 25, lg: 22, md: 16, sm: 14, xs: 12 },
            color: "black",
          }}
        />
      </IconButton>
    </Box>
  </Box>
);
export default Footer;

/*
 <IconButton
        disableFocusRipple
        disableRipple
        style={{
          backgroundColor: "transparent",
        }}
        aria-label="linkedin.com"
        onClick={() => window.open("https://www.linkedin.com")}
      >
        <LinkedInIcon
          sx={{
            fontSize: { xl: 40, lg: 25, md: 20, sm: 18, xs: 12 },
            color: "black",
          }}
        />
      </IconButton>
*/
