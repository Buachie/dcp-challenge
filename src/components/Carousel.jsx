import React, { useState } from "react";
import imageData from "../imageData";

const Carousel = () => {
  const [activeImg, setActiveImg] = useState(1);

  return (
    <div className="carousel">
      <div className="carousel-inner">
        {/* Checks if the value of the array is greater than 0. If it is slider will not continue */}
        <button
          className="left"
          onClick={() => activeImg > 0 && setActiveImg(activeImg - 1)}
        >
          Left
        </button>
        <img
          src={imageData[activeImg].url}
          alt={imageData[activeImg].description}
        />
        <button
          className="right"
          onClick={() =>
            activeImg < imageData.length - 1 && setActiveImg(activeImg + 1)
          }
        >
          Right
        </button>
      </div>
    </div>
  );
};

export default Carousel;
