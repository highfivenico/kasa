import { useState } from "react";
import arrowBack from "../assets/img/arrow-back.png";
import arrowForward from "../assets/img/arrow-forward.png";

const Gallery = ({ pictures, alt }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const totalPictures = pictures.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalPictures - 1 : prevIndex - 1
    );
  };

  return (
    <div className="gallery">
      <div className="gallery__slider" data-index={currentIndex}>
        {pictures.map((picture, index) => (
          <img
            key={index}
            src={picture}
            alt={`${alt} ${index}`}
            className="gallery__image"
          />
        ))}
      </div>
      {pictures.length > 1 && (
        <div>
          <button
            className="gallery__arrow gallery__arrow--left"
            onClick={prevSlide}
          >
            <img src={arrowBack} alt="Bouton précédent" />
          </button>
          <button
            className="gallery__arrow gallery__arrow--right"
            onClick={nextSlide}
          >
            <img src={arrowForward} alt="Bouton suivant" />
          </button>
          <p className="gallery__counter">
            {currentIndex + 1}/{totalPictures}
          </p>
        </div>
      )}
    </div>
  );
};

export default Gallery;
