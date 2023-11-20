import React from "react";
import { motion } from "framer-motion";

const varients = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75 rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active
    ? "text-white border-b border-purple-500"
    : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={varients}
      ></motion.div>
    </button>
  );
};

export default TabButton;
