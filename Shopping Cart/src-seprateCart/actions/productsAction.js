export const FETCH_PRODUCTS = "FETCH_PRODUCTS";
export const ADD_CART = "ADD_CART";

export const fetchProducts = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/products/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: FETCH_PRODUCTS, payload: data });
      });
  };
};

export const addCart = (product) => {
  product.quantity = 1;
  delete product.id;

  return (dispatch) => {
    console.log(JSON.stringify(product));
    fetch("http://localhost:8000/cart/", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "ADD_CART", payload: { product } });
      });
  };
};
