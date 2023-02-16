import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import LanguageSwitch from "../../constants/LanguageSwitch";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const Menu = () => (
    <>
      <li>
        <a href="#destination">Desitnations</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#flights">Flights</a>
      </li>
      <li>
        <a href="#bookings">Bookings</a>
      </li>
      <li>
        <a href="#login">Login</a>
      </li>
    </>
  );
  return (
    <nav className="navbar-container section_padding ">
      <div className="navbar-container-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="navbar-container-links">
        <ul>
          <div className="navbar-container-links-lists">
            <Menu />
          </div>
        </ul>
        <div className="navbar-container-links-sign">
          <button type="button" className="sign_up_button">
            Sign Up
          </button>
        </div>
        <div className="navbar-container-language-switch">
          <LanguageSwitch />
        </div>
      </div>

      <div className="navbar-container-links-menu">
        {toggleMenu ? (
          <RiCloseLine
            color="#212832"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#212832"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="navbar-container-links-menu-container scale-up-center">
            <div className="navbar-container-links-lists-smallscreen">
              <p>
                <Menu />
              </p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
