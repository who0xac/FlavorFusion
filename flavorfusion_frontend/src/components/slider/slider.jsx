import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/slider.css";

// Import images
import cake from "../../assets/images/cake.jpg";
import pizza from "../../assets/images/pizza.jpg";
import pasta from "../../assets/images/pasta.jpg";
import indianfood from "../../assets/images/indianfood.jpg";
import mexican from "../../assets/images/mexican.jpg";

const images = [cake, pizza, pasta, indianfood, mexican];

const ImageSlider = () => {
  const settings = {
    dots: true, 
    infinite: true, 
    speed: 500, 
    slidesToShow: 1, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="slider-image"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ImageSlider;
