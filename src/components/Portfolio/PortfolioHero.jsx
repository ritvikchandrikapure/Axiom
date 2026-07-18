import "../../styles/Portfolio.css";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function PortfolioHero() {

  const scrollPortfolio = () => {

    const section = document.getElementById("portfolio-list");

    if (section) {

      section.scrollIntoView({

        behavior: "smooth",

        block: "start",

      });

    }

  };

  return (

    <section className="portfolioHero">

      {/* Background */}

      <div className="portfolioOverlay"></div>

      <div className="portfolioGlow glow1"></div>

      <div className="portfolioGlow glow2"></div>

      <div className="portfolioDots"></div>

      <motion.div

        className="portfolioHeroCard"

        initial={{

          opacity:0,

          y:70,

        }}

        animate={{

          opacity:1,

          y:0,

        }}

        transition={{

          duration:.8,

        }}

      >

        <span className="portfolioTag">

          OUR JOURNEY

        </span>

        <h1>

          PORTFOLIO

        </h1>

        <p>

          A curated collection of projects
          showcasing our expertise,
          innovation and commitment
          to excellence.

        </p>

        <button

          className="portfolioBtn"

          onClick={scrollPortfolio}

        >

          Explore Portfolio

          <FaArrowRight />

        </button>

      </motion.div>

    </section>

  );

}

export default PortfolioHero;