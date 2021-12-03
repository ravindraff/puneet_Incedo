import * as actions from "../actions/cartAction";
import * as action from "../actions/productsAction";

const initialState = {
  cartItems: [],
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case actions.DECREMENT_QUANTITY:
      let decrementedItem = state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          let updatedItems = {
            ...item,
            quantity: parseInt(item.quantity) - (item.quantity < 10 ? 1 : 0),
          };
          return updatedItems;
        } else {
          return item;
        }
      });
      console.log(decrementedItem);
      return { cartItems: decrementedItem };

    case actions.INCREMENT_QUANTITY:
      let incrementedItem = state.cartItems.map((item) => {
        if (action.payload.id === item.id) {
          let updatedItems = {
            ...item,
            quantity: parseInt(item.quantity) + (item.quantity < 10 ? 1 : 0),
          };
          return updatedItems;
        } else {
          return item;
        }
      });
      console.log(incrementedItem);
      return { cartItems: incrementedItem };

    case actions.REMOVE_ITEM:
      let remainingItems = state.cartItems.filter(
        (cartItem) => cartItem.id != action.payload.id
      );
      console.log("Remaining Items:", remainingItems);
      return { cartItems: remainingItems };

    case action.ADD_CART:
      return { cartItems: action.payload };

    case actions.FETCH_CART:
      return { cartItems: action.payload };
    default:
      return state;
  }
};

export default reducer;
