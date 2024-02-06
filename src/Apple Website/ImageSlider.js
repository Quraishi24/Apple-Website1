import React, {useState,useEffect} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import slide1 from "./images/slide1.png";
import slide2 from "./images/slide2.jpg";
import slide3 from "./images/slide3.webp";
import slide4 from "./images/slide4.jpg";
import slide5 from "./images/slide5.jpg";
import slide6 from "./images/slide6.jpg";
import slide7 from "./images/slide7.jpg";
import slide8 from "./images/slide8.webp";
import slide9 from "./images/slide9.jpg";
import slide10 from "./images/slide10.jpg";

const ImageSlider = () => {
    const images = [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10,];

    const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    const isFirstSlide = currentSlide === images.length - 1;
    const newSlide = isFirstSlide ? 0 : currentSlide + 1;
    setCurrentSlide(newSlide);
  };

  const prevSlide = () => {
    const isLastSlide = currentSlide === 0;
    const newSlide = isLastSlide ? images.length - 1 : currentSlide - 1;
    setCurrentSlide(newSlide);
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.keyCode === 37) prevSlide();
      else if (event.keyCode === 39) nextSlide();
    };

    window.addEventListener("keydown", handleKeyPress);

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  });



    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 300,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    const imageStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        border: "none",
        objectFit: "contain",
        borderRadius: "10px"
    };

    return (
        <Slider {...settings}>
            {images.map((image, index) => (
                <div key={index}>
                    <img style={imageStyle} src={image} alt='pic' />
                </div>
            ))}
        </Slider>
    );
};

export default ImageSlider;