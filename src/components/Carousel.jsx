import React, { useState } from "react";
import imageData from "../imageData";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

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
      {/* Checks if the value of the array is greater than 0. If it is slider will not continue */}
      <button className="left" onClick={prevImage}>
        <MdArrowBackIos size={50} />
      </button>
      <button className="right" onClick={nextImage}>
        <MdArrowForwardIos size={50} />
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
