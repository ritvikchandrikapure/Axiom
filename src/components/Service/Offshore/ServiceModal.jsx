import "./ServiceModal.css";

import { motion, AnimatePresence } from "framer-motion";

import { FaTimes } from "react-icons/fa";

import { useEffect } from "react";

function ServiceModal({ service, onClose }) {

  useEffect(() => {

    const handleKey = (e) => {

      if (e.key === "Escape") {

        onClose();

      }

    };

    document.addEventListener("keydown", handleKey);

    document.body.style.overflow = "hidden";

    return () => {

      document.removeEventListener("keydown", handleKey);

      document.body.style.overflow = "auto";

    };

  }, [onClose]);

  return (

    <AnimatePresence>

      <motion.div

        className="modalOverlay"

        initial={{ opacity: 0 }}

        animate={{ opacity: 1 }}

        exit={{ opacity: 0 }}

        onClick={onClose}

      >

        <motion.div

          className="modalBox"

          initial={{

            opacity: 0,

            scale: .85,

            y: 40

          }}

          animate={{

            opacity: 1,

            scale: 1,

            y: 0

          }}

          exit={{

            opacity: 0,

            scale: .85

          }}

          transition={{

            duration: .35

          }}

          onClick={(e)=>e.stopPropagation()}

        >

          {/* Header */}

          <div className="modalHeader">

            <h3>

              {service.title} Services

            </h3>

            <button

              className="closeBtn"

              onClick={onClose}

            >

              <FaTimes/>

            </button>

          </div>

          {/* Body */}

          <div className="modalBody">

            <div className="modalText">

              <h2>

                {service.heading}

              </h2>

              <p>

                {service.description}

              </p>

            </div>

            <div className="modalImage">

              <img

                src={service.image}

                alt={service.title}

              />

            </div>

          </div>

          {/* Footer */}

          <div className="modalFooter">

            <button

              className="modalClose"

              onClick={onClose}

            >

              Close

            </button>

          </div>

        </motion.div>

      </motion.div>

    </AnimatePresence>

  );

}

export default ServiceModal;