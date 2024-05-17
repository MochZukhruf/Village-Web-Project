import React, { useEffect, useState } from "react";
import "../styles/hero.css"; // Import the CSS file

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
    <div>
      <div className="carousel w-full relative overflow-hidden">
        <div className={`carousel-item ${currentSlide === 1 ? "active" : ""}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.jpg"
            className="w-full"
            alt="Slide 1"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 2 ? "active" : ""}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.jpg"
            className="w-full"
            alt="Slide 2"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 3 ? "active" : ""}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.jpg"
            className="w-full"
            alt="Slide 3"
          />
        </div>
        <div className={`carousel-item ${currentSlide === 4 ? "active" : ""}`}>
          <img
            src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.jpg"
            className="w-full"
            alt="Slide 4"
          />
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <button
            className="btn btn-circle"
            onClick={() =>
              setCurrentSlide(
                currentSlide === 1 ? totalSlides : currentSlide - 1
              )
            }
          >
            ❮
          </button>
          <button
            className="btn btn-circle"
            onClick={() => setCurrentSlide((currentSlide % totalSlides) + 1)}
          >
            ❯
          </button>
        </div>
      </div>
      <div className="hero-btn">
        <div className="space-x-10">
          <div className="join ">
            <button className="btn join-item circle-btn">Button</button>
          </div>
          <div className="join">
            <button className="btn join-item circle-btn">Button</button>
          </div>
          <div className="join">
            <button className="btn join-item circle-btn">Button</button>
          </div>
        </div>
      </div>
      <div className="hero-btn">
        <div className="space-x-10">
          <div className="join ">
            <button className="btn join-item circle-btn">Button</button>
          </div>
          <div className="join">
            <button className="btn join-item circle-btn">Button</button>
          </div>
          <div className="join">
            <button className="btn join-item circle-btn">Button</button>
          </div>
        </div>
      </div>
    </div>
  );
};
