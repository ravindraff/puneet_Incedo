import React, { useEffect } from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cart from "./components/cart";
import Products from "./components/products";
import Navbar from "./Navbar";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar title="Nike" />

        {/* A <Switch> looks through its children <Route>s and
                renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Products">
            <Products />
          </Route>
          <Route path="/Cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
function Home() {
  return (
    <div
      id="carouselExampleInterval"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="images/shoe1.jpg"
            className=" img-responsive d-block w-100"
            alt="test"
            style={{ width: "800px", height: "43rem" }}
          />
        </div>
        <div className="carousel-item" data-bs-interval="5000">
          <img
            src="images/shoe2.jpg"
            className="d-block w-100"
            alt="..."
            style={{ width: "800px", height: "43rem" }}
          />
        </div>
        <div className="carousel-item">
          <img
            src="images/shoe3.jpg"
            className="d-block w-100"
            alt="..."
            style={{ width: "800px", height: "43rem" }}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleInterval"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}
