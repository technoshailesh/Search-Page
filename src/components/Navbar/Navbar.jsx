import React from "react";
import { Link } from "react-router-dom";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar" id="navbar">
      <div className="container navbar-content flex">
        <div className="brand-and-toggler flex flex-sb">
          <Link to="/" className="navbar-brand flex">
            <div className="logo" style={{ border: "10px solid white" ,}}>
             
            </div>
            <span>MedicalDarpan</span>
          </Link>
        </div>

        <ul className="navbar-nav">
          <li className="nav-item">
            <Link to="book" className="nav-link  text-white fs-22 fw-6 ls-1">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link  text-white fs-22 fw-6 ls-1">
              Products
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link  text-white fs-22 fw-6 ls-1">
              Distributors
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link  text-white fs-22 fw-6 ls-1">
              Manufactureres
            </Link>
          </li>
          <li className="nav-item">
            <Link to="" className="nav-link  text-white fs-22 fw-6 ls-1">
              about
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link to="" className="nav-link  text-white fs-22 fw-6 ls-1">
              Blog
            </Link>
          </li>{" "}
          <li className="nav-item">
            <Link
              to=""
              className="nav-link  text-white fs-22 fw-6 ls-1 login"
            >
              login
            </Link>
          </li>
          <FontAwesomeIcon className="fa-lg fa-thin text-white icon" icon={faUser}></FontAwesomeIcon>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
