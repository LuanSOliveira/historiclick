import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const containerVariants = {
  initial: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: "left center",
  },
  animate: {
    rotateY: 0,
    opacity: 1,
    transformOrigin: "left center",
  },
  exit: {
    rotateY: -90,
    opacity: 0,
    transformOrigin: "left center",
  },
};

const containerTransition = {
  duration: 0.3,
  ease: "easeInOut",
};

const ChangeImageViewContainer = ({ children }: Props) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={containerTransition}
      className="h-full w-full flex flex-col gap-6"
      style={{ perspective: 1200 }}
    >
      {children}
    </motion.div>
  );
};

export default ChangeImageViewContainer;
