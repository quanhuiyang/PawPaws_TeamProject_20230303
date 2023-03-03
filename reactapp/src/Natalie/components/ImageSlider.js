import { width } from "@mui/system";
import { useCallback, useEffect, useRef, useState } from "react";

function ImageSlider({ slides, parentWidth }) {
  const timeRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const sliderStyles = {
    height: "100%",
    position: "relative",
  };
  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "10px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[currentIndex].url})`,
  };

  const leftArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    left: "20px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const rightArrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translate(0, -50%)",
    right: "20px",
    fontSize: "45px",
    color: "#fff",
    zIndex: "1",
    cursor: "pointer",
  };

  const dotsContainerStyles = {
    display: "flex",
    justifyContent: "center",
  };

  const dotStyles = {
    margin: "0 3px",
    cursor: "pointer",
    fontSize: "20px",
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

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const getSlideStytlesWithBackground = (slideIndex) => ({
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
    if (timeRef.current) {
      clearTimeout(timeRef.current);
    }
    timeRef.current = setTimeout(() => {
      goToNext();
    }, 2000);

    return () => clearTimeout(timeRef.current);
  }, [goToNext]);

  return (
    <div style={sliderStyles}>
      <div>
        <div style={leftArrowStyles} onClick={goToPrevious}>
          ←
        </div>
        <div style={rightArrowStyles} onClick={goToNext}>
          →
        </div>
      </div>
      <div style={slidesContainerOverflowStyles}>
        <div style={getSlidesContainerStylesWithWidth()}>
          {slides.map((_, slideIndex) => (
            <div
              key={slideIndex}
              style={getSlideStytlesWithBackground(slideIndex)}
            ></div>
          ))}
        </div>
      </div>
      <div style={dotsContainerStyles}>
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            style={dotStyles}
            onClick={() => goToSlide(slideIndex)}
          >
            •
          </div>
        ))}
      </div>
    </div>
  );
}

export default ImageSlider;
