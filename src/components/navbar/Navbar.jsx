import "./Navbar.scss";
import Wrapper from "../wrapper/Wrapper";
import Logo from "../../assets/logo.svg";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Link, animateScroll as scroll } from "react-scroll";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const handleLinkClick = () => {
    setShowNav(false);
  };

  return (
    <nav className="navbar">
      <Wrapper className="navbar__container">
        <a href="/" className="navbar__logo" onClick={handleLinkClick}>
          <img src={Logo} alt="logo" />
        </a>
        <div className={`navbar__flex ${showNav ? "show-nav" : ""}`}>
          <ul className="navbar__links">
            <li>
              <Link
                to="hero"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="menu"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onClick={handleLinkClick}
              >
                Menu
              </Link>
            </li>
          </ul>
          <button className="button-outline" onClick={handleLinkClick}>
            <Link
              to="reservation"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={handleLinkClick}
            >
              Make a Reservation
            </Link>
          </button>
        </div>
        <div
          className={`navbar__menu ${showNav ? "bg-color" : ""}`}
          onClick={toggleNav}
        >
          <FaBars />
        </div>
      </Wrapper>
    </nav>
  );
};

export default Navbar;
