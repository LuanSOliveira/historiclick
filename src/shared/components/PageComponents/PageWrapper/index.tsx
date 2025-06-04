import { motion, AnimatePresence } from "framer-motion";
import { useLocation, Outlet } from "react-router-dom";

const pageVariants = {
  initial: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: "left center",
  },
  in: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: "left center",
  },
  // out: {
  //   rotateY: -90,
  //   opacity: 0,
  //   transformOrigin: "left center",
  // },
};

const pageTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

const PageWrapper = () => {
  const location = useLocation();

  return (
    <div
      className="relative w-screen min-h-screen "
      style={{ perspective: 1200 }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={pageTransition}
          className="w-full h-full"
        >
          <Outlet />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default PageWrapper;
