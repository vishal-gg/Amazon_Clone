import {React, useRef, useState, useEffect} from "react";
import "../style/Product.css";
import { Link } from "react-router-dom";
import {MdKeyboardArrowLeft, MdKeyboardArrowRight} from 'react-icons/md'

function ProductGallery({gallery, title}) {

  const [mouseOver, setMouseOver] = useState(false);
  
  useEffect(()=> {
    nextBtn.current.style.opacity = mouseOver ? '1' : '0';
    backBtn.current.style.opacity = mouseOver ? '1' : '0';
  }, [mouseOver])


  const slider = useRef(null)
  const backBtn = useRef(null)
  const nextBtn = useRef(null)

  const handleBackBtn = () => {
    slider.current.scrollLeft -= slider.current.clientWidth
  }
  const handleNextBtn = () => {
    slider.current.scrollLeft += slider.current.clientWidth
  }

  return (
    <>
      <div className="slider-container" onMouseOver={()=>setMouseOver(true)} 
        onMouseOut={()=>setMouseOver(false)}>
        <button ref={backBtn} onClick={handleBackBtn} className="slider-btn slide-back">
          <MdKeyboardArrowLeft className="arrow-left" /></button>
        <button ref={nextBtn} onClick={handleNextBtn} className="slider-btn slide-next">
          <MdKeyboardArrowRight className="arrow-right" /></button>
        <h2>{title}<Link>See all offers</Link></h2>
        <div ref={slider} className="slider">
          {
            gallery.map((item, index) => {
                return <div key={index} className="item-wrapper">
                <div style={{padding: '0', backgroundColor: '#fff'}} className="thumbnail">
                  <img style={{height: '100%'}} src={item} alt="404" />
                </div>
              </div>
            })
          }
        </div>
      </div>
    </>
  );
}

export default ProductGallery;
