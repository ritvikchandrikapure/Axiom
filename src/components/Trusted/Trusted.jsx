import "./Trusted.css";

import MarqueeRow from "./MarqueeRow";

import {
  FaAndroid,
  FaAngular,
  FaApple,
  FaNodeJs,
  FaReact,
  FaPython,
  FaWordpress,
  FaHtml5,
  FaPhp,
  FaSass,
  FaJsSquare,
  FaGithub,
} from "react-icons/fa";

import { FaMicrosoft } from "react-icons/fa";

/* ===========================
   DATA
=========================== */

const row1 = [

  {
    icon:<FaAndroid className="android"/>,
    name:"Android",
  },

  {
    icon:<FaAngular className="angular"/>,
    name:"Angular",
  },

  {
    icon:<FaApple className="apple"/>,
    name:"iOS",
  },

  {
    icon:<FaNodeJs className="node"/>,
    name:"Node JS",
  },

  {
    icon:<FaReact className="react"/>,
    name:"React",
  },

];

const row2 = [

  {
    icon:<FaPython className="python"/>,
    name:"Python",
  },

  {
    icon:<FaWordpress className="wordpress"/>,
    name:"WordPress",
  },

  {
    icon:<FaHtml5 className="html"/>,
    name:"HTML5",
  },

  {
    icon:<FaPhp className="php"/>,
    name:"PHP",
  },

  {
    icon:<FaSass className="sass"/>,
    name:"Sass",
  },

];

const row3 = [

  {
    icon:<FaJsSquare className="js"/>,
    name:"JavaScript",
  },

  {
    icon:<FaGithub className="github"/>,
    name:"GitHub",
  },

  {
    icon:<FaMicrosoft className="microsoft"/>,
    name:"Microsoft",
  },

  {
    icon:<FaNodeJs className="node"/>,
    name:"Express",
  },

  {
    icon:<FaReact className="react"/>,
    name:"React Native",
  },

];

/* ===========================
   COMPONENT
=========================== */

function Trusted(){

  return(

    <section className="trusted">

      <div className="trusted-title">

        <span>

          TECHNOLOGIES WE WORK WITH

        </span>

        <h2>

          Trusted Technologies For
          Modern Digital Solutions

        </h2>

        <p>

          We leverage industry-leading
          technologies to build scalable,
          secure and high-performance
          software solutions.

        </p>

      </div>

      <div className="marquee-wrapper">

        <MarqueeRow

          items={row1}

          direction="left"

          speed={2}

        />

        <MarqueeRow

          items={row2} 

          direction="right"

          speed={2}

        />

        <MarqueeRow

          items={row3}

          direction="left"

          speed={2}

        />

      </div>

    </section>

  );

}

export default Trusted;