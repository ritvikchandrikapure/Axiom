import "./HireCTA.css";

import { motion } from "framer-motion";

import { Link } from "react-router-dom";

function HireCTA() {

  return (

    <section className="hireCTA">

      <motion.div

        className="ctaCard"

        initial={{ opacity:0,y:50 }}

        whileInView={{ opacity:1,y:0 }}

        viewport={{ once:true }}

        transition={{ duration:.8 }}

      >

        <h2>

          Start Your Stress-Free Search with
          <br/>
          Axiom TechGuru Today!

        </h2>

        <p>

          Hire the Perfect Web Developer Now and
          accelerate your business with experienced,
          dedicated professionals.

        </p>

        <Link
          to="/contact"
          className="ctaBtn"
        >

          Contact Us

        </Link>

      </motion.div>

    </section>

  );

}

export default HireCTA;