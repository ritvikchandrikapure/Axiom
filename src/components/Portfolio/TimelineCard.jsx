import "../../styles/Portfolio.css";

import { motion } from "framer-motion";

import { FaArrowRight } from "react-icons/fa";

function TimelineCard({ item, index }) {

  const left = index % 2 === 0;

  return (

    <motion.div

      className={`timelineItem ${left ? "left" : "right"}`}

      initial={{

        opacity:0,

        y:80,

      }}

      whileInView={{

        opacity:1,

        y:0,

      }}

      transition={{

        duration:.6,

        delay:index*.08,

      }}

      viewport={{

        once:true,

      }}

    >

      {/* YEAR */}

      <div className="timelineDot">

        <span>

          {item.year}

        </span>

      </div>

      {/* CARD */}

      <div className="timelineCard">

        <div className="timelineImage">

          <img

            src={item.image}

            alt={item.title}

          />

        </div>

        <div className="timelineContent">

          <h3>

            {item.title}

          </h3>

          <p>

            {item.description}

          </p>

          <button>

            Read Story

            <FaArrowRight />

          </button>

        </div>

      </div>

    </motion.div>

  );

}

export default TimelineCard;