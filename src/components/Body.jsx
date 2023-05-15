import React from "react";
import banner1 from "./svg/banner1.png";
import banner2 from "./svg/banner2.png";
import banner3 from "./svg/banner3.png";
import banner4 from "./svg/banner4.png";
import chocolate from "./svg/chocolate.png";
import fruit from "./svg/fruit.png";
import pineapple from "./svg/pineapple.png";
import kitkat from "./svg/kitkat2.png";
import redvelvet from "./svg/redvelvet.png";
import mango from "./svg/mango.png";
import butterscotch from "./svg/butterscotch.png";
import blackforest from "./svg/blackforest.png";
import background from "./svg/background1.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import a from "./main.module.css";
import PopularCakes from "./PopularCakes";
import PhotoCakes from "./PhotoCakes";
const Body = () => {
  const popularCakes = [
    {
      name: "Black Forest Cake",
      image: banner1,
      price: 599,
    },
    {
      name: "Chocolate Truffle Cake",
      image: banner2,
      price: 699,
    },
    {
      name: "Red Velvet Cake",
      image: banner3,
      price: 799,
    },
    {
      name: "Red Velvet Cake",
      image: banner4,
      price: 799,
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const PrevArrow = (props) => (
    <button
      style={{ ...arrowStyles, left: "10px" }}
      className="prev-arrow"
      onClick={props.onClick}
    >
      <FaArrowLeft />
    </button>
  );

  const NextArrow = (props) => (
    <button
      style={{ ...arrowStyles, right: "10px" }}
      className="next-arrow"
      onClick={props.onClick}
    >
      <FaArrowRight />
    </button>
  );
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };
  const arrowStyles = {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    zIndex: 1,
    cursor: "pointer",
    fontSize: "1.5rem",
    color: "#fff",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "50%",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  const pop_slide_settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 2,
    // autoplay: true,
    autoplaySpeed: 2000,
    justifyContent: "none",
    centerMode: true,
    centerPadding: "0px",
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const sliderStyles = {
    margin: "0 ", // Adjust the margin property as per your requirement
    padding: "0 ",
  };
  return (
    <div id={a.body}>
      {/* slider */}

      <div id={a.whole}>
        <Slider
          prevArrow={<PrevArrow />}
          nextArrow={<NextArrow />}
          style={{ position: "relative" }}
          {...settings}
          {...sliderSettings}
        >
          {popularCakes.map((cake) => (
            <div id={a.main_div} key={cake.name}>
              <img id={a.slideimg} src={cake.image} alt={cake.name} />
            </div>
          ))}
        </Slider>
      </div>

      {/* slider */}

      {/* Experience flovours */}
      <div id={a.experienceflavour_div}>
        <img id={a.background} src={background} alt="" />
        <h1>Experience Flavours</h1>
        <div id={a.cardholder_div}>
          <a href="/chocolate">
            <div className={a.card}>
              <div id={a.test}>
                <img src={chocolate} alt="" />
                <h1>Chocolate</h1>
                <span>for choco addicts</span>
              </div>
            </div>
          </a>
          <a href="/fruits">
            <div className={a.card}>
              <img src={fruit} alt="" />
              <h1>Fruits</h1>
              <span>a Taste Of Tropics</span>
            </div>
          </a>
          <a href="/redvelvet">
            <div className={a.card}>
              <img src={redvelvet} alt="" />
              <h1>Red Velvet</h1>
              <span>For Exotic Lover</span>
            </div>
          </a>
          <a href="/mango">
            <div className={a.card}>
              <img src={mango} alt="" />
              <h1>Mango</h1>
              <span>For Mango Lovers</span>
            </div>
          </a>
          <a href="/blackforest">
            <div className={a.card}>
              <img src={blackforest} alt="" />
              <h1>Blackforest</h1>
              <span>The All Time Favourite</span>
            </div>
          </a>
          <a href="/pineapple">
            <div className={a.card}>
              <img src={pineapple} alt="" />
              <h1>Pineapple Cakes</h1>
              <span>Evergreen one</span>
            </div>
          </a>
          <a href="/butterscotch">
            <div className={a.card}>
              <img src={butterscotch} alt="" />
              <h1>Butterscotch</h1>
              <span>For Candy Fans</span>
            </div>
          </a>
          <a href="/kitkat">
            <div className={a.card}>
              <img src={kitkat} alt="" />
              <h1>Kitkat</h1>
              <span>Crunchiness Overloaded</span>
            </div>
          </a>
        </div>
      </div>
      {/* Experience flovours */}

      {/* popular cakes */}
      <div id={a.popularcakes_div}>
        <h1>Popular Cakes</h1>
        <div id={a.cardholder2}>
          <div id={a.app_popularcakes}>
            <PopularCakes />
          </div>
        </div>
      </div>
      {/* popular cakes */}
      <div id={a.viewall_div}>
        <a className={a.viewall} href="/">
          View All
        </a>
      </div>

      {/* Photo cakes */}
      <div id={a.popularcakes_div}>
        <h1>Photo Cakes</h1>
        <div id={a.cardholder2}>
          <div id={a.app_popularcakes}>
            <PhotoCakes />
          </div>
        </div>
      </div>
      {/* Photo cakes */}
    </div>
  );
};

export default Body;
