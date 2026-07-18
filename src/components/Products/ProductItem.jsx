import "../../styles/Products.css";
import { motion } from "framer-motion";

function ProductItem({ product }) {

  return (

    <motion.div

      className="productItem"

      initial={{ opacity:0, y:40 }}

      whileInView={{ opacity:1, y:0 }}

      transition={{ duration:.5 }}

      viewport={{ once:true }}

    >

      {/* Left Image */}

      <div className="productImage">

        <img

          src={product.image}

          alt={product.title}

        />

      </div>

      {/* Right Content */}

      <div className="productInfo">

        <span className="productDate">

          {product.date}

        </span>

        <div className="productBadge">

          {product.category}

        </div>

        <h3>

          {/* {product.title} */}

        </h3>

        <p>

          {product.description}

        </p>

      </div>

    </motion.div>

  );

}

export default ProductItem;