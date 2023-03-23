import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/Logo .svg";
import "../assets/styles/Footer.css";

const Footer = () => {
  return (
    <footer data-testid="footer" className="footer">
      <div className="footer-inner">
        <div className="footer-left">
          <img className="nav-logo" src={Logo} alt="littleLemonLogo" />
        </div>
        <div className="footer-right">
          <ul className="footer-link-wrapper">
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
          <ul className="footer-contact">
            <li>
              <Link className="nav-link">Address</Link>
            </li>
            <li>
              <Link className="nav-link">Phone Num</Link>
            </li>
            <li>
              <Link className="nav-link">Email</Link>
            </li>
          </ul>
          <ul className="footer-socials">
            <li>
              <Link className="nav-link">Facebook</Link>
            </li>
            <li>
              <Link className="nav-link">Insta</Link>
            </li>
            <li>
              <Link className="nav-link">Etc</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
