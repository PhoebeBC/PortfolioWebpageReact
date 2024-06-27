import { techStackLogos } from "../constants/index.jsx";
import React, { Component }from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import BulletPointSvg from "../assets/svg/BulletPointSvg";

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <div
      className={className}
      onClick={onClick}
      style={{
        color: "#0097eb",
        borderRadius: "10px",
        padding: "0.25px",
        Color: "#0097eb",
      }}
    />
  );
};

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />
  );
};

export const TechStackLogos = ({ className }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    pauseOnHover: true,
    swipeToSlide: true,
    nextArrow: <SampleNextArrow className="bg-color-7 block"/>,
    // prevArrow: <SamplePrevArrow className="color-7"/>,
    responsive: [
      {
        breakpoint: 4000,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          dots: false,
          autoplaySpeed: 2000,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        }
      }
    ]
  };
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        Tech Stack used in my projects.
      </h5>
      <div className="mt-10 w-3/4 m-auto">
          <Slider {...settings}>  
              {techStackLogos.map((logo, index) => (
                <div
                  className="flex items-center justify-center"
                  key={index}
                >
                  <img src={logo} width={100} height={100} alt={logo} className="m-auto"/>
                </div>
              ))}
            </Slider>
        </div>
    </div>
  );
};

