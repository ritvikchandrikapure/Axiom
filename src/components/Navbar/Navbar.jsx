import "./Navbar.css";

import { useState } from "react";

import {
  FaBars,
  FaTimes,
  FaChevronDown,
} from "react-icons/fa";

import { Link } from "react-router-dom";

import logo from "../../assets/images/logoaxiom.jpg";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [serviceOpen, setServiceOpen] = useState(false);

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* Logo */}

        <div className="logo">

          <Link to="/">

            <img
              src={logo}
              alt="Axiom Logo"
            />

          </Link>

          <Link to="/">

            <h2>Axiom</h2>

          </Link>

        </div>

        {/* Navigation */}

        <ul className={menuOpen ? "nav-links active" : "nav-links"}>

          <li>

            <Link to="/">Home</Link>

          </li>

          <li>

            <Link to="/about">

              About Us

            </Link>

          </li>

          {/* SERVICES DROPDOWN */}

          <li

            className="dropdown"

            onMouseEnter={() => setServiceOpen(true)}

            onMouseLeave={() => setServiceOpen(false)}

          >

            <div className="dropdown-title">

              Services

              <FaChevronDown
                className={
                  serviceOpen
                    ? "arrow rotate"
                    : "arrow"
                }
              />

            </div>

            <div
              className={
                serviceOpen
                  ? "dropdown-menu show"
                  : "dropdown-menu"
              }
            >

              <Link to="/services/offshore">

                Offshore Development

              </Link>

              <Link to="/services/web-development">

                Web Design & Development

              </Link>



              <Link to="/services/digital-marketing">

                Digital Marketing

              </Link>

              <Link to="/services/hire-developer">

                Hire Developer

              </Link>

            </div>

          </li>

          <li>

            <Link to="/portfolio">

              Portfolio

            </Link>

          </li>

          <li>

            <Link to="/blog">

              Blog

            </Link>

          </li>

          <li>

            <Link to="/career">

              Career

            </Link>

          </li>

          <li>

            <Link to="/products">

              Products

            </Link>

          </li>

          <li>

            <Link to="/events">

              Events

            </Link>

          </li>

          <li>

            <Link to="/contact">

              Contact

            </Link>

          </li>

          <li>

            <button className="quote-btn">

              Ask AI

            </button>

          </li>

        </ul>

        {/* Mobile Menu */}

        <div

          className="menu-icon"

          onClick={() =>

            setMenuOpen(!menuOpen)

          }

        >

          {

            menuOpen

              ?

              <FaTimes/>

              :

              <FaBars/>

          }

        </div>

      </div>

    </nav>

  );

}

export default Navbar;