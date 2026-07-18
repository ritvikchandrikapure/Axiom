import "../../styles/Career.css";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CareerAbout() {

  return (

    <section className="careerAbout">

      <motion.div

        className="careerAboutCard"

        initial={{

          opacity:0,

          y:60,

        }}

        whileInView={{

          opacity:1,

          y:0,

        }}

        transition={{

          duration:.8,

        }}

        viewport={{

          once:true,

        }}

      >

        <span className="careerSectionTag">

          ABOUT AXIOM

        </span>

        <h2>

          Who We Are?

        </h2>

        <p>

          At <strong>Axiom TechGuru</strong>, we are more than just a software

          development company—we are innovators, creators and

          problem-solvers dedicated to helping businesses grow through

          cutting-edge technology.

        </p>

        <p>

          We specialize in Web Development, Mobile Applications,

          Artificial Intelligence, Enterprise Software, UI/UX Design,

          Cloud Solutions and Digital Transformation.

        </p>

        <p>

          Join a team where learning never stops, ideas are valued,

          and every project creates real impact for clients across

          the globe.

        </p>

       <Link to="/about"> <button className="careerAboutBtn">

          Learn More About Us

          <FaArrowRight />

        </button></Link>

      </motion.div>

    </section>

  );

}

export default CareerAbout;