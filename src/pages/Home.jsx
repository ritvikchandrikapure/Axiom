import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero";
import Trusted from "../components/Trusted/Trusted";
import Services from "../components/Services/Services";
import WhyChoose from "../components/WhyChoose/WhyChoose";
import Process from "../components/Process/Process";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Services />
      <Trusted />
      < WhyChoose />
      <Process />
      <Footer />
    
    </>
  );
}

export default Home;