import React from "react";
import ProductAdsData from "../../constants/ProductAds";
import "./ProductAds.css";

const ProductAds = () => {
  return (
    <>
      <section className="ads_container">
        <div className="ads-block">
          {ProductAdsData.map((item, index) => (
            <div className="ads-box" key={index}>
              <h2 className="heading">{item.title}</h2>
              <p className="image-box">
                <img
                  src={item.image}
                  alt={item.category}
                  className="ads-image"
                />
              </p>
              <p className="offer-link">Shop Now</p>
            </div>
          ))}
        </div>
        <div className="Signin-box">
          <h2>Sign in for your best experience</h2>
          <button>Sign in Securely</button>
        </div>
      </section>
    </>
  );
};

export default ProductAds;
