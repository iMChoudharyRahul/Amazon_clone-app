export const initialState = {
  basket: [],
};

export var getBasketTotal = function getBasketTotal(basket) {
  console.log("Get Basket Function Inside:", basket);
  return basket?.reduce(function (amount, item) {
    if (item.quantity) return item.price * item?.quantity * 83 + amount;

    return item.price * 83 + amount;
  }, 0);
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      let newBasket = [...state.basket];

      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product(id: ${action.id}) as its not in the basket!`
        );
      }

      return {
        ...state,
        basket: newBasket,
      };

    case "UPDATE_QUANTITY":
      // Update the quantity of a product in the basket
      const updatedBasket = state.basket.map((item) => {
        if (item.id === action.id) {
          item.quantity = action.quantity;
          console.log("Check Basket Values:=", item);
        }
        return item;
      });
      return {
        ...state,
        basket: updatedBasket,
      };

    default:
      return state;
  }
};

export default reducer;
