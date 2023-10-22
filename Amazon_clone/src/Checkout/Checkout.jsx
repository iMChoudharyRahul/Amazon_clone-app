import React, { useContext } from "react";
import "../style/Checkout.css";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./SubTotal.js";
import { useStateValue } from "../context/StateProvider";

function Checkout() {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Check Basket Value", basket);
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="checkout_ad"
          className="checkout__ad"
        />
        <div>
          <h3>Hello Rahul</h3>
          <h2 className="checkout__title">Shopping Cart</h2>
          {basket.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <div className="subtotal">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
