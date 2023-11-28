import React, { useCallback, useEffect } from "react";
import { useState, useRef } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const containerStyles = {
  borderRadius: "1rem",

  height: "100%",
  width: "100%",
};

const slideStyles = {
  width: "100%",
  height: "100%",
  borderRadius: "0.7rem",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const rightArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -80%)",
  right: "24px",

  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const leftArrowStyles = {
  position: "absolute",
  top: "50%",
  transform: "translate(0, -80%)",
  left: "24px",

  color: "#000",
  zIndex: 1,
  cursor: "pointer",
};

const sliderStyles = {
  position: "relative",
  height: "100%",
  width: "100%",
};

const slidesContainerStyles = {
  display: "flex",
  height: "100%",
  transition: "transform ease-out 0.3s",
};

const slidesContainerOverflowStyles = {
  overflow: "hidden",
  height: "100%",
};

const ImageSlider = ({ slides, parentWidth }) => {
  const timerRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const goToNext = useCallback(() => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  }, [currentIndex, slides]);

  const getSlideStylesWithBackground = (slideIndex) => ({
    ...slideStyles,
    backgroundImage: `url(${slides[slideIndex].url})`,
    width: `${parentWidth}px`,
  });
  const getSlidesContainerStylesWithWidth = () => ({
    ...slidesContainerStyles,
    width: parentWidth * slides.length,
    transform: `translateX(${-(currentIndex * parentWidth)}px)`,
  });

  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    timerRef.current = setTimeout(() => {
      goToNext();
    }, 4000);

    return () => clearTimeout(timerRef.current);
  }, [goToNext]);

  return (
    <motion.div
      style={containerStyles}
      className="container"
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: "spring",
        stiffness: 180,
        damping: 30,
        delay: 6,
      }}
    >
      <div
        style={sliderStyles}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {isHovering && (
          <div>
            <ArrowBackIcon
              sx={{
                fontSize: {
                  xl: "3rem",
                  lg: "2.8rem",
                  md: "2.2rem",
                  sm: "1.8rem",
                  xs: "1.5rem",
                },
              }}
              onClick={goToPrevious}
              style={leftArrowStyles}
            />
            <ArrowForwardIcon
              sx={{
                fontSize: {
                  xl: "3rem",
                  lg: "2.8rem",
                  md: "2.2rem",
                  sm: "1.8rem",
                  xs: "1.5rem",
                },
              }}
              onClick={goToNext}
              style={rightArrowStyles}
            />
          </div>
        )}

        <div style={slidesContainerOverflowStyles}>
          <div style={getSlidesContainerStylesWithWidth()}>
            {slides.map((_, slideIndex) => (
              <div
                key={slideIndex}
                style={getSlideStylesWithBackground(slideIndex)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ImageSlider;
