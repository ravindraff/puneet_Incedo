import * as actions from "../actions/productsAction";

const initialState = {
  products: [],
};

const reducer = (state = initialState, action) => {
  // console.log(action)
  switch (action.type) {
    case actions.FETCH_PRODUCTS:
      return { products: action.payload };
    default:
      return state;
  }
};

export default reducer;
