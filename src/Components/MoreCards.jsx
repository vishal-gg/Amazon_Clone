import {React, useState} from "react";
import { Link } from "react-router-dom";
import "../style/MoreCards.css";

function MoreCards() {
  
  const [slideShow, setSlideShow] = useState("/assets/media/products/toaster.jpg")
  const [description, setDescription] 
  = useState("Haden Boston Copper Pyramid 2-Slice Toaster | Removable Crumb Tray | Browning, Defros…")
  const [price, setPrice] = useState('₹4,499')
  const [MRP, setMRP] = useState('₹4,999')
  const [activeBtn, setActiveBtn] = useState(false);


  return (
    <div id="Card-layout">
      <div className="Card Card-1">
        <div className="Wrapper">
          <h2>Sell on Amazon with 1-Click Launch Support</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/sell on amzn.jpg" alt="404" />
            </div>
          </div>
          <Link className="seeMore">Register now</Link>
        </div>
      </div>
      <div className="Card Card-2">
        <div className="Wrapper">
          <h2>Keep shopping for</h2>
          <div className="Product-box slideshow">
            <img src={slideShow} alt="404" />
          </div>
          <div className="description">{description}</div>
          <div className="pricing"><span id="price">{price}</span>
          <span id="MRP">M.R.P:{MRP}</span></div>
          <div className="slideShowImages_controler">
            <button className="slideshow-btn active-btn">
            <img 
            onClick={()=>{
              setSlideShow("/assets/media/products/toaster.jpg");
              setDescription("Haden Boston Copper Pyramid 2-Slice Toaster | Removable Crumb Tray | Browning, Defros…")
              setPrice('₹4,499')
              setMRP(' ₹4,999')
            }}
            src="assets/media/products/toaster.jpg" alt="404" />
            </button>
            <button>
            <img 
            onClick={()=>{
              setSlideShow("/assets/media/products/toaster2.jpg");
              setDescription("AGARO Royal 4 Slice Stainless Steel Pop Up Toaster, With Cancel, Reheat And Defrost Fu…");
              setPrice('₹2,080')
              setMRP(' ₹3,999')
              document.querySelector('.slideshow-btn').classList.remove('active-btn')
            }}
            src="assets/media/products/toaster2.jpg" alt="404" />
            </button>
            <button>
            <img 
            onClick={()=>{
              setSlideShow("/assets/media/products/coffee maker.jpg");
              setDescription("Ariete 1389 Espresso coffee machine/ coffee maker/ Espresso coffee maker: Italian Brand…");
              setPrice('₹25,900')
              setMRP(' ₹27,999')
              document.querySelector('.slideshow-btn').classList.remove('active-btn')
            }}
            src="assets/media/products/coffee maker.jpg" alt="404" />
            </button>
            <button>
            <img 
            onClick={()=>{
              setSlideShow("/assets/media/products/toaster3.jpg");
              setDescription("AGARO GRAND 2 Slice Stainless Steel Pop Up Toaster, With Cancel, Reheat And Defrost Fu…");
              setPrice('₹1,999')
              setMRP(' ₹4,295')
              document.querySelector('.slideshow-btn').classList.remove('active-btn')
            }}
            src="assets/media/products/toaster3.jpg" alt="404" />
            </button>
          </div>
        </div>
      </div>
      <div className="Card Card-3">
        <div className="Wrapper">
          <h2>Up to 60% off | Tools & home improvement</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/wipes.jpg" alt="404" />
              <p>cleaning accessories</p>
            </div>
            <div className="Product Product-2">
              <img src="/assets/media/products/drill machine.jpg" alt="404" />
              <p>Tyre & rim care</p>
            </div>
            <div className="Product Product-3">
              <img
                src="/assets/media/products/bathroom accessories.jpg"
                alt="404"
              />
              <p>Helmets</p>
            </div>
            <div className="Product Product-4">
              <img src="/assets/media/products/extension board.jpg" alt="404" />
              <p>Vacuume cleaner</p>
            </div>
          </div>
          <Link className="seeMore">See More</Link>
        </div>
      </div>
      <div className="Card Card-4">
        <div className="Wrapper">
          <h2>Electronics devices for home office</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/fitness band.jpg" alt="404" />
              <p>cleaning accessories</p>
            </div>
            <div className="Product Product-2">
              <img src="/assets/media/products/tablets.jpg" alt="404" />
              <p>Tyre & rim care</p>
            </div>
            <div className="Product Product-3">
              <img src="/assets/media/products/laptops.jpg" alt="404" />
              <p>Helmets</p>
            </div>
            <div className="Product Product-4">
              <img src="/assets/media/products/monitors.jpg" alt="404" />
              <p>Vacuume cleaner</p>
            </div>
          </div>
          <Link className="seeMore">See More</Link>
        </div>
      </div>
      <div className="Card Card-5">
        <div className="Wrapper">
          <h2>Up to 40% off | Daily essentials</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/laundry.jpg" alt="404" />
              <p>Laundry essentials</p>
            </div>
            <div className="Product Product-2">
              <img src="/assets/media/products/cleaners.jpg" alt="404" />
              <p>Household cleaners</p>
            </div>
            <div className="Product Product-3">
              <img src="/assets/media/products/oral care.jpg" alt="404" />
              <p>Oral care</p>
            </div>
            <div className="Product Product-4">
              <img src="/assets/media/products/air freshners.jpg" alt="404" />
              <p>Air freshners</p>
            </div>
          </div>
          <Link className="seeMore">See More</Link>
        </div>
      </div>
      <div className="Card Card-6">
        <div className="Wrapper">
          <h2>Gardening essentials | Starting ₹99</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/gardening.jpg" alt="404" />
            </div>
          </div>
          <Link className="seeMore">See more</Link>
        </div>
      </div>
      <div className="Card Card-7">
        <div className="Wrapper">
          <h2>Fire TV streaming devices</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/stick 4k.jpg" alt="404" />
              <p>Fire TV Stick 4k</p>
            </div>
            <div className="Product Product-2">
              <img src="/assets/media/products/stick.jpg" alt="404" />
              <p>Fire TV stick</p>
            </div>
            <div className="Product Product-3">
              <img src="/assets/media/products/tv cube.jpg" alt="404" />
              <p>All-new Fire TV Cube</p>
            </div>
            <div className="Product Product-4">
              <img src="/assets/media/products/stick lite.jpg" alt="404" />
              <p>Fire TV stick lite</p>
            </div>
          </div>
          <Link className="seeMore">See More</Link>
        </div>
      </div>
      <div className="Card Card-8">
        <div className="Wrapper">
          <h2>Up to 50% off | International brands</h2>
          <div className="Product-box">
            <div className="Product Product-1">
              <img src="/assets/media/products/international brands.jpg" alt="404" />
            </div>
          </div>
          <Link className="seeMore">See all Offers</Link>
        </div>
      </div>
    </div>
  );
}

export default MoreCards;
