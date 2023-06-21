import React from "react";
import '../style/Footer.css'
import { Link } from "react-router-dom";
import {TiArrowUnsorted} from 'react-icons/ti';
import {TbWorld} from 'react-icons/tb';

function Footer() {

  return (
    <div className="ex-con">
    <div className="footer_container">
      <div onClick={()=>window.scrollTo({top: 0})} id="back_to_top">Back to top</div>
      <div className="footer-wrapper">
      <section className="footer">
        <div>
          <ul>
            <li>Get To Know Us</li>
            <li>About Us</li>
            <li>Careers</li>
            <li>Press Releases</li>
            <li>Amazon Science</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Connect With Us</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Make Money With Us</li>
            <li>Sell on Amazon</li>
            <li>Sell under Amazon Accelerator</li>
            <li>Protect and Build Your Brand</li>
            <li>Amazon Global Selling</li>
            <li>Become an Affiliate</li>
            <li>Fulfilment by Amazon</li>
            <li>Advertise Your Products</li>
            <li>Amazon Pay on Merchants</li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Let Us Help You</li>
            <li>COVID-19 and Amazon</li>
            <li>Your Account</li>
            <li>Returns Centre</li>
            <li>100% Purchase Protection</li>
            <li>Amazon App Download</li>
            <li>Help</li>
          </ul>
        </div>
      </section>
      <section className="ethnicity">
        <div>
          <img src="assets/media/amzn_logo.png" alt="404" />
          <button>     
            <TbWorld style={{fontSize: '1.1rem'}} />   
            English
            <TiArrowUnsorted style={{fontSize: '1.1rem'}} />
          </button>
        </div>
        <ul>
          <li>Australia</li>
          <li>Brazil</li>
          <li>Canada</li>
          <li>China</li>
          <li>France</li>
          <li>Germany</li>
          <li>Italy</li>
          <li>Japan</li>
          <li>Mexico</li>
          <li>Netherlands</li>
          <li>Poland</li>
          <li>Singapore</li>
          <li>Spain</li>
          <li>United Arab Emirates</li>
          <li>United Kingdom</li>
          <li>United States</li>
        </ul>
      </section>
      </div>
    </div>
    <section className="product_and_services">
        <div>
          <ul>
            <li>
              <span>AbeBooks</span>
              <br />
              Books, art
              <br />& collectibles
            </li>
            <li>
              <span>Amazon Web Services</span>
              <br />
              Scalable Cloud
              <br />
              Computing Services
            </li>
            <li>
              <span>Audible</span>
              <br />
              Download
              <br />
              Audio Books
            </li>
            <li>
              <span>DPReview</span>
              <br />
              Digital
              <br />
              Photography
            </li>
            <li>
              <span>IMDb</span>
              <br />
              Movies, TV
              <br />& Celebrities
            </li>
            <li>
              <span>Shopbop</span>
              <br />
              Designer
              <br />
              Fashion Brands
            </li>
            <li>
              <span>Amazon Business</span>
              <br />
              Everything For
              <br />
              Your Business
            </li>
            <li>
              <span>Prime Now</span>
              <br />
              2-Hour Delivery
              <br />
              on Everyday Items
            </li>
            <li>
              <span>Amazon Prime Music</span>
              <br />
              100 million songs, ad-free
              <br />
              Over 15 million podcast episodes
            </li>
          </ul>
        </div>
        <div>
          <ul>
            <li>Conditions of Use & Sales</li>
            <li>Privacy Notice</li>
            <li>Interest-Based Ads</li>
          </ul>
          <span>&#169;1996-2023, Amazon.com, Inc. or it's affiliates</span>
        </div>
      </section>
    </div>
  );
}

export default Footer;
