import React from "react";

// Import Route Links
import { Link, NavLink } from "react-router-dom";

// Import Custom Css File
import "./Header.css";

// Import Logo
import logo from "../../Assets/logo.jpg";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-xl shadow-sm">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" />
        </Link>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="bi bi-list"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/">
                Overview
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/profile">
                Profile
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/chart">
                Chart
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/investors">
                Investors Presentation
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/business">
                Business Segments
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/analyst">
                Analyst Coverage
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/mergers">
                Mergers & Acquisitions
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/statements">
                Financial Statements
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/ratios">
                Financial Ratios
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/corporate">
                Corporate Action
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link ms-2" to="/subscriptions">
                Subscriptions Center
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
