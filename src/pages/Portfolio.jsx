import "../styles/Portfolio.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import PortfolioHero from "../components/Portfolio/PortfolioHero";
// import PortfolioList from "../components/Portfolio/PortfolioList";
import Timeline from "../components/Portfolio/Timeline";


function Portfolio() {

  return (

    <>

      <Navbar />

      <PortfolioHero />

      <Timeline />

      <Footer />

    </>

  );

}

export default Portfolio;