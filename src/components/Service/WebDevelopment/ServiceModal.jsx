import "./ServiceModal.css";

import { motion, AnimatePresence } from "framer-motion";

import { FaTimes } from "react-icons/fa";

function ServiceModal({ service, onClose }) {

  if (!service) return null;

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

          className="serviceModal"

          initial={{

            opacity: 0,

            scale: .9,

            y: 50

          }}

          animate={{

            opacity: 1,

            scale: 1,

            y: 0

          }}

          exit={{

            opacity: 0,

            scale: .9,

            y: 50

          }}

          transition={{

            duration: .35

          }}

          onClick={(e)=>e.stopPropagation()}

        >

          {/* Header */}

          <div className="modalHeader">

            <h2>

              {service.title}

            </h2>

            <button

              className="closeBtn"

              onClick={onClose}

            >

              <FaTimes/>

            </button>

          </div>

          {/* Body */}

          <div className="modalBody">

            <div className="modalLeft">

              <h3>

                {service.heading}

              </h3>

              <p>

                {service.description}

              </p>

            </div>

            <div className="modalRight">

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