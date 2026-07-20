import "./OffshoreServices.css";

import { useState } from "react";

import { motion } from "framer-motion";

import offshoreServices from "../Offshore/data/offshoreServices.js";

import ServiceModal from "./ServiceModal";

function OffshoreServices() {

  const [selectedService, setSelectedService] = useState(null);

  return (

    <section className="offshoreServices">

      <div className="sectionHeading">

        <span>

          OUR SERVICES

        </span>

        <h2>

          Offshore Development Services

        </h2>

        <p>

          We provide end-to-end offshore software development
          solutions that help businesses reduce costs, improve
          productivity and accelerate digital transformation.

        </p>

      </div>

      <div className="servicesGrid">

        {

          offshoreServices.map((service,index)=>(

            <motion.div

              key={service.id}

              className="serviceCard"

              initial={{

                opacity:0,

                y:40

              }}

              whileInView={{

                opacity:1,

                y:0

              }}

              viewport={{

                once:true

              }}

              transition={{

                duration:.5,

                delay:index*.08

              }}

              onClick={()=>setSelectedService(service)}

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

        selectedService &&

        <ServiceModal

          service={selectedService}

          onClose={()=>setSelectedService(null)}

        />

      }

    </section>

  );

}

export default OffshoreServices;