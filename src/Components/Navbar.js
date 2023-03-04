import React from "react";
import PropTypes from "prop-types";
import { Link, NavLink } from "react-router-dom";

export default function Navbar(props) {
  const activePage = ({isActive})=>{
    return {
      fontWeight: isActive ? 'bold' : 'normal',
      textDecoration: isActive ? 'none' : 'underline',
      backgroundColor: isActive ? 'transparent' : 'transparent'
    }
  }

  return (
    <nav className={`navbar navbar-expand-lg bg-opacity-75 bg-${props.theme === true ? "warning" : "black"}`}>
      <div className="container-fluid">
       <NavLink
          className={`navbar-brand text-${props.theme === false ? "light" : "dark"} `} 
          to="/"> 
          {props.title}
        </NavLink>
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
              <NavLink
                className={`nav-link text-${props.theme === false ? "light" : "dark"} `}
                style={activePage}
                aria-current="page"
                to="/">
                {props.HomePage}
              </NavLink>
            </li>
            <li className="nav-item">
             <NavLink
                className={`nav-link text-${props.theme === false ? "light" : "dark"} `}
                style={activePage}
                to="/about">
                About
              </NavLink>
            </li>
            <li className="nav-item dropdown">
             <NavLink
                className={`nav-link dropdown-toggle text-${props.theme === false ? "light" : "dark"}`}
                to="/"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false">
                Menu
              </NavLink>
              <ul className={`dropdown-menu bg-${props.theme === true ? "warning" : "black"}`}>
                <li>
                 <Link
                    className={`dropdown-item text-${props.theme === false ? "light" : "dark"} `}
                    to="/a"
                    id="menuItem">
                    Action
                  </Link>
                </li>
                <li>
                 <Link
                    className={`dropdown-item text-${props.theme === false ? "light" : "dark"} `}
                    to="/a"
                    id="menuItem">
                    Another action
                  </Link>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                 <Link
                    className={`dropdown-item text-${props.theme === false ? "light" : "dark"} `}
                    to="/a"
                    id="menuItem">
                    Something else here
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div disabled className="form-check form-switch my-2 ms-3"><input style={{cursor: 'pointer'}} onClick={()=>{props.toggleTheme(null)}} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/><label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label></div>
            </li>
            <li>
              <div className="d-flex"><button hidden onClick={()=>{props.toggleTheme('primary')}} className="bg-primary rounded mx-2 mt-1" style={{height: '28px', width: '29px', cursor: 'pointer'}}></button></div>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
            <button className={`btn btn-${props.theme === false ? "outline-" : ""}primary`} type="submit">Search</button>
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
