import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../context/StateProvider";
import { getBasketTotal } from "../components/reducer";

function SubTotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="SubTotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket.length} items): <strong>₹{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default SubTotal;
