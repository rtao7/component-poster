import React from "react";
import { motion } from "framer-motion";

const Command = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="absolute bg-white shadow-lg rounded-md border-black/10 bottom-14 left-1/2 -translate-x-1/2 w-[600px] h-[400px] border"
    ></motion.div>
  );
};

export default Command;
