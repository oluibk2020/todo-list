import { Link } from "react-router-dom"
import { motion } from "framer-motion";

function About() {

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1.5,
      duration: 1.5,
    },
  },
};

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="">About Us</div>

      <Link className="btn btn-secondary" to="/">
        Go back to Home
      </Link>
    </motion.div>
  );
}
export default About