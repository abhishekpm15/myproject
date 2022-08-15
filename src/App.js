import "./App.css";
import HomePage from "../src/pages/HomePage";
import LoginPage from "../src/pages/LoginPage";
import SignupPage from "../src/pages/SignupPage";
import Contact from "./pages/Contact";
import About from "./pages/About";
import DashBoard from "./pages/DashBoard";
import { UserAuthContextProvider } from "./components/context/UserAuthContext";

import { Route, Link, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <UserAuthContextProvider>
        <Router>
          <Routes>
            <Route path="/Home" element={<HomePage />} />
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="/LoginPage" element={<LoginPage />} />
            <Route path="/SignupPage" element={<SignupPage />} />
            <Route path="/DashBoard" element={<DashBoard />} />
          </Routes>
        </Router>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
