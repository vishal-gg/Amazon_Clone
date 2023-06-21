import { React, useState, useEffect } from "react";
import "../style/PageContent.css";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import {BsDot} from 'react-icons/bs'
import Cards from "./Cards";

function PageContent() {
  const [index, setIndex] = useState(0);
  const [shouldStartInterval, setShouldStartInterval] = useState(false);

  const images = [
    { url: "assets/media/movie poster.jpg", id: 2 },
    { url: "assets/media/groceries.jpg", id: 3 },
    { url: "assets/media/security cameras.jpg", id: 4 },
    { url: "assets/media/smart watches.jpg", id: 5 },
    { url: "assets/media/skin care.jpg", id: 6 },
    { url: "assets/media/kitchen ware.jpg", id: 7 },
  ];

  useEffect(() => {
    const handleResize = () => {
      setShouldStartInterval(window.innerWidth < 1030);
    };
    handleResize(); // initialize the state, this call is cruical for when component mounts with less than 1030px
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let intervalId;
    if (shouldStartInterval) {
      intervalId = setInterval(() => {
        setIndex(index => (index + 1) % images.length);
      }, 5000);
    }
    return () => clearInterval(intervalId);
  }, [shouldStartInterval]);  //should also add images.length as a dependency if array's length updates

  return (
    <div id="page-content">
      <div className="carousel-path">
        <img className="carousel-item" src={images[index].url} alt="404" />
        <div className="carousel-indicator">
          {images.map((item, index) => {
            return (
              <BsDot
                key={index}
                className={`indicator-dot ${index === index ? 'active' : ''}`}
                onClick={() => {
                  setIndex(index);
                }}
              />
            )
          })}
        </div>
        <button
        className="carousel-btn back-btn"
        onClick={() => {
          index === 0 ? setIndex(images.length - 1) : setIndex(index - 1)
        }}>
        <SlArrowLeft className="btn-arrow" />
      </button>
      <button
        className="carousel-btn next-btn"
        onClick={() => {
          index === images.length - 1 ? setIndex(0) : setIndex(index + 1)
        }}>
        <SlArrowRight className="btn-arrow" />
      </button>
      </div>
      <Cards />
    </div>
  );
}

export default PageContent;
