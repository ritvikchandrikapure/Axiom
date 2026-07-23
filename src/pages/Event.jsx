import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import EventHero from "../components/Event/EventHero";
import LiveStream from "../components/Event/LiveStream";
import EventCarousel from "../components/Event/EventCarousel/EventCarousel";

function Event() {

    return (

        <>
            <Navbar />
            <EventHero />
            <EventCarousel />
            <LiveStream />
            <Footer />
        </>

    );

}

export default Event;