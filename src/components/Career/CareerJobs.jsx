import "../../styles/Career.css";

import { motion } from "framer-motion";

import careerData from "./careerData";
import JobCard from "./JobCard";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 60,
    scale: 0.92,
  },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.65,
      ease: "easeOut",
    },
  },
};

function CareerJobs() {
  return (
    <section
      id="career-jobs"
      className="careerJobs"
    >
      <motion.div
        className="careerJobsHeading"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.7,
        }}
        viewport={{
          once: true,
        }}
      >
        <span>CAREER OPPORTUNITIES</span>

        <h2>Current Openings</h2>

        <p>
          Find your next challenge and opportunity
          to shine with us.
        </p>
      </motion.div>

      <motion.div
        className="careerJobsGrid"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
        }}
      >
        {careerData.map((job) => (
          <motion.div
            key={job.id}
            variants={item}
          >
           
              <JobCard job={job} />
          
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default CareerJobs;