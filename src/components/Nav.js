import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/images/Logo .svg";
import "../assets/styles/Nav.css";
import Footer from "./Footer";

const Nav = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <img className="nav-logo" src={Logo} alt="littleLemonLogo" />
        <ul className="nav-link-wrapper">
          <li>
            <Link className="nav-link" to={""}>
              Home
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/menu"}>
              Menu
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/booking"}>
              Reservations
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/orderonline"}>
              Order Online
            </Link>
          </li>
          <li>
            <Link className="nav-link" to={"/login"}>
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Nav;
