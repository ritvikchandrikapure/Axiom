import "./HireModel.css";
import { motion } from "framer-motion";
import {
  FaCheckCircle,
  FaClock,
  FaCalendarAlt,
  FaArrowRight,
} from "react-icons/fa";

function HireModel() {
  const models = [
    {
      title: "PART TIME",
      hours: "4",
      days: "30",
      popular: false,
      calendly: "https://calendly.com/sushil-softech",
      features: [
        "Work with fully proficient developers",
        "Collaborate with developer",
        "Enjoy hassle-free project",
      ],
    },

    {
      title: "FULL TIME",
      hours: "8",
      days: "30",
      popular: true,
      calendly: "https://calendly.com/sushil-softech",
      features: [
        "Work with fully proficient developers",
        "Collaborate with developer",
        "Enjoy hassle-free project",
      ],
    },

    {
      title: "FLEXIBLE TIME",
      hours: "Flexible",
      days: "50",
      popular: false,
      calendly: "https://calendly.com/sushil-softech",
      features: [
        "Work with fully proficient developers",
        "Collaborate with developer",
        "Enjoy hassle-free project",
      ],
    },
  ];

  const handleSchedule = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <section className="hireModelSection">
      <div className="modelContainer">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2>Our Flexible Hiring Models</h2>
        </motion.div>

        <div className="modelGrid">
          {models.map((model, index) => (
            <motion.div
              key={index}
              className={`modelCard ${
                model.popular ? "popularCard" : ""
              }`}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -15,
                scale: 1.03,
              }}
            >
             

              <div className="modelTitle">
                {model.title}
              </div>

              <div className="modelInfo">
                <div>
                  <FaClock className="infoIcon" />
                  <h3>{model.hours}</h3>
                  <span>Hours / Day</span>
                </div>

                <div>
                  <FaCalendarAlt className="infoIcon" />
                  <h3>{model.days}</h3>
                  <span>Minimum / Days</span>
                </div>
              </div>

              <ul>
                {model.features.map((feature, i) => (
                  <li key={i}>
                    <FaCheckCircle />
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                onClick={() => handleSchedule(model.calendly)}
              >
                Let's Connect
                <FaArrowRight />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HireModel;