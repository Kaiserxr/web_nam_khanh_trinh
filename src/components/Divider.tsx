import React from "react";
import { motion } from "framer-motion";

const DottedDivider: React.FC = () => {
  return (
    <div className="flex items-center justify-center my-8">
      <div className="flex-grow border-t border-dashed border-cool-grey"></div>
      <div className="mx-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            className="bi bi-star-fill text-cool-grey w-6 h-6"
            viewBox="0 0 16 16"
          >
            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.32-.158-.888.283-.95l4.898-.696 2.107-4.287c.197-.4.73-.4.927 0l2.107 4.287 4.898.696c.441.062.612.63.283.95l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
          </svg>
        </motion.div>
      </div>
      <div className="flex-grow border-t border-dashed border-cool-grey"></div>
    </div>
  );
};

export default DottedDivider;
