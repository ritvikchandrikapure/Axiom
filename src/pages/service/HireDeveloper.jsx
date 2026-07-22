import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";


import OffshoreStats from "../../components/Service/Offshore/OffshoreStats";
import Trusted from "../../components/Trusted/Trusted";

import HireDeveloperHero from "../../components/Service/HireDeveloper/HireDeveloperHero";
import HireDeveloperInfo from "../../components/Service/HireDeveloper/HireDeveloperInfo";
import HireProcess from "../../components/Service/HireDeveloper/HireProcess";
import HireCTA from "../../components/Service/HireDeveloper/HireCTA";
import HireModel from "../../components/Service/HireDeveloper/HireModel";



function HireDeveloper() {

  return (

    <>
      <Navbar />


    <HireDeveloperHero/>
    <HireDeveloperInfo/>
    <HireProcess/>
    <HireCTA/>
    <HireModel/>
      <OffshoreStats />
      <Trusted />



      <Footer />


    </>

  );

}

export default HireDeveloper;