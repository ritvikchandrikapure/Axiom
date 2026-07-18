import "../../styles/Career.css";

import { motion } from "framer-motion";

function JobCard({ job }) {

  return (

    <motion.div

      className="jobCard"

      whileHover={{

        y: -12,

      }}

      transition={{

        duration: .35,

      }}

    >

      <img

        src={job.image}

        alt={job.title}

      />

      <div className="jobOverlay">

        <div className="jobInfo">

          <h3>

            {job.title}

          </h3>

          <p>

            {job.description}

          </p>

          <span className="jobStatus">

            {job.status}

          </span>

        </div>

      </div>

    </motion.div>

  );

}

export default JobCard;