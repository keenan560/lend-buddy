import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header animate__animated animate__fadeInDown animate__slow shadow">
      <nav className="navbar navbar-expand-lg navbar-light p-3">
        <a className="navbar-brand font-weight-bold" href="/">
          lend<span id="dollar">$$</span>Buddy
        </a>
        <a
          id="join"
          className="nav-link mr-4 btn btn-success text-white"
          href="/join"
        >
          Join Buddy
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link mr-4" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/team">
                Team <span>Buddy</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link mr-4" href="/help">
                Help
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link join mr-4 btn btn-success text-white font-weight-bold"
                href="/join"
              >
                Join Buddy
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
