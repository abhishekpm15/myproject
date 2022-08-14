import React from "react";
import { Button, Input, Checkbox } from "@material-tailwind/react";
import sky2 from "../images/sky2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "@material-tailwind/react";

const SignupPage = () => {
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
              Sign Up
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
              Sign Up
            </Button>
            <Typography variant="small" className="mt-6 flex justify-center">
              Already have an account ?
              <Link to="/LoginPage">
                <Typography
                  variant="small"
                  color="blue"
                  className="ml-1 font-bold"
                >
                  Log In
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

export default SignupPage;
