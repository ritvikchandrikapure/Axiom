import "./Process.css";

import { motion } from "framer-motion";

import {
  FaSearch,
  FaClipboardList,
  FaPalette,
  FaCode,
  FaBug,
  FaRocket,
  FaHeadset,
} from "react-icons/fa";

const process = [
  {
    id: 1,
    icon: <FaSearch />,
    title: "Discovery",
    desc: "We understand your business goals, challenges and project requirements.",
  },
  {
    id: 2,
    icon: <FaClipboardList />,
    title: "Planning",
    desc: "We prepare roadmap, timeline, architecture and technology stack.",
  },
  {
    id: 3,
    icon: <FaPalette />,
    title: "UI / UX Design",
    desc: "Creative user experience with interactive wireframes and prototypes.",
  },
  {
    id: 4,
    icon: <FaCode />,
    title: "Development",
    desc: "Frontend, Backend, APIs and database development using modern technologies.",
  },
  {
    id: 5,
    icon: <FaBug />,
    title: "Testing",
    desc: "Quality assurance, security testing and performance optimization.",
  },
  {
    id: 6,
    icon: <FaRocket />,
    title: "Deployment",
    desc: "Deploy applications securely on cloud infrastructure with monitoring.",
  },
  {
    id: 7,
    icon: <FaHeadset />,
    title: "Support",
    desc: "Continuous maintenance, updates and technical support after delivery.",
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

function Process() {
  return (
    <section className="process">

      <motion.div
        className="process-heading"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <span>OUR PROCESS</span>

        <h2>
          Our Development
          <span> Process</span>
        </h2>

        <p>
          From idea validation to deployment and long-term support,
          we follow a structured process to deliver scalable,
          secure and high-performance digital solutions.
        </p>

      </motion.div>

      <motion.div
        className="timeline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {process.map((step) => (

          <motion.div
            className="timeline-card"
            key={step.id}
            variants={item}
          >

            <div className="timeline-number">

              {step.id}
              

            </div>

            <div className="timeline-icon">

              {step.icon}

            </div>

            <h3>

              {step.title}

            </h3>

            <p>

              {step.desc}

            </p>

          </motion.div>

        ))}

      </motion.div>
      

    </section>

    
  );
}

export default Process;