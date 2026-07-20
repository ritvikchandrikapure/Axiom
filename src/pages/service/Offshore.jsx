import OffshoreHero from "../../components/Service/Offshore/OffshoreHero";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import OffshoreServices from "../../components/Service/Offshore/OffshoreServices";
import OffshoreStats from "../../components/Service/Offshore/OffshoreStats";
import Trusted from "../../components/Trusted/Trusted";

function Offshore() {
  return (
    <>
    <Navbar/>
      <OffshoreHero />
      <OffshoreServices/>
      <OffshoreStats/>
       <Trusted />
      <Footer/>
    </>
  );
}

export default Offshore;