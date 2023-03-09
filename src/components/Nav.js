import React from "react";
import { Link, Outlet } from "react-router-dom";
import Logo from "../assets/images/Logo .svg";
import "../assets/styles/Nav.css";

const Nav = () => {
  return (
    <>
      <nav className="nav-wrapper">
        <img className="nav-logo" src={Logo} alt="littleLemonLogo" />
        <ul className="nav-link-wrapper">
          <li>
            <Link to={""}>Homeee</Link>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Menu</a>
          </li>
          <li>
            <Link to={"/booking"}>Reservations</Link>
          </li>
          <li>
            <a>Order Online</a>
          </li>
          <li>
            <a>Login</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Nav;
