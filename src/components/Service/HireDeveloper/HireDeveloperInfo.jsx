import "./HireDeveloperInfo.css";
import { motion } from "framer-motion";

function HireDeveloperInfo() {
  return (
    <section className="hireInfoSection">

      <motion.div
        className="hireInfoCard"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >

        <p>

          Bring your digital ideas to life effortlessly with
          <strong> Axiom TechGuru </strong>
          — your trusted partner to hire dedicated web developers in India.
          Our expert developers are skilled in cutting-edge technologies
          including
          <strong> MERN, MEAN, Java, PHP, .NET, </strong>
          and more, delivering cost-effective and timely solutions tailored
          to your business needs.

          Whether you're building from scratch or scaling an existing
          platform, we offer flexible hiring models that ensure quality,
          affordability, and transparency.

          At Axiom, we make the hiring process seamless, allowing you to
          focus on growth while we bring your vision to life with precision
          and expertise.

        </p>

      </motion.div>

    </section>
  );
}

export default HireDeveloperInfo;