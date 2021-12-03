import React, { useEffect, useState } from "react";

export default function Cart() {
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/cart/")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setCartItems(data);
      });
  }, []);
  const handleDecrement = (cart_id) => {
    setCartItems((cartItems) => {
      let updatedItem = cartItems.map((item) => {
        if (cart_id === item.id) {
          let updatedItem = {
            ...item,
            quantity: parseInt(item.quantity) - (item.quantity > 1 ? 1 : 0),
          };

          fetch("http://localhost:8000/cart/" + item.id, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ quantity: updatedItem.quantity }),
          });

          return updatedItem;
        } else {
          return item;
        }
      });
      console.log(updatedItem);
      return updatedItem;
    });
  };
  const handleIncrement = (cart_id) => {
    setCartItems((cartItems) => {
      let updatedItem = cartItems.map((item) => {
        if (cart_id === item.id) {
          let updatedItem = {
            ...item,
            quantity: parseInt(item.quantity) + (item.quantity < 10 ? 1 : 0),
          };

          fetch("http://localhost:8000/cart/" + item.id, {
            method: "PATCH",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ quantity: updatedItem.quantity }),
          });

          return updatedItem;
        } else {
          return item;
        }
      });
      console.log(updatedItem);
      return updatedItem;
    });
  };
  const handleRemove = (cart_id) => {
    fetch("http://localhost:8000/cart/" + cart_id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        let remainingItems = cartItems.filter(
          (cartItem) => cartItem.id != cart_id
        );
        console.log("Remaining Items:", remainingItems);
        setCartItems(remainingItems);
      });
  };
  let listItems = cartItems.map((item, i) => {
    return (
      <li key={i}>
        <div
          className="card shadow p-3 mb-5 bg-body rounded"
          style={{ width: "18rem" }}
        >
          <img src={item.src} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.desc}</p>
            <div className="container-fluid">
              <div className="input-group col-12">
                <button
                  type="button"
                  className=" btn btn-primary input-group-text "
                  onClick={() => handleDecrement(item.id)}
                >
                  -
                </button>
                <div className="form-control text-center ">{item.quantity}</div>
                <button
                  type="button"
                  className="btn btn-primary input-group-text text-center "
                  onClick={() => handleIncrement(item.id)}
                >
                  +
                </button>
              </div>
              <div className="col-12">
                <button
                  className="btn btn-danger mt-2"
                  onClick={() => handleRemove(item.id)}
                >
                  Remove
                </button>

                <div className="container-fluid mt-2">
                  <p className="card-text">
                    Price:${item.price} <br />
                    Total:${item.price * item.quantity}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
    );
  });
  return (
    <div className="container shadow-sm p-3 mb-5 bg-body rounded">
      <h2>Shoes in your cart</h2>
      <ul className="list-unstyled">{listItems}</ul>
    </div>
  );
}
