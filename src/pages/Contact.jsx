import "./Contact.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import { motion } from "framer-motion";

import {
  FaCalendarAlt,
  FaRobot,
  FaCloud,
  FaCode,
  FaMobileAlt,
  FaMapMarkerAlt,
  FaHeadset,
  FaEnvelope,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";

function Contact() {

  const handleSchedule = () => {

    window.open(
      "https://calendly.com/sushil-softech",
      "_blank"
    );

  };

  return (

    <>

      <Navbar />

      {/* ================= HERO ================= */}

      <section className="contact-page">

        <div className="contact-gradient"></div>

        <div className="contact-grid"></div>

        <div className="contact-blur contact-blur1"></div>

        <div className="contact-blur contact-blur2"></div>

        <FaRobot className="contact-floating contact-f1" />

        <FaCloud className="contact-floating contact-f2" />

        <FaCode className="contact-floating contact-f3" />

        <FaMobileAlt className="contact-floating contact-f4" />

        <motion.div

          className="contact-card"

          initial={{ opacity: 0, y: 80 }}

          whileInView={{ opacity: 1, y: 0 }}

          transition={{ duration: 0.8 }}

        >

          <span className="contact-badge">

            🚀 LET'S BUILD TOGETHER

          </span>

          <h1 className="contact-title">

            Get In Touch

          </h1>

          <p className="contact-description">

            Ready to transform your business with AI,
            Software Development, Cloud Solutions and
            Digital Innovation?

            Schedule a free strategy call with our experts.

          </p>

          <div className="contact-btn-group">

            <button

              className="contact-primary-btn"

              onClick={handleSchedule}

            >

              <FaCalendarAlt />

              Schedule Free Consultation

            </button>

          </div>

        </motion.div>

      </section>

      {/* ================= CONTACT CHANNELS ================= */}

      <section className="contact-section">

        <div className="contact-heading">

          <h2>

            Our Contact Channels

          </h2>

          <div className="heading-line"></div>

        </div>

        <div className="contact-channel-grid">

          {/* Office */}

          <div className="channel-card">

            <div className="channel-icon">

              <FaMapMarkerAlt />

            </div>

            <h3>

              Our Offices

            </h3>

            <h4>

              USA Office

            </h4>

            <p>

              512 Broadway NY 10012,
              <br />
              New York 10012 USA.

            </p>

            <br />

            <h4>

              Offshore Team (India)

            </h4>

            <p>

              G-5 Anand Rajni Apartment,
              <br />
              IT Park Road,
              <br />
              Opp Datta Mandir,
              <br />
              Nagpur - 440022

            </p>

          </div>
          {/* Call Card */}

          <div className="channel-card">

            <div className="channel-icon">

              <FaHeadset />

            </div>

            <h3>

              Call or Chat

            </h3>

            <span className="card-subtitle">

              Direct Line & WhatsApp Support

            </span>

            <div className="phone-box">

              <strong>

                USA 🇺🇸

              </strong>

              <div className="phone-row">

                <span>

                  <FaPhoneAlt />

                  +1 (332) 241-0126

                </span>

                <a
                  href="https://wa.me/13322410126"
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaWhatsapp />

                </a>

              </div>

            </div>

            <div className="phone-box">

              <strong>

                India 🇮🇳

              </strong>

              <div className="phone-row">

                <span>

                  <FaPhoneAlt />

                  +91 98900 18126

                </span>

                <a
                  href="https://wa.me/919890018126"
                  target="_blank"
                  rel="noreferrer"
                >

                  <FaWhatsapp />

                </a>

              </div>

            </div>

          </div>

          {/* Email Card */}

          <div className="channel-card">

            <div className="channel-icon">

              <FaEnvelope />

            </div>

            <h3>

              Email Us

            </h3>

            <span className="card-subtitle">

              Reach out via email

            </span>

            <div className="email-box">

              <strong>🇺🇸 USA</strong>

              <a
                href="mailto:jeet@axiomtechguru.com"
                className="email-link"
              >
                jeet@axiomtechguru.com
              </a>

            </div>

            <div className="email-box">

              <strong>🇮🇳 India</strong>

              <a
                href="mailto:admin@axiomtechguru.com"
                className="email-link"
              >
                admin@axiomtechguru.com
              </a>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT FORM ================= */}

      <section className="message-section">

        <div className="message-heading">

          <h2>Send Us a Message</h2>

          <div className="heading-line"></div>

        </div>

        <div className="message-grid">

          {/* Form */}

          <div className="message-card">

            <h3>Contact Us Form</h3>

            <form>

              <input
                type="text"
                placeholder="Full Name"
              />

              <input
                type="email"
                placeholder="Email Address"
              />

              <input
                type="text"
                placeholder="Subject"
              />

              <textarea
                rows="6"
                placeholder="Write your message..."
              ></textarea>

              <button>

                Send Your Message

              </button>

            </form>

          </div>

          {/* Map */}

          <div className="map-card">

            <iframe

              title="Axiom"

              src="https://www.google.com/maps?q=Nagpur&output=embed" loading="lazy"

            ></iframe>

          </div>

        </div>

      </section>

      <Footer />

    </>

  );

}

export default Contact;