import "./Productgallery.css";
import { Box } from "@mui/material";

const Productgallery = ({ images, imagesMobile }) => {
  return (
    <>
      <Box
        sx={{
          display: {
            xl: "block",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "none",
          },
          marginBottom: "5rem",
        }}
      >
        <div className="image-gallery">
          {images.map((image) => (
            <Box marginBottom="20px">
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                height="620px"
                width="900px"
              />
            </Box>
          ))}
        </div>
      </Box>
      <Box
        sx={{
          display: {
            xl: "none",
            lg: "block",
            md: "none",
            sm: "none",
            xs: "none",
          },
          marginBottom: "5rem",
        }}
      >
        <div className="image-gallery">
          {images.map((image) => (
            <Box marginBottom="80px">
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                height="339px"
                width="550px"
              />
            </Box>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "block",
            sm: "none",
            xs: "none",
          },
          marginBottom: "5rem",
        }}
      >
        <div className="image-gallery">
          {images.map((image) => (
            <Box marginBottom="80px">
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                height="250px"
                width="400px"
              />
            </Box>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "block",
            xs: "none",
          },
          marginBottom: "5rem",
        }}
      >
        <div className="image-gallery">
          {imagesMobile.map((image) => (
            <Box marginBottom="110px">
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                height="400px"
                width="280px"
              />
            </Box>
          ))}
        </div>
      </Box>

      <Box
        sx={{
          display: {
            xl: "none",
            lg: "none",
            md: "none",
            sm: "none",
            xs: "block",
          },
          marginBottom: "5rem",
        }}
      >
        <div className="image-gallery">
          {imagesMobile.map((image) => (
            <Box marginBottom="120px">
              <img
                key={image.id}
                src={image.src}
                alt={image.alt}
                height="360px"
                width="260px"
              />
            </Box>
          ))}
        </div>
      </Box>
    </>
  );
};

export default Productgallery;
