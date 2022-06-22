import React, { useState } from "react";
import Slider from "react-slick";

const NextArrow = ({ onClick }) => {
  return (
    <button className="nextArrow btn-sm rounded-full p-3 text-white bg-blue-600 hover:bg-blue-700 " onClick={onClick}>
     <svg
       className="w-4 h-4 fill-current text-white flex-shrink-0 "
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
          fillRule="nonzero"
        />
      </svg>
    </button>
  );
};

const PrevArrow = ({ onClick }) => {
  return (
    <button className="prevArrow  rounded-full btn-sm text-white bg-blue-600 p-3 hover:bg-blue-700" onClick={onClick}>
      <svg
        className="w-4 h-4 fill-current text-white flex-shrink-0 "
        viewBox="0 0 12 12"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M11.707 5.293L7 .586 5.586 2l3 3H0v2h8.586l-3 3L7 11.414l4.707-4.707a1 1 0 000-1.414z"
          fillRule="nonzero"
        />
      </svg>
    </button>
  );
};

const ImageSlider = ({ images, slidesToShow = 3 }) => {
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: slidesToShow,
    centerPadding: "0",
    swipeToSlide: true,
    focusOnSelect: true,
    nextArrow: <NextArrow onClick />,
    prevArrow: <PrevArrow onClick />,
    beforeChange: (current, next) => setImageIndex(next),
    responsive: [
      {
        breakpoint: 1490,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 820,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const templateImages = images.map((image, idx) => {
    if (image !== null) {
      return (
        <div
          className={idx === imageIndex ? "activeSlide" : "slide"}
          key={image.id}
        >
          <div className="slideWrapper">
            {image.code ? image.code : <img src={image.src} alt={image.alt} />}
          </div>
        </div>
      );
    }
    return null;
  });

  return <Slider {...settings}>{templateImages}</Slider>;
};

export default ImageSlider;
