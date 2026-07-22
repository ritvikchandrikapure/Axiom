import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OffshoreStats from "../../components/Service/Offshore/OffshoreStats";
import Trusted from "../../components/Trusted/Trusted";
import DigitalHero from "../../components/Service/DigitalMarketing/DigitalHero";
import DigitalOverview from "../../components/Service/DigitalMarketing/DigitalOverview";
import DigitalMarketingServices from "../../components/Service/DigitalMarketing/DigitalMarketingServices";





function DigitalMarketing() {

  return (

    <>
      <Navbar />


     
<DigitalHero/>
<DigitalOverview/>
<DigitalMarketingServices/>

      <OffshoreStats />
      <Trusted />



      <Footer />


    </>

  );

}

export default DigitalMarketing;