import React from "react";
import Cart from "./cart";
import Products from "./products";

export default function Parent_product_cart() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-8">
          <Products />
        </div>
        <div className="col-4">
          <Cart />
        </div>
      </div>
    </div>
  );
}
