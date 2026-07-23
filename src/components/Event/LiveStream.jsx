import "./LiveStream.css";
import { motion } from "framer-motion";
import { FaYoutube } from "react-icons/fa";

function LiveStream() {
    const youtubeLink = "https://www.youtube.com/@SushilPudkeAxiom";

    return (
        <section className="liveSection">

            <motion.div
                className="liveCard"
                initial={{ opacity: 0, y: 70 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: .8 }}
                viewport={{ once: true }}
            >

                <div className="liveBadge">
                    <span className="dot"></span>
                    LIVE STREAM
                </div>

                <h2>
                    Upcoming Live Stream
                </h2>

                <p>
                    Stay connected with our latest webinars,
                    live coding sessions, AI discussions,
                    Web Development insights and Digital
                    Marketing strategies.
                </p>

                <button
                    className="youtubeButton"
                    onClick={() =>
                        window.open(youtubeLink, "_blank")
                    }
                >
                    <FaYoutube />
                    Join on YouTube
                </button>

            </motion.div>

        </section>
    );
}

export default LiveStream;