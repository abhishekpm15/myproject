import React, { useState } from "react";
import { Button, Input, Checkbox,Alert } from "@material-tailwind/react";
import sky2 from "../images/sky2.jpg";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../components/context/UserAuthContext";
import {
  Card,
  CardHeader,
  CardBody, 
  CardFooter,
  Typography,
} from "@material-tailwind/react";


const SignupPage = () => {
  const [show, setShow] = useState(true);
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {signUp,error} = useUserAuth();
  
  const handleSubmit  = (e) =>{
      e.preventDefault()
      signUp(email,password);
  };
  
  let navigate = useNavigate();
  return (
    <div
      style={{ backgroundImage: `url(${sky2})` }}
      className="bg-cover overflow-auto object-cover"
    >
      <div>
        {error ? <Alert
        show={show}
        dismissible={{
          onClose: () => setShow(false),
        }}
      >
        {error.toString()}
      </Alert> : navigate("/DashBoard")}
      </div>
      <div className="float-right mx-3 my-3">
        <Button
          color="red"
          onClick={() => {
            navigate("/Home");
          }}
        >
          Go back
        </Button>
      </div>
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
            <Input label="Email" size="lg" onChange={(e)=>setEmail(e.target.value)} required />
            <Input label="Password" size="lg" onChange={(e)=>setPassword(e.target.value)}  required />
            {/* <Input label="Confirm Password" size="lg" required /> */}
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              fullWidth
              onClick={handleSubmit}
            >
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
