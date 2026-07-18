import "../../styles/Career.css";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

function CareerHero() {

  const scrollToJobs = () => {

    const section = document.getElementById("career-jobs");

    if (section) {

      section.scrollIntoView({

        behavior:"smooth",

        block:"start",

      });

    }

  };

  return (

    <section className="careerHero">

      <div className="careerOverlay"></div>

      <div className="careerGlow glowOne"></div>

      <div className="careerGlow glowTwo"></div>

      <div className="careerGrid"></div>

      <motion.div

        className="careerHeroContent"

        initial={{

          opacity:0,

          y:60,

        }}

        animate={{

          opacity:1,

          y:0,

        }}

        transition={{

          duration:.8,

        }}

      >

        <span className="careerTag">

          🚀 WE ARE HIRING

        </span>

        <h1>

          Join Our Team of

          <span>

            {" "}Innovators

          </span>

        </h1>

        <p>

          Shape the future of technology with

          <strong> Axiom TechGuru.</strong>

          We're looking for passionate individuals

          who love innovation, collaboration and

          building world-class digital products.

        </p>

        <button

          className="careerHeroBtn"

          onClick={scrollToJobs}

        >

          Explore Open Positions

          <FaArrowRight />

        </button>

      </motion.div>

    </section>

  );

}

export default CareerHero;