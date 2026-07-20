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

  const closeMenu = () => {

    setMenuOpen(false);

    setServiceOpen(false);

  };

  return (

    <nav className="navbar">

      <div className="navbar-container">

        {/* ================= Logo ================= */}

        <div className="logo">

          <Link
            to="/"
            onClick={closeMenu}
          >

            <img
              src={logo}
              alt="Axiom Logo"
            />

          </Link>

          <Link
            to="/"
            onClick={closeMenu}
          >

            <h2>Axiom</h2>

          </Link>

        </div>

        {/* ================= Navigation ================= */}

        <ul
          className={
            menuOpen
              ? "nav-links active"
              : "nav-links"
          }
        >

          <li>

            <Link
              to="/"
              onClick={closeMenu}
            >

              Home

            </Link>

          </li>

          <li>

            <Link
              to="/about"
              onClick={closeMenu}
            >

              About Us

            </Link>

          </li>

          {/* ================= SERVICES ================= */}

          <li

            className="dropdown"

            onMouseEnter={() => {

              if (window.innerWidth > 992) {

                setServiceOpen(true);

              }

            }}

            onMouseLeave={() => {

              if (window.innerWidth > 992) {

                setServiceOpen(false);

              }

            }}

          >

            <div

              className="dropdown-title"

              onClick={() => {

                if (window.innerWidth <= 992) {

                  setServiceOpen(!serviceOpen);

                }

              }}

            >

              <span>

                Services

              </span>

              <FaChevronDown

                className={

                  serviceOpen

                    ?

                    "arrow rotate"

                    :

                    "arrow"

                }

              />

            </div>

            <div

              className={

                serviceOpen

                  ?

                  "dropdown-menu show"

                  :

                  "dropdown-menu"

              }

            >

              <Link

                to="/services/offshore"

                onClick={closeMenu}

              >

                Offshore Development

              </Link>

              <Link

                to="/services/web-development"

                onClick={closeMenu}

              >

                Web Design & Development

              </Link>

             
              <Link

                to="/services/digital-marketing"

                onClick={closeMenu}

              >

                Digital Marketing

              </Link>

            

             
              <Link

                to="/services/hire-developer"

                onClick={closeMenu}

              >

                Hire Developer

              </Link>

            </div>

          </li>

          <li>

            <Link
              to="/portfolio"
              onClick={closeMenu}
            >

              Portfolio

            </Link>

          </li>

          <li>

            <Link
              to="/blog"
              onClick={closeMenu}
            >

              Blog

            </Link>

          </li>

          <li>

            <Link
              to="/career"
              onClick={closeMenu}
            >

              Career

            </Link>

          </li>

          <li>

            <Link
              to="/products"
              onClick={closeMenu}
            >

              Products

            </Link>

          </li>

          <li>

            <Link
              to="/events"
              onClick={closeMenu}
            >

              Events

            </Link>

          </li>

          <li>

            <Link
              to="/contact"
              onClick={closeMenu}
            >

              Contact

            </Link>

          </li>

          <li>

            <button className="quote-btn">

              Ask AI

            </button>

          </li>

        </ul>

        {/* ================= Mobile Menu ================= */}

        <div

          className="menu-icon"

          onClick={() => {

            setMenuOpen(!menuOpen);

          }}

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