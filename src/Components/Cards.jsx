import React from 'react'
import '../style/Cards.css'
import { Link } from "react-router-dom";
import ProductSlider from './ProductSlider';
import ProductGallery from './ProductGallery';
import MoreCards from './MoreCards';


function Cards() {

  const title = 'Up to 50% off | Kitchen appliances, cookware & more'
  const KitchenAppliances = [
    'assets/media/product slider/item_1.jpg',
    'assets/media/product slider/item_2.jpg',
    'assets/media/product slider/item_3.jpg',
    'assets/media/product slider/item_4.jpg',
    'assets/media/product slider/item_5.jpg',
    'assets/media/product slider/item_6.jpg',
    'assets/media/product slider/item_7.jpg',
    'assets/media/product slider/item_8.jpg',
    'assets/media/product slider/item_9.jpg',
    'assets/media/product slider/item_2.jpg',
    'assets/media/product slider/item_3.jpg',
    'assets/media/product slider/item_4.jpg',
    'assets/media/product slider/item_5.jpg',
    'assets/media/product slider/item_6.jpg',
    'assets/media/product slider/item_7.jpg',
    'assets/media/product slider/item_8.jpg',
    'assets/media/product slider/item_9.jpg'
  ]
  const title_2 = 'Frequently repurchased in Grocery';
  const groceries = [
    'assets/media/product slider/food_item_1.jpg',
    'assets/media/product slider/food_item_2.jpg',
    'assets/media/product slider/food_item_3.jpg',
    'assets/media/product slider/food_item_4.jpg',
    'assets/media/product slider/food_item_5.jpg',
    'assets/media/product slider/food_item_6.jpg',
    'assets/media/product slider/food_item_7.jpg',
    'assets/media/product slider/food_item_8.jpg',
    'assets/media/product slider/food_item_9.jpg',
    'assets/media/product slider/food_item_10.jpg',
    'assets/media/product slider/food_item_11.jpg',
    'assets/media/product slider/food_item_12.jpg',
    'assets/media/product slider/food_item_1.jpg',
    'assets/media/product slider/food_item_2.jpg',
    'assets/media/product slider/food_item_3.jpg',
    'assets/media/product slider/food_item_4.jpg',
    'assets/media/product slider/food_item_5.jpg'
  ]

  return (
    <>
       <div id="card-layout">
        <div className="card card-1">
          <div className="wrapper">
            <h2>Automotive essentials | Up to 60% off</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/cleaning accessories.jpg" alt="404" />
                <p>cleaning accessories</p>
              </div> 
              <div className="product product-2">
                <img src="/assets/media/products/tyre.jpg" alt="404" />
                <p>Tyre & rim care</p>
              </div>
              <div className="product product-3">
                <img src="/assets/media/products/helmet.jpg" alt="404" />
                <p>Helmets</p>
              </div> 
              <div className="product product-4">
                <img src="/assets/media/products/vacuum cleaner.jpg" alt="404" />
                <p>Vacuume cleaner</p>
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-2">
          <div className="wrapper">
            <h2>Home appliances | Up to 55% off</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/ac.jpg" alt="404" />
                <p>Air Conditioners</p>
              </div> 
              <div className="product product-2">
                <img src="/assets/media/products/refrigerators.jpg" alt="404" />
                <p>Refrigerators</p>
              </div>
              <div className="product product-3">
                <img src="/assets/media/products/microwaves.jpg" alt="404" />
                <p>Microwaves</p>
              </div> 
              <div className="product product-4">
                <img src="/assets/media/products/washing machine.jpg" alt="404" />
                <p>Washing Machines</p>
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-3">
          <div className="wrapper">
            <h2>Up to 60% off | Styles for men</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/clothing.jpg" alt="404" />
                <p>Clothing</p>
              </div> 
              <div className="product product-2">
                <img src="/assets/media/products/footwear.jpg" alt="404" />
                <p>Footwear</p>
              </div>
              <div className="product product-3">
                <img src="/assets/media/products/watches.jpg" alt="404" />
                <p>Watches</p>
              </div> 
              <div className="product product-4">
                <img src="/assets/media/products/bags & luggage.jpg" alt="404" />
                <p>Bags & luggage</p>
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-4">
          <div className="wrapper">
            <h2>Sign in for your best experience</h2>
            <div className="product-box">
              <button>sign in securly</button> 
            </div>
          </div>
        </div>
        <div className="card card-5">
          <div className="wrapper">
            <h2>Shop & Pay | Earn rewards daily</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/claim rewards.jpg" alt="404" />
                <p>Claim your scratch cards</p>
              </div> 
              <div className="product product-2">
                <img src="/assets/media/products/redeem rewards.jpg" alt="404" />
                <p>Redeem your rewards</p>
              </div>
              <div className="product product-3">
                <img src="/assets/media/products/pay & win.jpg" alt="404" />
                <p>Pay & Win scratch cards</p>
              </div> 
              <div className="product product-4">
                <img src="/assets/media/products/shop & collect.jpg" alt="404" />
                <p>Collect rewards daily</p>
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-6">
          <div className="wrapper">
            <h2>Up to 70% off | Clearance store</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/laptop.jpg" alt="404" />
              </div>  
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-7">
          <div className="wrapper">
            <h2>Up to 60% off | Styles for women</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/women's clothing.jpg" alt="404" />
                <p>Women's clothing</p>
              </div> 
              <div className="product product-2">
                <img src="/assets/media/products/handbags.jpg" alt="404" />
                <p>Footwear+Handbags</p>
              </div>
              <div className="product product-3">
                <img src="/assets/media/products/women's watches.jpg" alt="404" />
                <p>Watches</p>
              </div> 
              <div className="product product-4">
                <img src="/assets/media/products/jewellery.jpg" alt="404" />
                <p>Jewellery</p>
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
        <div className="card card-8">
          <div className="wrapper">
            <h2>Up to 50% off | Monitor blood sugar at home</h2>
            <div className="product-box">
              <div className="product product-1">
                <img src="/assets/media/products/pharmacy.jpg" alt="404" />
              </div> 
            </div>
            <Link className="seeMore">See More</Link>
          </div>
        </div>
      <ProductSlider />
      <ProductGallery gallery={KitchenAppliances} title={title}/>
      <MoreCards />
      <ProductGallery gallery={groceries} title={title_2}/>
      </div>
    </>
  )
}

export default Cards
