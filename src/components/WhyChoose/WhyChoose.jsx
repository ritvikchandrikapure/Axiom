import "./WhyChoose.css";

import { motion } from "framer-motion";

import {
  FaCheckCircle,
  FaUsersCog,
  FaRocket,
  FaLightbulb,
  FaShieldAlt,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaCheckCircle />,
    title: "Quality Assurance",
    description:
      "Rigorous testing and quality standards ensure secure, reliable and bug-free software solutions.",
  },

  {
    id: 2,
    icon: <FaUsersCog />,
    title: "Skilled IT Professionals",
    description:
      "Our experienced developers, designers and engineers deliver scalable enterprise solutions.",
  },

  {
    id: 3,
    icon: <FaRocket />,
    title: "Rapid Deployment",
    description:
      "Fast project execution using Agile methodology for quicker business growth and market delivery.",
  },

  {
    id: 4,
    icon: <FaLightbulb />,
    title: "Agile Transformation",
    description:
      "We help organizations embrace innovation with flexible and modern development practices.",
  },

  {
    id: 5,
    icon: <FaShieldAlt />,
    title: "Enterprise Security",
    description:
      "Security-first architecture with cloud protection, encrypted systems and compliance standards.",
  },

  {
    id: 6,
    icon: <FaHeadset />,
    title: "24×7 Dedicated Support",
    description:
      "Our support team stays available throughout your product journey with continuous improvements.",
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
  },

  show: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
    },
  },
};

function WhyChoose() {
  return (
    <section className="whychoose">

      <motion.div
        className="why-header"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >

        <h2>
          Why Partner With
          <span> Axiom Techguru LLC</span>
        </h2>

        <p>
          Discover why startups, enterprises and organizations trust
          Axiom Techguru LLC to build secure, scalable and future-ready
          software solutions.
        </p>
      </motion.div>

      <motion.div
        className="why-grid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature) => (
          <motion.div
            className="why-card"
            key={feature.id}
            variants={item}
          >
            <div className="why-icon">

              {feature.icon}

            </div>

            <h3>

              {feature.title}

            </h3>

            <p>

              {feature.description}

            </p>

          </motion.div>
        ))}
      </motion.div>

    </section>
  );
}

export default WhyChoose;