export const FETCH_CART = "FETCH_CART";
export const REMOVE_ITEM = "REMOVE_ITEM";
export const DECREMENT_QUANTITY = "DECREMENT_QUANTITY";
export const INCREMENT_QUANTITY = "INCREMENT_QUANTITY";

export const decrementQuantity = (id, quantity) => {
  return (dispatch) => {
    fetch("http://localhost:8000/cart/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: --quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "DECREMENT_QUANTITY", payload: { id } });
      });
  };
};

export const incrementQuantity = (id, quantity) => {
  return (dispatch) => {
    fetch("http://localhost:8000/cart/" + id, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({ quantity: ++quantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "INCREMENT_QUANTITY", payload: { id } });
      });
  };
};

export const removeItem = (id) => {
  return (dispatch) => {
    fetch("http://localhost:8000/cart/" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: "REMOVE_ITEM", payload: { id } });
      });
  };
};

export const fetchCart = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/cart/")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        dispatch({ type: FETCH_CART, payload: data });
      });
  };
};
