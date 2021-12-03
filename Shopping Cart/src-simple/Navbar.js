import React from "react";
import PropTypes from "prop-types";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
} from "react-router-dom";

export default function Navbar(props) {
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
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/Products">Products</Link>
            </li>
            <li className="nav-item ms-3">
              <Link to="/Cart">Cart</Link>
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
