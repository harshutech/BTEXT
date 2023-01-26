import PropTypes from "prop-types";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// i disabled this router becouse github not work proper with router 

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <img
            className="navbar-brand rounded-4"
            src="logo.png"
            width={120}
            height={50}
            alt={"BTEXT"}
          />
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
              <li className="nav-item">
                <Link
                  className={`nav-link text-${props.linkPages}`}
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link text-${props.linkPages}`} to="/about">
                  About
                </Link>
              </li>
            </ul>
            <form className="d-flex">
              <div className="form-check form-switch">
                <input
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                  onClick={props.toggleMode}
                />
                <label
                  className={`form-check-label text-${props.linkPages}`}
                  htmlFor="flexSwitchCheckDefault"
                >
                 {props.mode==="light" ? "Enable dark mode" : "Disable dark mode" } 
                </label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    </div>
  );
}

// used to chech that tiitle is string or not
// Navbar.propTypes = {
//     tittle : PropTypes.string.isRequired,

// }

// we can set default prop that will push default value when you dont pass anything
// Navbar.defaultProps = {
//     tittle:"set tittle here",
// }

export default Navbar;
