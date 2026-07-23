import "./EventHero.css";
import { motion } from "framer-motion";

function EventHero() {

    return (

        <section className="eventHero">

            <div className="eventHeroOverlay"></div>

            <div className="eventHeroPattern"></div>

            <div className="eventHeroContainer">

                <motion.div

                    className="eventHeroContent"

                    initial={{ opacity: 0, y: 50 }}

                    animate={{ opacity: 1, y: 0 }}

                    transition={{
                        duration: 0.8,
                        ease: "easeOut"
                    }}

                >
                    <h1>

                        EVENTS THAT <br />

                        <span>INSPIRE</span>

                    </h1>

                    <p>

                        Creating meaningful events that inspire connection,
                        collaboration, innovation, and unforgettable
                        experiences for businesses, professionals, and
                        communities around the world.

                    </p>


                </motion.div>

            </div>

            <div className="scrollIndicator">

                <span></span>

            </div>

        </section>

    );

}

export default EventHero;