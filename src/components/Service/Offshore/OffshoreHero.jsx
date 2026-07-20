import "./OffshoreHero.css";

import { motion } from "framer-motion";

function OffshoreHero() {

  return (
    

    <section className="offshoreHero">
       

      <div className="heroOverlay"></div>
       <div className="blob blob1"></div>

<div className="blob blob2"></div>

      <div className="heroContainer">

        <motion.div

          className="heroContent"

          initial={{ opacity: 0, y: 50 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true }}

          transition={{ duration: 0.8 }}

        >

          <h1>

            OFFSHORE

          </h1>

          <p>

            Reliable offshore delivery that ensures quality,
            scalability, and cost efficiency.

          </p>

        </motion.div>

      </div>

    </section>

  );

}

export default OffshoreHero;