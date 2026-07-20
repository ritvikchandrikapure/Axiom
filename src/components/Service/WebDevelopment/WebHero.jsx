import "./WebHero.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

import {

FaCode,

FaLaptopCode,

FaRocket

} from "react-icons/fa";

function WebHero() {

  return (

  <section className="webHero">

  <div className="heroOverlay"></div>

  <div className="heroGrid"></div>

  <div className="heroContainer">

    <motion.div className="heroContent">

      <h1>
        WEB DESIGN
        <br />
        <span>& DEVELOPMENT</span>
      </h1>

      <p>
        We build stunning, high-performance websites that combine
        beautiful design, modern technology and exceptional user
        experience to help businesses grow faster in the digital world.
      </p>

      <div className="heroButtons">

        <Link to="/contact" className="primaryBtn">
          Start Your Project
        </Link>

        <Link to="/portfolio" className="secondaryBtn">
          View Portfolio
        </Link>

      </div>

    </motion.div>

  </div>

</section>

  );

}

export default WebHero;