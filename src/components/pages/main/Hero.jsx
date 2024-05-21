import React, { useEffect, useState } from "react";
import "../../../styles/hero.css"; // Import the CSS file

export const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 4;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide % totalSlides) + 1);
    }, 3000); // Change slide every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel w-full relative overflow-hidden">
      <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
        <img src="/img/carousel/1.png" className="w-full" alt="Slide 1" />
      </div>
      <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
        <img src="/img/carousel/2.png" className="w-full" alt="Slide 2" />
      </div>
      <div className={`carousel-item ${currentSlide === 3 ? "active" : ""}`}>
        <img src="/img/carousel/3.png" className="w-full" alt="Slide 3" />
      </div>
      <div className={`carousel-item ${currentSlide === 4 ? "active" : ""}`}>
        <img src="/img/carousel/4.png" className="w-full" alt="Slide 4" />
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
        <button
          className="btn-arrow btn-circle"
          onClick={() =>
            setCurrentSlide(currentSlide === 1 ? totalSlides : currentSlide - 1)
          }
        >
          ❮
        </button>
        <button
          className="btn-arrow btn-circle"
          onClick={() => setCurrentSlide((currentSlide % totalSlides) + 1)}
        >
          ❯
        </button>
      </div>
    </div>
  );
};
