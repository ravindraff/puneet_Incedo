import React from "react";
import CartIcon from "./svg/shopping-cart.svg";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import * as actions from "./actions/cartAction";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

const cartState = (state) => {
  console.log(state);
  return state.cartReducer.cartItems;
};
export default function Navbar(props) {
  const cartItems = useSelector(cartState);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(actions.fetchCart());
  }, []);
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <a
          className="navbar-brand col-10"
          href="/"
          style={{
            color: "black",
            fontSize: "1.5rem",
            fontStyle: "italic",
            fontWeight: "bold",
            textDecorationLine: "underline",
          }}
        >
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
            <li className="nav-item ms-3">
              <Link to="/" className="link-primary">
                Home
              </Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/Parent" className="link-dark">
                Products
              </Link>
            </li>
            <li className="nav-item ms-3">
              <div className="position-relative">
                <Link to="/Cart">
                  <img src={CartIcon} alt="" width="20" />
                  <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
                    {cartItems.length}
                  </span>
                </Link>
              </div>
            </li>
          </ul>
          {/*  <form className="d-flex">
            <div
              className={`form-check form-switch text-${
                props.mode === "light" ? "dark" : "light"
              } `}
            >
              <input
                className="form-check-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                onClick={props.toggleMode}
              />
              <label
                className="form-check-label mx-3"
                htmlFor="flexSwitchCheckDefault"
              >
                {props.mode} mode
              </label>
            </div>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "Set Title Here" };
