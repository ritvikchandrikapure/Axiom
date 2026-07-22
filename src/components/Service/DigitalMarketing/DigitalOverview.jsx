import "./DigitalOverview.css";

import { motion } from "framer-motion";

import overviewImg from "../../../assets/service/DigitalMarketing/overview.png";

import {
  FaCheckCircle
} from "react-icons/fa";

function DigitalOverview() {

  return (

    <section className="digitalOverview">

      <div className="overviewContainer">

        <motion.div

          className="overviewImage"

          initial={{ opacity: 0, x: -60 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .7 }}

        >

          <img

            src={overviewImg}

            alt="Digital Marketing"

          />

        </motion.div>

        <motion.div

          className="overviewContent"

          initial={{ opacity: 0, x: 60 }}

          whileInView={{ opacity: 1, x: 0 }}

          viewport={{ once: true }}

          transition={{ duration: .7 }}

        >

    

          <h2>

            Power Your Brand With
            Precision Marketing

          </h2>

          <p>

            Unlock your business's full potential with
            Axiom TechGuru's ROI-driven digital marketing
            services. We help brands improve online
            visibility, generate quality leads, increase
            customer engagement and achieve measurable
            business growth through innovative marketing
            strategies.

          </p>

          <div className="overviewPoints">

            <div>

              <FaCheckCircle />

              SEO Optimization

            </div>

            <div>

              <FaCheckCircle />

              Google Ads

            </div>

            <div>

              <FaCheckCircle />

              Social Media Marketing

            </div>

            <div>

              <FaCheckCircle />

              Content Marketing

            </div>

          </div>


        </motion.div>

      </div>

    </section>

  );

}

export default DigitalOverview;