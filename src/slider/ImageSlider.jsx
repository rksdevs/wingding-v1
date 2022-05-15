import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./css/slider.css";
import image1 from "../assets/avatar-1.jpg";
import image2 from "../assets/avatar-1.jpg";
import image3 from "../assets/avatar-1.jpg";
import image4 from "../assets/avatar-1.jpg";

const ImageSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    cssEase: "linear",
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={image1} />
            </div>
            <div className="details">
              <h2>WingdinG Photography</h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={image2} />
            </div>
            <div className="details">
              <h2>WingdinG Photography</h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={image3} />
            </div>
            <div className="details">
              <h2>WingdinG Photography</h2>
            </div>
          </div>
        </div>
        <div className="card-wrapper">
          <div className="card">
            <div className="card-image">
              <img src={image4} />
            </div>
            <div className="details">
              <h2>WingdinG Photography</h2>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default ImageSlider;
