import "../styles/Career.css";

import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import CareerHero from "../components/Career/CareerHero";
import CareerAbout from "../components/Career/CareerAbout";
import CareerJobs from "../components/Career/CareerJobs";
import CareerCTA from "../components/Career/CareerCTA";

function Career() {

  return (

    <>

      <Navbar />

      <CareerHero />

      <CareerAbout />

      <CareerJobs />

      <CareerCTA />

      <Footer />

    </>

  );

}

export default Career;