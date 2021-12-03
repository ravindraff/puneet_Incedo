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
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-dark`}>
      <div className="container-fluid">
        <a className="navbar-brand col-9" href="/">
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
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item  me-4">
              <Link to="/">Home</Link>
            </li>
            <li className="nav-item  me-3">
              <Link to="/Quiz">Quiz</Link>
            </li>
            <li className="nav-item  ms-2 me-3">
              <Link to="/Add">Add Questions</Link>
            </li>
          </ul>
          {/* <form className="d-flex">
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
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = { title: PropTypes.string };
Navbar.defaultProps = { title: "Set Title Here" };
