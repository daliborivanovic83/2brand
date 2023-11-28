import React from "react";

import { AppBar, Box, Toolbar, Menu, MenuItem, Button } from "@mui/material";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../Assets/igor-logo.jpg";
import { Stack } from "@mui/system";

const Styledtoolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar sx={{ backgroundColor: "white" }} position="sticky">
      <Styledtoolbar>
        <Box
          component="img"
          sx={{
            height: { xl: 40, lg: 35, md: 32, sm: 25, xs: 22 },
            width: { xl: 150, lg: 130, md: 110, sm: 90, xs: 80 },
          }}
          alt="Logo"
          src={Logo}
        />

        <Stack
          direction="row"
          spacing={5}
          sx={{
            display: {
              xs: "none",
              sm: "block",
              md: "block",
              lg: "block",
              xl: "block",
            },
          }}
        >
          <Button
            component={Link}
            to="/Home"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontSize: { xl: 15, lg: 12, md: 10, sm: 9, xs: 8 },
            }}
            variant="text"
            disableRipple
          >
            Home
          </Button>

          <Button
            component={Link}
            to="/About"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontSize: { xl: 15, lg: 12, md: 10, sm: 9, xs: 8 },
            }}
            variant="text"
            disableRipple
          >
            About
          </Button>
          <Button
            component={Link}
            to="/Gallery"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontSize: { xl: 15, lg: 12, md: 10, sm: 9, xs: 8 },
            }}
            variant="text"
            disableRipple
          >
            Gallery
          </Button>

          <Button
            component={Link}
            to="/ContactUs"
            sx={{
              backgroundColor: "white",
              color: "black",
              fontSize: { xl: 15, lg: 12, md: 10, sm: 9, xs: 8 },
            }}
            variant="text"
            disableRipple
          >
            Contact us
          </Button>
        </Stack>

        <MenuIcon
          onClick={(e) => setOpen(true)}
          sx={{
            backgroundColor: "white",
            color: "black",
            display: {
              xs: "block",
              sm: "none",
              md: "none",
              lg: "none",
              xl: "none",
            },
          }}
        />
      </Styledtoolbar>

      <Menu
        sx={{ marginTop: 5.5 }}
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem component={Link} to="/Home">
          Home
        </MenuItem>
        <MenuItem component={Link} to="/About">
          About
        </MenuItem>
        <MenuItem component={Link} to="/Gallery">
          Gallery
        </MenuItem>
        <MenuItem component={Link} to="/ContactUs">
          Contact us
        </MenuItem>
      </Menu>
    </AppBar>
  );
};
