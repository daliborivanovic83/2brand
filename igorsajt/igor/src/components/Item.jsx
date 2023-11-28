import { Box } from "@mui/material";
import React from "react";

function Item({ item }) {
  return (
    <Box
      sx={{
        marginTop: { xl: 12, lg: 12, md: 8, sm: 6, xs: 6 },
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: {
          xl: "100vh",
          lg: "100vh",
          md: "100vh",
          sm: "100vh",
          xs: "100vh",
        },
      }}
    >
      <img
        alt={item.label}
        src={item.image}
        style={{
          objectFit: "contain",
          maxWidth: "100%",
          maxHeight: "100%",
          width: "auto",
          height: "auto",
        }}
      />
    </Box>
  );
}

export default Item;
