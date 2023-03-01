import React from "react";
import Logo from "../assets/images/Logo .svg";
import "../assets/styles/Nav.css";

const Nav = () => {
  return (
    <nav className="nav-wrapper">
      <img className="nav-logo" src={Logo} alt="littleLemonLogo" />
      <ul className="nav-link-wrapper">
        <li>
          <a>Home</a>
        </li>
        <li>
          <a>About</a>
        </li>
        <li>
          <a>Menu</a>
        </li>
        <li>
          <a>Reservations</a>
        </li>
        <li>
          <a>Order Online</a>
        </li>
        <li>
          <a>Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
