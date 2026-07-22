import "./DigitalMarketingServices.css";

import { useState } from "react";

import { motion } from "framer-motion";

import digitalMarketingServices from "./data/digitalMarketingServices";

import ServiceModal from "../WebDevelopment/ServiceModal";

function DigitalMarketingServices() {

    const [selectedService, setSelectedService] = useState(null);

    return (

        <section className="webDevelopmentServices">

            <div className="sectionHeading">

                <span>

                    OUR SERVICES

                </span>

                <h2>

                    Digital Marketing Services

                </h2>

                <p>

                    We help businesses grow their online presence through
                    result-driven digital marketing strategies. From SEO and
                    social media marketing to paid advertising, content
                    marketing, email campaigns, and performance analytics,
                    our experts create customized solutions that increase
                    brand visibility, generate quality leads, and maximize
                    return on investment.

                </p>

            </div>

            <div className="servicesGrid">

                {

                    digitalMarketingServices.map((service, index) => (

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

                selectedService &&

                (

                    <ServiceModal

                        service={selectedService}

                        onClose={() => setSelectedService(null)}

                    />

                )

            }

        </section>

    );

}

export default DigitalMarketingServices;