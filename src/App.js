import "./App.css";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import { useState,useEffect } from "react";
import { AuthProvider } from "./components/context/AuthContext";
import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import {auth} from './firebase'

function App() {
  
  const [currentUser, setCurrentUser] = useState(null);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
  }, []);

  
  return (
    <div className="App">
      <Router>
        <AuthProvider value={{ currentUser }}>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/DashBoard" element={<DashBoard />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
