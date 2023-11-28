import { Box } from "@mui/system";
import React from "react";
import Headline from "./Headline";
import Carousels from "../components/Carousels";
import ProjectPhoto from "./ProjectPhoto";
<title>2 brand design Home page</title>;
const Home = () => {
  return (
    <Box flex={2} sx={{ marginTop: "2rem" }}>
      <ProjectPhoto />
      <Headline />
      <Carousels />
    </Box>
  );
};

export default Home;
