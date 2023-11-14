import React from "react";
import Product from "../ProductList/Product";
import "./Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "react-bootstrap/Carousel";
import ProductAds from "../ProductsAds/ProductAds";
import {
  SliderFive,
  SliderFour,
  SliderOne,
  SliderThree,
  SliderTwo,
} from "../../assets/ExportImg";

function Home() {
  const SliderImages = [
    SliderOne,
    SliderTwo,
    SliderThree,
    SliderFour,
    SliderFive,
  ];
  return (
    <>
      <div className="home">
        <div className="carousels-section">
          <Carousel>
            {SliderImages.map((img, index) => (
              <Carousel.Item key={index}>
                <img className="d-block w-100" src={img} alt="sliderImage" />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="ads-section">
          <ProductAds />
        </div>
        <div className="product-section">
          <Product />
        </div>
      </div>
    </>
  );
}

export default Home;
