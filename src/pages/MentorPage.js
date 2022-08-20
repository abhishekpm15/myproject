import React from "react";
import { motion } from "framer-motion";
import sky2 from "../images/sky2.jpg";
import NavBar2 from "../components/NavBar2";
import logo from "../images/nvpbois.png";
import SideNavbar from "../components/SideNavbar";
import { useAuth } from "../components/context/GoogleAuthContext";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import { Button } from "@material-tailwind/react";
import MentorPage from "./MentorPage";
import { ImFeed } from "react-icons/im";
import Card from "../components/Card"
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
          <Button
            className="mx-3 my-3"
            color="red"
            onClick={() => signOut(auth)}
          >
            Log Out
          </Button>
        </div>
      </div>
      <div className="">
        <SideNavbar>
          <Card />
          {/* <div> */}
            <MentorPage
              image="../images/mentormale.png"
              name="Abhishek P.M"
              about="Abhishek is a good Boy"
              rating="⭐⭐⭐⭐"
              // icon={<ImFeed />}
            />
            {/* <MentorPage
              image="../images/mentormale.png"
              name="Abhishek P.M"
              about="Abhishek is a good Boy"
              rating="⭐⭐⭐⭐"
            />
            <MentorPage
              image="../images/mentormale.png"
              name="Abhishek P.M"
              about="Abhishek is a good Boy"
              rating="⭐⭐⭐⭐"
            /> */}
          {/* </div> */}
        </SideNavbar>
      </div>
    </motion.div>
  );
};

export default DashBoard;
