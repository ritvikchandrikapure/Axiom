import "./DigitalHero.css";
import { motion } from "framer-motion";

function DigitalHero() {
  return (
    <section className="digitalHero">

      <div className="heroOverlay"></div>

      <motion.div
        className="heroContent"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>DIGITAL MARKETING</h1>

        <p>
          Driving measurable growth through strategic,
          performance-focused digital marketing.
        </p>

      </motion.div>

    </section>
  );
}

export default DigitalHero;