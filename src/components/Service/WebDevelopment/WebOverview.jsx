import "./WebOverview.css";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { FaCheckCircle } from "react-icons/fa";

import webImage from "../../../assets/service/webDebvelopment/web-overview.jpg";

function WebOverview() {

  const features = [

    "Responsive Website Design",

    "SEO Friendly Development",

    "Secure & Scalable Solutions",

    "High Performance Optimization",

    "Cross Browser Compatibility",

    "Maintenance & Support"

  ];

  return (

    <section className="webOverview">

      <div className="overviewHeader">


        <h2>

          Deliver Customized Web Apps That
          Promote Your Business to Next Level

        </h2>

      </div>

      <div className="overviewContainer">

        {/* Left Image */}

        <motion.div

          className="overviewImage"

          initial={{ opacity:0, x:-60 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          transition={{ duration:.8 }}

        >

          <img

            src={webImage}

            alt="Web Development"

          />

        </motion.div>

        {/* Right Content */}

        <motion.div

          className="overviewContent"

          initial={{ opacity:0, x:60 }}

          whileInView={{ opacity:1, x:0 }}

          viewport={{ once:true }}

          transition={{ duration:.8 }}

        >


          <p>

            Website design and development are the foundation of
            strong online branding and sustainable digital growth.
            At Axiom, we create responsive, secure and scalable
            websites that improve user experience, increase
            conversions and strengthen your online presence.

          </p>

          <p>

            Our experienced designers and developers combine
            creativity with modern technologies to build websites
            that are fast, SEO-friendly and optimized for every
            device.

          </p>

          <div className="featureGrid">

            {

              features.map((item,index)=>(

                <div

                  className="featureItem"

                  key={index}

                >

                  <FaCheckCircle/>

                  <span>

                    {item}

                  </span>

                </div>

              ))

            }

          </div>

        <Link to="/contact">  <button className="consultBtn">

            Get Free Consultation

          </button></Link>

        </motion.div>

      </div>

    </section>

  );

}

export default WebOverview;