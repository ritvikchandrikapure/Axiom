import "./WebDevelopmentServices.css";

import { useState } from "react";
import { motion } from "framer-motion";

import webDevelopmentServices from "./data/webDevelopmentServices";
import ServiceModal from "../WebDevelopment/ServiceModal";

function WebDevelopmentServices() {

  const [selectedService, setSelectedService] = useState(null);

  return (

    <section className="webDevelopmentServices">

      <div className="sectionHeading">

        <span>
          OUR SERVICES
        </span>

        <h2>
          Web Development Services
        </h2>

        <p>
          We build secure, scalable and high-performance web solutions
          tailored to your business goals. From responsive websites to
          enterprise applications, our team delivers digital experiences
          that drive growth and innovation.
        </p>

      </div>

      <div className="servicesGrid">

        {

          webDevelopmentServices.map((service, index) => (

            <motion.div

              key={service.id}

              className="serviceCard"

              initial={{
                opacity: 0,
                y: 40
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: .5,
                delay: index * .08
              }}

              onClick={() => setSelectedService(service)}

            >

              <div className="imageWrapper">

                <img
                  src={service.image}
                  alt={service.title}
                />

              </div>

              <div className="cardContent">

                <h3>
                  {service.title}
                </h3>

              </div>

            </motion.div>

          ))

        }

      </div>

      {

        selectedService && (

          <ServiceModal

            service={selectedService}

            onClose={() => setSelectedService(null)}

          />

        )

      }

    </section>

  );

}

export default WebDevelopmentServices;