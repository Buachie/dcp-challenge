import imageData from "../imageData";

const Carousel = () => {
  return (
    <div className="carousel">
      <div className="carousel-inner">
        {imageData.map((image) => {
          return <img src={image.url} alt={image.description} />;
        })}
      </div>
    </div>
  );
};

export default Carousel;
