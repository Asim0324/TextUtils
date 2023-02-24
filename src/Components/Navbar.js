import React from "react";
import PropTypes from "prop-types";
import {  NavLink } from "react-router-dom";

export default function Navbar(props) {
  const activePage = ({isActive})=>{
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-opacity-75 bg-${props.theme === true ? "warning" : "black"}`}>
      <div className="container-fluid">
       < NavLink
          className={`navbar-brand text-${props.theme === false ? "light" : "dark"} `} 
          // style={activePage}
          to="/"> 
          {props.title}
        </ NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
             < NavLink
                className={`nav-link active text-${props.theme === false ? "light" : "dark"} `}
                style={activePage}
                aria-current="page"
                to="/">
                {props.HomePage}
              </ NavLink>
            </li>
            <li className="nav-item">
             < NavLink
                className={`nav-link text-${props.theme === false ? "light" : "dark"} `}
                style={activePage}
                to="/about">
                About
              </ NavLink>
            </li>
            <li className="nav-item dropdown">
             < NavLink
                className={`nav-link dropdown-toggle text-${props.theme === false ? "light" : "dark"}`}
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Menu
              </ NavLink>
              <ul className={`dropdown-menu bg-${props.theme === true ? "light" : "dark"}`}>
                <li>
                 < NavLink
                    className={`dropdown-item text-${
                      props.theme === false ? "light" : "dark"
                    } `}
                    to="/"
                    id="menuItem"
                  >
                    Action
                  </ NavLink>
                </li>
                <li>
                 < NavLink
                    className={`dropdown-item text-${
                      props.theme === false ? "light" : "dark"
                    } `}
                    to="/"
                    id="menuItem"
                  >
                    Another action
                  </ NavLink>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                 < NavLink
                    className={`dropdown-item text-${
                      props.theme === false ? "light" : "dark"
                    } `}
                    to="/"
                    id="menuItem"
                  >
                    Something else here
                  </ NavLink>
                </li>
              </ul>
            </li>
            <li>
              <div className="form-check form-switch my-2 ms-3"><input onChange={props.toggleTheme} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/><label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label></div>
            </li>
          </ul>
          {/* <button type="button" className="btn btn-outline-success me-4">Green</button> */}
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 "
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  HomePage: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Ali",
  HomePage: "Home",
};
