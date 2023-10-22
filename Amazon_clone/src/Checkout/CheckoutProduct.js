import React, { useContext } from "react";
import "../style/CheckoutProduct.css";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  console.log("Basket Value inside checkout:", basket);
  console.log("Basket Value inside rating:", rating);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info" key={id}>
          <p className="checkoutProduct__title">{title}</p>

          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(Math.round(rating.rate))
              .fill()
              .map((_, i) => (
                <p>⭐</p>
              ))}
            {rating.rate % 1 !== 0 && <p className="half-star">⭐</p>}
          </div>
          <button onClick={removeFromBasket}>Remove from Basket</button>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
