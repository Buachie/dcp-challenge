import React, { useState } from "react";
import imageData from "../imageData";
import {
  IoIosArrowDroprightCircle,
  IoIosArrowDropleftCircle,
} from "react-icons/io";

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(0);
  const length = imageData.length;

  const nextImage = () => {
    setActiveImg(activeImg === length - 1 ? 0 : activeImg + 1);
    console.log(activeImg);
  };

  const prevImage = () => {
    setActiveImg(activeImg === 0 ? length - 1 : activeImg - 1);
  };

  if (!Array.isArray(imageData) || imageData.length <= 0) {
    return null;
  }

  return (
    <div className="carousel">
      <button className="left" onClick={prevImage}>
        <IoIosArrowDropleftCircle size={50} />
      </button>
      <button className="right" onClick={nextImage}>
        <IoIosArrowDroprightCircle size={50} />
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
    </div>
  );
};

export default Carousel;
