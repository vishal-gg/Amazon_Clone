import {React, useEffect, useRef, useState} from "react";
import "../style/Product.css";
import { Link } from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

function ProductSlider() {

  const [mouseOver, setMouseOver] = useState(false);

  const slider = useRef(null)
  const backBtn = useRef(null)
  const nextBtn = useRef(null)

  const handleBackBtn = () => {
    slider.current.scrollLeft -= slider.current.clientWidth
  }
  const handleNextBtn = () => {
    slider.current.scrollLeft += slider.current.clientWidth
  }

  useEffect(()=> {
    nextBtn.current.style.opacity = mouseOver ? '1' : '0';
    backBtn.current.style.opacity = mouseOver ? '1' : '0';
  }, [mouseOver])

  return (
    <>
      <div className="slider-container" onMouseOver={()=>setMouseOver(true)} 
        onMouseOut={()=>setMouseOver(false)}>
        <button ref={backBtn} onClick={handleBackBtn} className="slider-btn slide-back">
          <MdKeyboardArrowLeft className="arrow-left" /></button>
        <button ref={nextBtn} onClick={handleNextBtn} className="slider-btn slide-next">
          <MdKeyboardArrowRight className="arrow-right" /></button>
        <h2>
          Today's Deals <Link>See all Deals</Link>
        </h2>
        <div ref={slider} className="slider">
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/IQOO Z7 5G.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>14% off</span>
                Deal of the Day
              </p>
              <p>iQOO Z7 5G</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/budget laptop.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 41% off</span>
                Deal of the Day
              </p>
              <p>Budget Laptops under INR 45000; Me..</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/ear buds.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 38% off</span>
                Deal of the Day
              </p>
              <p>Oneplus New Launch Nord Buds 2</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/ipad.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 11% off</span>
                Deal of the Day
              </p>
              <p>Grab or Gone: Apple iPads on Limited...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/macbook.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 30% off</span>
                Deal of the Day
              </p>
              <p>High Performance Thin and Light Laptop</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/asus laptop.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 31% off</span>
                Deal of the Day
              </p>
              <p>Mega Electronic Days - Gaming Laptop</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/fastrack.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 65% off</span>
                Deal of the Day
              </p>
              <p>Newly Lauched Fastrack Limitless 1.9...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/suitcase.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 74% off</span>
                Deal of the Day
              </p>
              <p>Brand Suitcase, Backpacks and Duffl...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/samsung tablet.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 32% off</span>
                Deal of the Day
              </p>
              <p>Samsung Tablet on Mind Blowing Deals</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/keyboard mouse.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 62% off</span>
                Deal of the Day
              </p>
              <p>Top Deals on Computer Accessories</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/IQOO Z7 5G.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>14% off</span>
                Deal of the Day
              </p>
              <p>iQOO Z7 5G</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/budget laptop.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 41% off</span>
                Deal of the Day
              </p>
              <p>Budget Laptops under INR 45000; Me..</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/ear buds.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 38% off</span>
                Deal of the Day
              </p>
              <p>Oneplus New Launch Nord Buds 2</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/ipad.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 11% off</span>
                Deal of the Day
              </p>
              <p>Grab or Gone: Apple iPads on Limited...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/macbook.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 30% off</span>
                Deal of the Day
              </p>
              <p>High Performance Thin and Light Laptop</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/asus laptop.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 31% off</span>
                Deal of the Day
              </p>
              <p>Mega Electronic Days - Gaming Laptop</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/fastrack.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 65% off</span>
                Deal of the Day
              </p>
              <p>Newly Lauched Fastrack Limitless 1.9...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/suitcase.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 74% off</span>
                Deal of the Day
              </p>
              <p>Brand Suitcase, Backpacks and Duffl...</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/samsung tablet.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 32% off</span>
                Deal of the Day
              </p>
              <p>Samsung Tablet on Mind Blowing Deals</p>
            </div>
          </div>
          <div className="item-wrapper">
            <div className="thumbnail">
              <img src="assets/media/product slider/keyboard mouse.png" alt="404" />
            </div>
            <div className="about">
              <p>
                <span>Up to 62% off</span>
                Deal of the Day
              </p>
              <p>Top Deals on Computer Accessories</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductSlider;
