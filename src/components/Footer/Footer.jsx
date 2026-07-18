import "./Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaXTwitter,
  FaLocationDot,
  FaPhone,
  FaEnvelope,
  FaArrowUp,
} from "react-icons/fa6";

function Footer() {
  return (
    <footer className="footer">

      {/* Background Glow */}
      <div className="footer-glow footer-glow1"></div>
      <div className="footer-glow footer-glow2"></div>

      <div className="footer-container">

        {/* ================= ABOUT ================= */}

        <div className="footer-col">

          <h3>ABOUT US</h3>

          <p>
            Axiom TechGuru LLC delivers world-class Software
            Development, AI Solutions, Cloud Services,
            Research and IT Consulting for startups,
            enterprises and global businesses.
          </p>

          <h4>CIN : U72300MH2015PTC270316</h4>

        </div>

        {/* ================= RESOURCES ================= */}

        <div className="footer-col">

          <h3>RESOURCES</h3>

          <ul>

            <li>
              <a href="/">Home</a>
            </li>

            <li>
              <a href="/">Portfolio</a>
            </li>

            <li>
              <a href="/">Blog</a>
            </li>

            <li>
              <a href="/">Services</a>
            </li>

            <li>
              <a href="/">Products</a>
            </li>

          </ul>

        </div>

        {/* ================= COMPANY ================= */}

        <div className="footer-col">

          <h3>COMPANY</h3>

          <ul>

            <li>
              <a href="/">Career</a>
            </li>

            <li>
              <a href="/">Contact Us</a>
            </li>

            <li>
              <a href="/">FAQ</a>
            </li>

            <li>
              <a href="/">Privacy Policy</a>
            </li>

            <li>
              <a href="/">Terms & Conditions</a>
            </li>

          </ul>

        </div>

        {/* ================= CONTACT ================= */}

        <div className="footer-col contact">

          <h3>CONTACT</h3>

          <div className="office">

            <h4>USA Location</h4>

            <p>

              <FaLocationDot />

              512 Broadway NY, 10012,
              New York, USA

            </p>

            <p>

              <FaPhone />

              +1 (332) 241-0126

            </p>

            <p>

              <FaEnvelope />

              sushil@axiomtechguru.com

            </p>

          </div>

          <div className="office">

            <h4>Offshore Team (India)</h4>

            <p>

              <FaLocationDot />

              G-5 Anand Rajni Apartment,
              IT Park Road,
              Nagpur - 440022

            </p>

            <p>

              <FaPhone />

              +91-9890018126

            </p>

            <p>

              <FaEnvelope />

              admin@axiomtechguru.com

            </p>

          </div>

        </div>

      </div>

      {/* ================= FOOTER BOTTOM ================= */}

      <div className="footer-bottom">

        <div className="social-icons">

          <a href="https://x.com/AxiomTechGuru?s=20">
            <FaXTwitter />
          </a>

          <a href="https://www.instagram.com/axiom2003/">
            <FaInstagram />
          </a>

          <a href="https://www.facebook.com/axiomtech.guru.1/">
            <FaFacebookF />
          </a>

          <a href="https://www.youtube.com/c/SushilPudkeAxiom/videos">
            <FaYoutube />
          </a>

          <a href="https://www.linkedin.com/company/axiom-techguru/posts/?feedView=all">
            <FaLinkedinIn />
          </a>

        </div>

        <p>

          © 2026 All Rights Reserved |
          Axiom TechGuru LLC

        </p>

        <button
          className="top-btn"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
        >

          <FaArrowUp />

        </button>

      </div>

    </footer>
  );
}

export default Footer;