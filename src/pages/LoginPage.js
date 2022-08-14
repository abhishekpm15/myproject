import React from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import sky2 from "../images/sky2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
// import SignupPage from "./SignupPage";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const LoginPage = () => {
  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover overflow-auto object-cover"
    >
      <motion.div
        className="mx-[35%] my-[5%]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Card className="w-96">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Log In
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Email" size="lg" />
            <Input label="Password" size="lg" />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" fullWidth>
              Log In
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Don't have an account?
              <Link to="/SignupPage">
                <Typography
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Sign up
                </Typography>
              </Link>
            </Typography>
          </CardFooter>
        </Card>
      </motion.div>
      <div className="h-20"></div>
    </div>
  );
};

export default LoginPage;
