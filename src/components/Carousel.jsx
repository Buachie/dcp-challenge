import React, { useState } from "react";
import imageData from "../imageData";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(0);
  const length = imageData.length;

  //If the carousel is at the final image in the array, it sets the active image back to the first
  const nextImage = () => {
    setActiveImg(activeImg === length - 1 ? 0 : activeImg + 1);
  };

  //If the carousel is at the first image in the array, clicking the previous button will set the image to the last
  const prevImage = () => {
    setActiveImg(activeImg === 0 ? length - 1 : activeImg - 1);
  };

  //Checks if array exists and if it is populated
  if (!Array.isArray(imageData) || imageData.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <button className="left" onClick={prevImage} aria-label="Previous Image">
        <IoIosArrowDropleftCircle size={50} />
      </button>

      {imageData.map((image, index) => {
        return (
          <div
            className={index === activeImg ? "image active" : "image"}
            key={index}
          >
            {index === activeImg && (
              <img className="slide" src={image.url} alt={image.description} />
            )}
          </div>
        );
      })}
      <button className="right" onClick={nextImage} aria-label="Next Image">
        <IoIosArrowDroprightCircle size={50} />
      </button>
    </div>
  );
};

export default Carousel;
