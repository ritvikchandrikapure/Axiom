import "../../styles/Portfolio.css";

import { motion } from "framer-motion";

import PortfolioItem from "./PortfolioItem";
import portfolioData from "./portfolioData";

function PortfolioList() {

  return (

    <motion.section

      id="portfolio-list"

      className="portfolioSection"

      initial={{

        opacity:0,

        y:120,

      }}

      whileInView={{

        opacity:1,

        y:0,

      }}

      transition={{

        duration:.8,

      }}

      viewport={{

        once:true,

        amount:.15,

      }}

    >

      <div className="portfolioGrid">

        {

          portfolioData.map((item,index)=>(

            <PortfolioItem

              key={item.id}

              item={item}

              index={index}

            />

          ))

        }

      </div>

    </motion.section>

  );

}

export default PortfolioList;