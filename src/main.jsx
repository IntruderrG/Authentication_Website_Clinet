import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Login from "./UserVerification/Login/Login.jsx";
import SignupNew from "./UserVerification/Signup/SignupNew.jsx";
import Footer from "./Footer/Footer.jsx";
import Navbar from "./Navbar/Navbar.jsx";
import Features from "./Extras/Features.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Signup" element={<SignupNew />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/features" element={<Features />} />
        <Route
          path="*"
          element={
            <div className="h-screen w-full flex items-center justify-center">
              <div className="text-8xl  font-semibold  ">Element Not Found</div>
            </div>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </StrictMode>
);
