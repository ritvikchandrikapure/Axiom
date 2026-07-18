import "../../styles/Career.css";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

function CareerCTA() {

  return (

    <section className="careerCTA">

      <motion.div

        className="careerCTACard"

        initial={{

          opacity:0,

          y:60,

        }}

        whileInView={{

          opacity:1,

          y:0,

        }}

        transition={{

          duration:.7,

        }}

        viewport={{

          once:true,

        }}

      >

        <span>

          JOIN OUR TEAM

        </span>

        <h2>

          Don't See A Role

          <br />

          That Suits You?

        </h2>

        <p>

          We are always looking for talented,

          creative and passionate people.

          If you believe you can make an impact,

          we'd love to hear from you.

        </p>

       <Link to="/contact"> <button>

          Get In Touch

          <FaArrowRight />

        </button></Link>

      </motion.div>

    </section>

  );

}

export default CareerCTA;