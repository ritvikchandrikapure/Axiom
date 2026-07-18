import "../../styles/Portfolio.css";

import { motion } from "framer-motion";

import {

  FaFacebookF,

  FaInstagram,

  FaLinkedinIn,

  FaYoutube,

  FaEnvelope,

} from "react-icons/fa";

function PortfolioItem({ item, index }) {

  return (

    <motion.div

      className="portfolioItem"

      initial={{

        opacity:0,

        y:80,

      }}

      whileInView={{

        opacity:1,

        y:0,

      }}

      transition={{

        duration:.6,

        delay:index * .08,

      }}

      viewport={{

        once:true,

      }}

      whileHover={{

        y:-10,

      }}

    >

      {/* Image */}

      <div className="portfolioImage">

        <img

          src={item.image}

          alt={item.year}

        />

      </div>

      {/* Content */}

      <div className="portfolioContent">

        <h2>

          {item.year}

        </h2>

        <h3>

          {item.title}

        </h3>

        <p>

          {item.description}

        </p>

        <div className="portfolioIcons">

          <FaFacebookF />

          <FaInstagram />

          <FaLinkedinIn />

          <FaYoutube />

          <FaEnvelope />

        </div>

      </div>

    </motion.div>

  );

}

export default PortfolioItem;