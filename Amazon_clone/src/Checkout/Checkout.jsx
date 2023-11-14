import React from "react";
import "./Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./SubTotal.jsx";
import { useStateValue } from "../context/StateProvider";
import { EmptyCartImg } from "../assets/ExportImg.js";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Check Basket Value cart page:", basket);
  return (
    <div className="checkout">
      <div className="checkout__top">
        <div className="checkout__info">
          <img
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt="checkout_ad"
            className="checkout__ad"
          />
          <h3>Hello Rahul</h3>
          <h2 className="checkout__title">
            {basket.length ? "Shopping Cart" : "Your Amazon Cart is empty."}
          </h2>
        </div>
        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
      <div className="checkout__bottom">
        <div className="product__details">
          {!basket.length ? (
            <img className="mx-auto" src={EmptyCartImg} alt="empty-cart-img" />
          ) : (
            <>
              {basket.map((item) => (
                <CheckoutProduct
                  id={item.id}
                  title={item.title}
                  image={item.image}
                  price={item.price}
                  category={item.category}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Checkout;
