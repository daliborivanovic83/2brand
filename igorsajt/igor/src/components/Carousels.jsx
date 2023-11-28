import { Box } from "@mui/material";
import React from "react";
import ImageSlider from "../components/ImageSlider";

const slides = [
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/axalwhite.jpg?raw=true",
    title: "Axal bohor",
  },

  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/after%20eight%20together.jpg?raw=true",
    title: "after eight Tea",
  },

  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/bambiribice.png?raw=true",
    title: "jos ribice",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/benzbaristasingle.jpg?raw=true",
    title: "benz barista",
  },

  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/dunhill%20cigs.jpg?raw=true",
    title: "dunhill cigarete",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/hot%20sauce.jpg?raw=true",
    title: "hot sauce",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/kenya%20tea.jpg?raw=true",
    title: "east sign tea",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/katzezungenfinal.jpg?raw=true",
    title: "cat food",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/champagne.jpg?raw=true",
    title: "champagne",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/headandshoulders.jpg?raw=true",
    title: "head and shoulders",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/paints.jpg?raw=true",
    title: "paints",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/coffe%20blends.jpg?raw=true",
    title: "coffee blends",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/crack%20coffee.jpg?raw=true",
    title: " crack coffee ",
  },

  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/quail.jpg?raw=true",
    title: "quail egg",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/nescafeaparatfinal.jpg?raw=true",
    title: "nescafe coffe machine",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/natures%20caj.jpg?raw=true",
    title: "nature tea",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d16.jpg?raw=true",
    title: "body lotion",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d17.jpg?raw=true",
    title: "bottle design",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d18.jpg?raw=true",
    title: "chardonnay wine",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d19.jpg?raw=true",
    title: "paints",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d20.jpg?raw=true",
    title: "axal bohor",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/d21%20copy.jpg?raw=true",
    title: "excedrin",
  },
  {
    url: "https://github.com/daliborivanovic83/hosted-pic-igor/blob/main/tweezerman.jpg?raw=true",
    title: "tweezerman",
  },
];
/*
function Page() {
  let isPageWide = useMediaQuery("(min-width: 800px)");

  return (
    <>
      {isPageWide && <UnnecessarySidebar />}
      <ImportantContent />
    </>
  );
}
*/

export default function Carousels() {
  return (
    <>
      <Box
        sx={{
          width: { xl: 900 },
          height: { xl: 400 },
          margin: " auto",
          display: {
            xl: "block",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <ImageSlider slides={slides} parentWidth={900} />
      </Box>

      <Box
        sx={{
          width: { lg: 700 },
          height: { lg: 260 },
          margin: " auto",
          display: {
            xl: "none",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
        }}
      >
        <ImageSlider slides={slides} parentWidth={700} />
      </Box>

      <Box
        sx={{
          width: { md: 450 },
          height: { md: 250 },
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
        <ImageSlider slides={slides} parentWidth={450} />
      </Box>

      <Box
        sx={{
          width: { sm: 330 },
          height: { sm: 200 },
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
        <ImageSlider slides={slides} parentWidth={330} />
      </Box>

      <Box
        sx={{
          width: { xs: 330 },
          height: { xs: 200 },
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
        <ImageSlider slides={slides} parentWidth={330} />
      </Box>
    </>
  );
}
