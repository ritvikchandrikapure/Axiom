import "../../styles/Products.css";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

function ProductHero() {
  return (
    <section className="productsHero">

      <div className="productsOverlay"></div>

      <motion.div
        className="productsHeroCard"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .8 }}
      >

        <span className="heroTag">
          OUR DIGITAL PRODUCTS
        </span>

        <h1>
          Solutions That
          <span> Deliver Value</span>
        </h1>

        <p>
          Purpose-built digital products designed for
          performance, scalability and business growth.
          We build AI-powered software that helps companies
          scale faster.
        </p>

        {/* <button className="heroBtn">
          Explore Products
          <FaArrowRight />
        </button> */}

      </motion.div>

    </section>
  );
}

export default ProductHero;