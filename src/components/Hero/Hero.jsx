import { useEffect, useRef } from "react";
import lottie from "lottie-web";
import developer from "../../assets/animations/developer.json";



import "./Hero.css";
import {
  FaArrowRight,
  FaPlay,
  FaCode,
  FaCloud,
  FaRobot,
  FaMobileAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Hero() {

   const animationRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: animationRef.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: developer,
    });

    return () => anim.destroy();
  }, []); 
  return (
    <section className="hero">

      {/* Background Blobs */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      <div className="blob blob3"></div>

      <div className="hero-container">

        {/* LEFT */}

        <div className="hero-left">

          {/* <span className="hero-badge">
            🚀 Trusted IT Solutions Company
          </span> */}

          <h1>
            Transform Your Business
            <br />
            With
            <span> Future Ready Technology</span>
          </h1>

          <p>
            We build enterprise software, AI applications,
            cloud solutions, websites, mobile apps and
            digital products that help businesses grow
            faster.
          </p>

          <div className="hero-buttons">

           <Link to="/service">  <button className="btn-primary">
              Get Started
            </button></Link>

           <Link to="/portfolio"> <button className="btn-secondary">
              <FaPlay />
              View Portfolio
            </button></Link>

          </div>

         

        </div>

        {/* RIGHT */}
<div
  className="hero-right"
>

  <div
    className="lottieAnimation"
    ref={animationRef}
  ></div>

</div>

      </div>

    </section>
  );
}

export default Hero;