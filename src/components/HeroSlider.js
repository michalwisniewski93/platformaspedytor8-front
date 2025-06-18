// src/components/HeroSlider.js
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/style.css";
import trucks from '../images/trucks.png'
import knowledge from '../images/knowledge.png'
import achievement from '../images/achievement.png'

const slides = [
  {
    image: trucks,
    title: "Zostań spedytorem",
    description: "Zdobądź jeden z najbardziej perspektywicznych zawodów na rynku."
  },
  {
    image: knowledge,
    title: "Zdobądź tylko praktyczną wiedzę",
    description: "Przekazujemy wiedzę która pozwoli Ci zarabiać pieniądze."
  },
  {
    image: achievement,
    title: "Zaufaj naszemu doświadczeniu",
    description: "Sprawiamy że nauka z nami to miły i przyjemny proces!"
  }
];

const HeroSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    adaptiveHeight: true
  };

  return (
    <div className="hero-slider-wrapper">
      <Slider {...settings} className="hero-slider">
        {slides.map((slide, index) => (
          <div className="slide" key={index}>
            <div
              className="slide-background"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HeroSlider;
