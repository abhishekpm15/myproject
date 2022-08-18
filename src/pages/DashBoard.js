import React from "react";
import { motion } from "framer-motion";
import sky2 from "../images/sky2.jpg";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import AccountCircleIcon from '@mui/icons-material/AccountBox.js';
const DashBoard = () => {
  return (
    <motion.div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="flex justify-between">
        <div>
          <img src={logo} alt="logo" className="w-10 my-1 mx-1" />
        </div>
        <div>
          <NavBar2 />
        </div>
        <div>{AccountCircleIcon}</div>
      </div>
    </motion.div>
  );
};

export default DashBoard;
