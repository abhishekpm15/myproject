import React from "react";
import { motion } from "framer-motion";
import sky2 from "../images/sky2.jpg";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
// import AccountCircleIcon from '@mui/icons-material/AccountBox.js';
import { useAuth } from '../components/context/GoogleAuthContext';
import { auth } from "../firebase";
import {signOut } from "firebase/auth";
import { Button } from "@material-tailwind/react";
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
        <div>
          <Button  className="mx-3 my-3" color="red" onClick={()=>signOut(auth)}>
            Log Out
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default DashBoard;
