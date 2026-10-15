import React from "react";
import { motion } from "framer-motion";
import { ChevronDownIcon } from "@radix-ui/react-icons";

interface ArrowDownProps {
  isVisible: boolean;
}

const ArrowDown: React.FC<ArrowDownProps> = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed bottom-10 left-1/2 transform -translate-x-1/2"
      animate={{ y: [0, 10, 0] }}
      transition={{ repeat: Infinity, duration: 1 }}
    >
      <ChevronDownIcon className="w-12 h-12 text-off-black" />
    </motion.div>
  );
};

export default ArrowDown;
