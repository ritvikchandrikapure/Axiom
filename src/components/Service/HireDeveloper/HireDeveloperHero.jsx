import "./HireDeveloperHero.css";

import { motion } from "framer-motion";

function HireDeveloperHero() {

    return (

        <section className="hireHero">

            <div className="heroOverlay"></div>

            <div className="blob blob1"></div>

            <div className="blob blob2"></div>

            <div className="blob blob3"></div>

            <div className="heroContainer">

                <motion.div

                    className="heroContent"

                    initial={{ opacity: 0, y: 50 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                >

                    <h1>WEB DESIGN AND DEVELOPMENT</h1>

                    <p>

                        We are a forward-thinking digital agency specializing in web design, development, and Al-powered marketing solutions. Our mission is to transform your ideas into engaging digital experiences.

                    </p>

                </motion.div>

            </div>

        </section>

    );

}

export default HireDeveloperHero;