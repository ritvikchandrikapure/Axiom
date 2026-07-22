import "./HireProcess.css";

import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { FaChevronDown } from "react-icons/fa";

function HireProcess() {

  const [activeIndex, setActiveIndex] = useState(null);

  const accordionData = [

    {
      title: "Request",
      subtitle: "Share Your Requirements, We'll Take It From There",

      content:
        "Hiring remote developers is simple with us. Submit your project requirements, preferred technologies, team size, and engagement model. Our consultants analyze your needs and shortlist highly qualified developers who best match your business objectives, ensuring a smooth, transparent, and efficient hiring process."
    },

    {
      title: "Interview",
      subtitle: "Evaluate Top-Tier Talent with Confidence",

      content:
        "Interview the shortlisted developers to assess their technical expertise, communication skills, and problem-solving abilities. You remain in complete control throughout the hiring process and can select developers who perfectly align with your business goals, project requirements, and work culture."
    },

    {
      title: "Hire",
      subtitle: "Build Faster with a Distributed, 24/7-Ready Team",

      content:
        "Finalize your dedicated development team and begin your project immediately. Our experienced developers integrate seamlessly with your existing team, follow agile development practices, maintain transparent communication, and deliver high-quality software that accelerates your business growth."
    }

  ];

  function toggleAccordion(index){

    if(activeIndex===index){

      setActiveIndex(null);

    }

    else{

      setActiveIndex(index);

    }

  }

  return(

    <section className="hireProcess">

      <div className="processContainer">

        <motion.h2

          className="processTitle"

          initial={{opacity:0,y:40}}

          whileInView={{opacity:1,y:0}}

          viewport={{once:true}}

          transition={{duration:.7}}

        >

          Hiring Remote Developers is Super EASY!

        </motion.h2>

        <div className="accordionWrapper">

          {

            accordionData.map((item,index)=>(

              <motion.div

                key={index}

                className={`accordionItem ${activeIndex===index ? "active" : ""}`}

                initial={{opacity:0,y:25}}

                whileInView={{opacity:1,y:0}}

                viewport={{once:true}}

                transition={{delay:index*.15}}

              >

                <button

                  className="accordionHeader"

                  onClick={()=>toggleAccordion(index)}

                >

                  <div>

                    <strong>

                      {item.title}

                    </strong>

                    {" "}– {item.subtitle}

                  </div>

                  <FaChevronDown

                    className={`arrow ${activeIndex===index ? "rotate" : ""}`}

                  />

                </button>

                <AnimatePresence>

                  {

                    activeIndex===index &&

                    (

                      <motion.div

                        className="accordionBody"

                        initial={{height:0,opacity:0}}

                        animate={{height:"auto",opacity:1}}

                        exit={{height:0,opacity:0}}

                        transition={{duration:.35}}

                      >

                        <p>

                          {item.content}

                        </p>

                      </motion.div>

                    )

                  }

                </AnimatePresence>

              </motion.div>

            ))

          }

        </div>

      </div>

    </section>

  );

}

export default HireProcess;