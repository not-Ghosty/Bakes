import React, { useState, useRef } from "react";
import a from "./popularcakes.module.css";
import Slider from "react-slick";
import popular1 from "./svg/popular1.png";
import popular2 from "./svg/popular2.png";
import popular3 from "./svg/popular3.png";
import popular4 from "./svg/popular4.png";
import popular5 from "./svg/kitkat.png";
import popular6 from "./svg/popular6.png";
import popular7 from "./svg/popular7.png";
import popular8 from "./svg/popular8.png";
import popular9 from "./svg/update1.png";
import popular10 from "./svg/popular10.png";
import popular11 from "./svg/popular11.png";
import popular12 from "./svg/popular12.png";
import popular13 from "./svg/popular13.png";

const PopularCakes = () => {
  const data = [
    {
      src: popular1,
      head: "Round Chocolate Truffle Cake",
      para: "The heavenly taste of this Choco Truffle Cake will even leave the...",
      rate: "₹ 549",
      index: 1,
    },
    {
      src: popular2,
      head: "Round Shape Butterscotch ca..",
      para: "Always and Forever Delight! This three layered moist and smooth...",
      rate: "₹ 499",
    },
    {
      src: popular3,
      head: "Half Chocolate Half Vanilla...",
      para: "A toothsome treat for the sugar lovers who are just passionate...",
      rate: "₹ 549",
    },
    {
      src: popular4,
      head: "Assorted Fruit and Almond...",
      para: "Freshly baked Vanilla cake, Whipped cream And bountiful...",
      rate: "₹ 699",
    },
    {
      src: popular5,
      head: "Kitkat Chocolate Cake",
      para: "Kitkat cake is not like other cakes; it has delicious crunch in every...",
      rate: "₹ 549",
    },
    {
      src: popular6,
      head: "Snicker Fuse Chocoalte Cake",
      para: "Award yourself with this rich chocolate cake wonderfully cra...",
      rate: "₹ 699",
    },
    {
      src: popular7,
      head: "Round Pink Roses Vanilla Cake",
      para: "So, Valentine's Day is approaching and you must be looking for some.",
      rate: "₹ 1149",
    },
    {
      src: popular8,
      head: "Pineapple Cream Cake",
      para: "This cake is meant for all celebratory occasions! ...",
      rate: "₹ 499",
    },
    {
      src: popular9,
      head: "Heavenly Red Velvet Cake",
      para: "The two celebratory flavours in a single cake-red velvet cake laye...",
      rate: "₹ 649",
    },
    {
      src: popular10,
      head: "Chocolaty Ecstacy Bomb Cake",
      para: "Bring home this ecstatic chocolate bomb and mesmerize your lov ...",
      rate: "₹ 1349",
    },
    {
      src: popular11,
      head: "Black Forest Cake with...",
      para: "We kept this Classic cake untouched and unblemished bec...",
      rate: "₹ 549",
    },
    {
      src: popular12,
      head: "RedVelvet Fruit Layer Cake",
      para: "An exceptionally creamy Open-layered Red Velvet cake with...",
      rate: "₹ 799",
    },
    {
      src: popular13,
      head: "Ferrero Rocher Pinata Cake",
      para: "A cake with a chocolaty soul, yes that sounds about right. A pinata...",
      rate: "₹ 1399",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    beforeChange: (oldIndex, newIndex) => {
      setCurrentSlide(newIndex);
    },
  };

  const goToPrevious = () => {
    if (currentSlide === 0) {
      return;
    }
    sliderRef.current.slickPrev();
  };

  const goToNext = () => {
    const lastSlideIndex = data.length - 1;
    if (currentSlide === lastSlideIndex) {
      return;
    }
    sliderRef.current.slickNext();
    setCurrentSlide((prevSlide) => prevSlide + 1);
  };
  return (
    <div className={a.popular_cakes}>
      <Slider ref={sliderRef} {...settings}>
        <div className={a.card} key={data[0].index}>
          <img src={data[0].src} alt="Choco" />
          <h2>{data[0].head}</h2> <br />
          <p>{data[0].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[0].rate}</h4>{" "}
            <s>₹ 599</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[1].src} alt="Choco" />
          <h2>{data[1].head}</h2> <br />
          <p>{data[1].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[1].rate}</h4>{" "}
            <s>₹ 549</s>
          </span>
        </div>
        <div className={a.card}>
          <img src={data[2].src} alt="Choco" />
          <h2>{data[2].head}</h2> <br />
          <p>{data[2].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[2].rate}</h4>{" "}
          </span>
        </div>
        <div className={a.card}>
          <img src={data[3].src} alt="Choco" />
          <h2>{data[3].head}</h2> <br />
          <p>{data[3].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[3].rate}</h4>{" "}
          </span>
        </div>
        <div className={a.card}>
          <img src={data[4].src} alt="Choco" />
          <h2>{data[4].head}</h2> <br />
          <p>{data[4].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[4].rate}</h4>{" "}
            <s>₹ 599</s>
          </span>
        </div>
        <div className={a.card}>
          <img src={data[5].src} alt="Choco" />
          <h2>{data[5].head}</h2> <br />
          <p>{data[5].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[5].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[6].src} alt="Choco" />
          <h2>{data[6].head}</h2> <br />
          <p>{data[6].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[6].rate}</h4>{" "}
            <s>₹ 1499</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[7].src} alt="Choco" />
          <h2>{data[7].head}</h2> <br />
          <p>{data[7].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[7].rate}</h4>{" "}
            <s>₹ 549</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[8].src} alt="Choco" />
          <h2>{data[8].head}</h2> <br />
          <p>{data[8].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[8].rate}</h4>{" "}
            <s>₹ 775</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[9].src} alt="Choco" />
          <h2>{data[9].head}</h2> <br />
          <p>{data[9].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[9].rate}</h4>{" "}
            <s>₹ 1649</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[10].src} alt="Choco" />
          <h2>{data[10].head}</h2> <br />
          <p>{data[10].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[10].rate}</h4>{" "}
            <s>₹ 599</s>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[11].src} alt="Choco" />
          <h2>{data[11].head}</h2> <br />
          <p>{data[11].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[11].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[12].src} alt="Choco" />
          <h2>{data[12].head}</h2> <br />
          <p>{data[12].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[12].rate}</h4>{" "}
          </span>
        </div>
      </Slider>
      <div className="carousel-controls">
        <button
          className={`carousel-control prev  ${a.arrow} ${a.left} ${
            currentSlide === 0 && a.disabled
          }`}
          id={a.slick_prev}
          onClick={goToPrevious}
        >
          &lt;
        </button>
        <button
          className={` ${a.arrow} ${a.right} ${
            currentSlide === 9 && a.disabled
          }`}
          id={a.slick_next}
          onClick={goToNext}
        >
          &gt;
        </button>
      </div>
      <div className="carousel-indicators">
        {data.map((cake, index) => (
          <span
            key={index}
            className={`carousel-indicator ${
              currentSlide === index ? "active" : ""
            }`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default PopularCakes;
