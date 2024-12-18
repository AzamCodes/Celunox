import React from "react";

const ImageContainer = ({ imageSource, description }) => {
  console.log("Image Source:", imageSource);
  return (
    <div className="image-container">
      <img className="image" src={imageSource} alt={description} />
      <p className="date">{description}</p>
    </div>
  );
};

export default ImageContainer;
