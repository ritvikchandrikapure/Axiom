import WebHero from "../../components/Service/WebDevelopment/WebHero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import WebOverview from "../../components/Service/WebDevelopment/WebOverview";
import WebDevelopmentServices from "../../components/Service/WebDevelopment/WebDevelopmentServices";

import OffshoreStats from "../../components/Service/Offshore/OffshoreStats";
import Trusted from "../../components/Trusted/Trusted";



function WebDevelopment() {

  return (

    <>
      <Navbar />


      <WebHero />
      <WebOverview />
      <WebDevelopmentServices/>


      <OffshoreStats />
      <Trusted />



      <Footer />


    </>

  );

}

export default WebDevelopment;