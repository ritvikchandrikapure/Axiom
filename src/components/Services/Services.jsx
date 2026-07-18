import { useState } from "react";

import "./Services.css";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { Link } from "react-router-dom";

import {
  FaArrowRight,
  FaLaptopCode,
  FaMobileAlt,
  FaRobot,
  FaCloud,
  FaBullhorn,
  FaDatabase,
} from "react-icons/fa";

import software from "../../assets/services/software.jpg";
import innovation from "../../assets/services/innovation.jpg";
import website from "../../assets/services/website.jpg";
import mobile from "../../assets/services/mobile.jpg";
import seo from "../../assets/services/seo.jpg";
import erp from "../../assets/services/erp.jpg";

const services = [
  {
    id: 1,
    title: "Trusted Software Development Partner",
    description:
      "Build scalable, secure and enterprise-grade software tailored to your business needs using modern technologies.",
    image: software,
    icon: <FaLaptopCode />,
  },
  {
    id: 2,
    title: "AI & Research Innovation",
    description:
      "Leverage Artificial Intelligence, Machine Learning and innovative digital strategies to accelerate business growth.",
    image: innovation,
    icon: <FaRobot />,
  },
  {
    id: 3,
    title: "Website & CMS Development",
    description:
      "Modern responsive websites, CMS platforms and custom portals optimized for performance and SEO.",
    image: website,
    icon: <FaLaptopCode />,
  },
  {
    id: 4,
    title: "Mobile App Development",
    description:
      "Native Android, iOS and cross-platform mobile applications with beautiful UI and smooth performance.",
    image: mobile,
    icon: <FaMobileAlt />,
  },
  {
    id: 5,
    title: "Digital Marketing & SEO",
    description:
      "Increase your online visibility through AI-powered SEO, branding, PPC and digital marketing solutions.",
    image: seo,
    icon: <FaBullhorn />,
  },
  {
    id: 6,
    title: "Cloud, ERP & Data Solutions",
    description:
      "Cloud infrastructure, ERP systems, databases and enterprise solutions designed for scalability.",
    image: erp,
    icon: <FaCloud />,
  },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.9,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function Services() {

  const [activeCard, setActiveCard] = useState(null);

  return (
    <section className="services">

      <div className="blob blob1"></div>
      <div className="blob blob2"></div>

      <motion.div
        className="services-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >

        <h2>
          Enhance Your Business With
          <span> Smart Digital Solutions</span>
        </h2>

        <p>
          We help startups, enterprises and organizations build
          innovative digital products using AI, Cloud, Web,
          Mobile and Enterprise Technologies.
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((service) => (
          <motion.div
            key={service.id}
            variants={item}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.18}
              glareColor="#ffffff"
              glarePosition="all"
              tiltMaxAngleX={8}
              tiltMaxAngleY={8}
              scale={1.02}
              transitionSpeed={2000}
            >
<div
  className={`service-card ${
    activeCard === service.id ? "active" : ""
  }`}
  onClick={() =>
    setActiveCard(
      activeCard === service.id ? null : service.id
    )
  }
>
                {/* FRONT */}

                <div className="card-front">

                  <div className="service-image">

                    <img
                      src={service.image}
                      alt={service.title}
                    />

                  </div>

                  <div className="front-overlay">

                    <div className="service-icon">

                      {service.icon}

                    </div>

                    <h3>{service.title}</h3>

                  </div>

                </div>

                {/* BACK */}

                <div className="card-back">

                  <div className="back-icon">

                    {service.icon}

                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.description}</p>

                  <button>

                    Read More

                    <FaArrowRight />

                  </button>

                </div>

              </div>
            </Tilt>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="services-bottom"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <div className="bottom-card">

          <div className="bottom-left">

            <FaDatabase className="bottom-icon" />

            <div>

              <h3>Need a Custom Software Solution?</h3>

              <p>
                Our experienced developers are ready to transform
                your ideas into enterprise-grade digital products.
              </p>

            </div>

          </div>

        <Link to="/contact">  <button>

            Let's Talk

          </button></Link>

        </div>
      </motion.div>

    </section>
  );
}

export default Services;