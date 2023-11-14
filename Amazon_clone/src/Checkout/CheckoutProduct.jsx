import React, { useRef } from "react";
import "./Checkout.css";
import { useStateValue } from "../context/StateProvider";

function CheckoutProduct({ id, title, image, price, category }) {
  const [{ basket }, dispatch] = useStateValue();
  const quantityRef = useRef(1); // Use a ref to track the quantity input

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  const handleUpdateQuantity = () => {
    const newQuantity = parseInt(quantityRef.current.value);

    if (newQuantity > 0) {
      // Dispatch an action to update the quantity in the basket
      dispatch({
        type: "UPDATE_QUANTITY",
        id: id,
        quantity: newQuantity,
      });
    }
  };

  return (
    <>
      <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image" />
        <div className="checkoutProduct__info" key={id}>
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>₹</small>
            <strong>{price * 83}</strong>
          </p>
          <p className="in_stock">In stock</p>
          <p className="sold__by">
            Sold by <span className="text-link">{"InfiniaRetail"}</span>
          </p>
          <p className="text-xs font-medium text-lightGray">
            Gift options not available.{" "}
            <span className="text-link">Learn more</span>
          </p>
          <p className="style__name">
            Style Name: <span className="category">{category}</span>
          </p>
          <div className="update__quantity">
            <input
              type="number"
              placeholder="Qty:"
              min={1}
              defaultValue={1}
              id={id}
              className="qty__input"
              ref={quantityRef}
            />
            <button
              id={id}
              onClick={(e) => handleUpdateQuantity(e)}
              className="update__btn"
            >
              Update
            </button>
            <button onClick={removeFromBasket}>Remove from Basket</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CheckoutProduct;
