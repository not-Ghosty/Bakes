import React, { useState, useRef } from "react";
import a from "./photo.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import popular1 from "./svg/photocake1.png";
import popular2 from "./svg/photocake2.png";
import popular3 from "./svg/photocake3.png";
import popular4 from "./svg/photocake4.png";
import popular5 from "./svg/photocake5.png";
import popular6 from "./svg/photocake6.png";
import popular7 from "./svg/photocake7.png";
import popular8 from "./svg/photocake8.png";
import popular9 from "./svg/photocake9.png";
import popular10 from "./svg/photocake10.png";
import popular11 from "./svg/photocake11.png";
import popular12 from "./svg/photocake12.png";
import popular13 from "./svg/photocake13.png";

const PhotoCakes = () => {
  const data = [
    {
      src: popular1,
      head: "Birthday Photo Cake 16 Roun...",
      para: "Birthday comes only once in a year and is celebrated with loads of gifts, lovely...",
      rate: "₹ 749",
      index: 1,
    },
    {
      src: popular2,
      head: "Round White Funfetti Phot..",
      para: "Celebrate your little sweetheart's first birthday with our Round White Funfetti...",
      rate: "₹ 749",
    },
    {
      src: popular3,
      head: "Round Red Velvet Photo Cake",
      para: "A classic red velvet flavoured cake with a dash of personalization is the perfect...",
      rate: "₹ 849",
    },
    {
      src: popular4,
      head: "Birthday Photo Cake 12...",
      para: "Avoid placing the photo and poster cake in a refrigerator as the chilled droplets can...",
      rate: "₹ 749",
    },
    {
      src: popular5,
      head: "Round Shape Photo Cake For...",
      para: "Personalised with a picture of you and your sweetheart and your names, the...",
      rate: "₹ 799",
    },
    {
      src: popular6,
      head: "Blissful Spiderman Photo Cake",
      para: "Make your kid's wishes come true with this SPiderman Cake! Celebrating the birthday...",
      rate: "₹ 775",
    },
    {
      src: popular7,
      head: "Two Tier Chocolate Photo Ca..",
      para: "Celebrate your anniversary this year in the best way possible with this lovely two-tier.",
      rate: "₹ 2199",
    },
    {
      src: popular8,
      head: "White Creamy Pink Photo...",
      para: "Surprise the best couple in the world, your mom and dad on their wedding day...",
      rate: "₹ 799",
    },
    {
      src: popular9,
      head: "Paw Patrol Poster Cake",
      para: "Six brave puppies captained by a tech-savvy ten-year-old boy, Ryder, work...",
      rate: "₹ 775",
    },
    {
      src: popular10,
      head: "Birthday Photo Cake 4 Roun...",
      para: "Birthdays are special and thus, the celebration has to be extra special. And ...",
      rate: "₹ 749",
    },
    {
      src: popular11,
      head: "Creamy Blue N White Photo...",
      para: "Express love and appreciation to your significant other on your special day with...",
      rate: "₹ 749",
    },
    {
      src: popular12,
      head: "Adorable Theme Cake For...",
      para: "Little Mister or Little Sister? Heels or Wheels? Pink or Blue? Hope all your...",
      rate: "₹ 775",
    },
    {
      src: popular13,
      head: "Photo Cake Round Shape",
      para: "Bring in the most admiring cake of the season- the photo cake. Just remember ...",
      rate: "₹ 799",
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
          <h2>{data[0].head}</h2>
          <p>{data[0].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[0].rate}</h4>{" "}
            <s>₹ 599</s>
            <span className={a.offer}>7% OFF</span>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[1].src} alt="Choco" />
          <h2>{data[1].head}</h2>
          <p>{data[1].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[1].rate}</h4>{" "}
            <s>₹ 549</s>
          </span>
        </div>
        <div className={a.card}>
          <img src={data[2].src} alt="Choco" />
          <h2>{data[2].head}</h2>
          <p>{data[2].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[2].rate}</h4>{" "}
            <s>₹ 949</s>
            <span className={a.offer}>11% OFF</span>
          </span>
        </div>
        <div className={a.card}>
          <img src={data[3].src} alt="Choco" />
          <h2>{data[3].head}</h2>
          <p>{data[3].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[3].rate}</h4>{" "}
            <s>₹ 799</s>
            <span className={a.offer}>7% OFF</span>
          </span>
        </div>
        <div className={a.card}>
          <img src={data[4].src} alt="Choco" />
          <h2>{data[4].head}</h2>
          <p>{data[4].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[4].rate}</h4>{" "}
          </span>
        </div>
        <div className={a.card}>
          <img src={data[5].src} alt="Choco" />
          <h2>{data[5].head}</h2>
          <p>{data[5].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[5].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[6].src} alt="Choco" />
          <h2>{data[6].head}</h2>
          <p>{data[6].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[6].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[7].src} alt="Choco" />
          <h2>{data[7].head}</h2>
          <p>{data[7].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[7].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[8].src} alt="Choco" />
          <h2>{data[8].head}</h2>
          <p>{data[8].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[8].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[9].src} alt="Choco" />
          <h2>{data[9].head}</h2>
          <p>{data[9].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[9].rate}</h4>{" "}
            <s>₹ 799</s>
            <span className={a.offer}>7% OFF</span>
          </span>
        </div>

        <div className={a.card}>
          <img src={data[10].src} alt="Choco" />
          <h2>{data[10].head}</h2>
          <p>{data[10].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[10].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[11].src} alt="Choco" />
          <h2>{data[11].head}</h2>
          <p>{data[11].para}</p>
          <span>
            <h4 style={{ display: "inline-block" }}>{data[11].rate}</h4>{" "}
          </span>
        </div>

        <div className={a.card}>
          <img src={data[12].src} alt="Choco" />
          <h2>{data[12].head}</h2>
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

export default PhotoCakes;
