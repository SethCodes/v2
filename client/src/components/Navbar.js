import React from "react";
import '../css/Navbar.css';
import {Link} from 'react-router-dom';
import logo from '../images/RBLogoSlim.png';



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-transparent navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <img src={logo} alt=""/>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                about me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#about">
                experience
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#portfolio">
                projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                contact
              </a>
            </li>
            <li className="nav-item">
            <a className="btn btn-outline nav-link resume">resume</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
