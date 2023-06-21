import { React, useRef, useState, useEffect } from "react";
import "../style/Navbar.css";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoSearch } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import { TbMenu2 } from "react-icons/tb";
import { RiArrowDropRightLine } from "react-icons/ri";
import { FaUserCircle } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import { VscChromeClose } from "react-icons/vsc";

function Navbar() {

  //this code is responsible for sticky navbar
  const navFirstRow = useRef(null);
  const navSecondRow = useRef(null);

  useEffect(() => {
    const div1 = navFirstRow.current;
    const div2 = navSecondRow.current;

    function handleScroll() {
      const div2position = div2.getBoundingClientRect();

      if (div2position.top < 0) {
        div1.classList.add("stickOnTop");
      } else {
        div1.classList.remove("stickOnTop");
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  //here i program to toggle sidebar
  const [toggle, setToggle] = useState(false);
  const sidebarContainer = useRef(null);
  const [pointerEvent, setPointerEvent] = useState(false);

  useEffect(() => {
    if (toggle) { 

      // 'click' event instead of the 'mousedown' event may result in slightly different behavior, as the 'click' event is triggered after the mouse button is released, while the 'mousedown' event is triggered when the mouse button is initially pressed regardless of if it's released or not.

      document.addEventListener("mousedown", handleClickOutside);
      document.querySelector(".close").style.opacity = "1";
      document.querySelector(".close").style.transform = "scale(1)";
      sidebarContainer.current.style.boxShadow = "0 0 0 10000px rgba(0, 0, 0, 0.8)";
      document.body.style.overflow = "hidden";
      setPointerEvent(true);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.querySelector(".close").style.opacity = "0";
      document.querySelector(".close").style.transform = "scale(0)";
      sidebarContainer.current.style.boxShadow = '0 0 0 10000px transparent';
      document.body.style.overflow = 'initial'
      setPointerEvent(false)
    }
  }, [toggle]);

  function handleClickOutside(event) {
    if(toggle){
      if(sidebarContainer.current && !sidebarContainer.current?.contains(event.target)){
        setToggle(false)
      }
    }
  }


  return (
    <div className="nav-container">
      <div ref={navFirstRow} className="nav-first__row" 
      style={pointerEvent ? {pointerEvents: 'none'}: null}
      >
        <div className="logo-section">
          <div className="logo">
            <img src="/assets/media/amzn_logo.png" alt="404" />
            <p>.in</p>
          </div>
          <div className="location">
            <p>Hello</p>
            <p>
              <HiOutlineLocationMarker
                className="loc-icon"
              />
              Select your address
            </p>
          </div>
        </div>
        <div className="search-bar">
          <div className="choose-category">
            <p>
              All
              <MdArrowDropDown className="arrow" />
            </p>
          </div>
          <input
            type="text"
            placeholder="Search Amazon.in"
            className="input-search"
          />
          <div className="search-logo">
            <IoSearch style={{ fontSize: "2rem", color: "#131921" }} />
          </div>
        </div>
        <div className="cart-section">
          <div className="EN">
            <img src="assets/media/indian flag.png" alt="404" />
            <p>EN</p>
            <MdArrowDropDown className="arrow arrowToBeAdjust" />
          </div>
          <div className="sign-in">
            <p>Hello,sign in</p>
            <p>
              Account & Lists
              <MdArrowDropDown className="arrow" />
            </p>
          </div>
          <div className="orders">
            <p>Returns</p>
            <p>& Orders</p>
          </div>
          <div className="cart-item">
            <div className="cart-item_for_md">
              <p>
                Sign in <RiArrowDropRightLine style={{ fontSize: "1.1rem" }} />
              </p>
              <img src="assets/media/user.png" alt="404" />
            </div>
            <img src="assets/media/cart.png" alt="404" />
            <p className="cart cart2">Cart</p>
            <span className="cart cart-0">0</span>
          </div>
        </div>
      </div>
      <div ref={navSecondRow} className="nav-second__row" 
      style={pointerEvent ? {pointerEvents: 'none'}: null}
      >
        <ul>
          <TbMenu2 onClick={()=>setToggle(!toggle)} className="bars_for_md" />
          <li onClick={()=>setToggle(!toggle)} className="handburger-menu">
            <TbMenu2 className="bars" />
            All
          </li>
          <li>Amazon miniTv</li>
          <li>Sell</li>
          <li>Best Sellers</li>
          <li>Mobiles</li>
          <li>Today's Deals</li>
          <li>Customer Service</li>
          <li>Electronics</li>
          <li>
            Prime
            <MdArrowDropDown className="arrow arrowToBeAdjust" />
          </li>
          <li>New Releases</li>
          <li>Amazon Pay</li>
          <li>Home & Kitchen</li>
          <li>Fashion</li>
          <li>Computers</li>
        </ul>
        <div className="list_for_md_screen">
          <p>Category</p>
          <p>Wish List</p>
          <p>Deals</p>
          <p>Sells</p>
        </div>
        <p className="item_for_md_screen">
          <HiOutlineLocationMarker
            style={{ fontSize: "1.2rem", color: "#fff" }}
          />
          Select a location to see product availability
        </p>
      </div>
      <div
        ref={sidebarContainer}
        className={`sidebar-container ${toggle ? "active" : ""}`}>
        <VscChromeClose onClick={()=>setToggle(!toggle)} className="close" />
        <div className="sidebar">
          <div className="heading">
            <div>
              <FaUserCircle className="sidebar-Userlogo" />
            </div>
            <h1>Hello, sign up</h1>
          </div>
          <div className="section section-1">
            <ul>
              <li className="section-heading">Trending</li>
              <li>Best Sellers</li>
              <li>New Releases</li>
              <li>Movers and Shakers</li>
            </ul>
          </div>
          <div className="section section-2">
            <ul>
              <li className="section-heading">Digital Content And Devices</li>
              <li>Amazon miniTv-FREE entertainment</li>
              <li className="view-more_list">
                Echo & Alexa
                <MdArrowForwardIos />
              </li>
              <li className="view-more_list">
                Fire TV
                <MdArrowForwardIos />
              </li>
              <li className="view-more_list">
                Kindle E-Readers & eBooks
                <MdArrowForwardIos />
              </li>
              <li className="view-more_list">
                Audible Audiobooks
                <MdArrowForwardIos />
              </li>
              <li className="view-more_list">
                Amazon Prime Video
                <MdArrowForwardIos />
              </li>
              <li className="view-more_list">
                Amazon Prime Music
                <MdArrowForwardIos />
              </li>
            </ul>
          </div>
          <div className="section section-3">
            <ul>
              <li className="section-heading">Shop By Category</li>
              <li>Mobiles, Computers</li>
              <li>TV, Appliances, Electronics</li>
              <li>Men's Fashion</li>
              <li>Women's Fashion</li>
              <li>See All</li>
            </ul>
          </div>
          <div className="section section-4">
            <ul>
              <li className="section-heading">Programs & Features</li>
              <li>Gift Cards & Mobile Recharges</li>
              <li>Flight Tickets</li>
              <li>Clearance store</li>
            </ul>
          </div>
          <div className="section section-5">
            <ul>
              <li className="section-heading">Help & Settings</li>
              <li>Your Account</li>
              <li>Customer Service</li>
              <li>Sign in</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
