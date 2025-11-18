import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fName: "",
    lName: "",
    mobNum: "",
    pass: "",
    confirmPass: "",
  });
  const [error, setError] = useState({});
  const handleError = (feildName, value) => {
    setError((prevError) => ({ ...prevError, [feildName]: value }));
  };
  const clearError = (feildName) => {
    setError((prevError) => ({ ...prevError, [feildName]: "" }));
  };
  let name, value;
  const handleChange = (e) => {
    name = e.target.name;
    value = e.target.value;
    clearError(name);
    try {
      switch (name) {
        case "fName":
          if (value.length == 1) {
            handleError(name, "Name should have atleast two Characters");
          } else if (value.length > 30) {
            handleError(name, "Name should have less than 30 characters");
          }
          break;
        case "lName":
          break;
        case "mobNum":
          if (/[a-z]/.test(value))
            handleError(name, "Mobile Feild cannot have alphabet");
          else if (/[A-Z]/.test(value))
            handleError(name, "Mobile Feild cannot have alphabet");
          else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value))
            handleError(name, "No Speacial Characters allowed");
          else if (value.length != 10)
            handleError(name, "Provide Appropriate Phone Number");
          break;
        case "pass":
          if (!/[a-z]/.test(value))
            handleError(name, "Password Must Contain a lowercase");
          else if (!/[A-Z]/.test(value))
            handleError(name, "Password Must Contain a uppercase");
          else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value))
            handleError(name, "Password Must Contain a Speacial Character");
          else if (value.length < 8)
            handleError(name, "Password length too Small");
          break;
        case "confirmPass":
          break;
        default:
          throw new error("Feild name and useState Mismatch");
      }
    } catch (error) {
      alert(error);
    }
    setUser((prevState) => ({ ...prevState, [name]: value }));
  };

  const checkConfirmPass = () => {
    if (user.confirmPass != user.pass) {
      handleError("pwdMismatch", "Password Mismatched");
      setUser((prevState) => ({ ...prevState, confirmPass: "" }));
    } else handleError("pwdMismatch", "");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: user.fName,
          lastName: user.lName,
          mobile: user.mobNum,
          password: user.pass,
          confirmPassword: user.confirmPass,
        }),
      });
      const data = await response.json();
      if (response.ok) {
        alert("SignUp Successful");
        console.log("Message:", data.message);
        console.log("User Info: ", data.user);
        setUser({
          fName: "",
          lName: "",
          mobNum: "",
          pass: "",
          confirmPass: "",
        });
        navigate("/");
      } else {
        throw new Error(data.message || "Signup Failed"); //Capital E in the error
      }
    } catch (error) {
      console.log(error.message);
      setError((prevErr) => ({ ...prevErr, serverSays: error.message }));
      setTimeout(() => {
        setError((prevErr) => ({ ...prevErr, serverSays: "" }));
      }, 10000);
    }
  };
  return (
    // Outer container: Deep dark background
    <div
      className="bg-gray-950 flex items-center justify-center min-h-screen p-4"
      onSubmit={handleSubmit}
    >
      {/* Sign-Up Card Container: Slightly lighter dark card */}
      <div className="w-full max-w-lg p-8 bg-gray-900 border border-gray-800 rounded-xl shadow-2xl">
        {/* Header */}
        <h2 className="text-4xl font-extrabold text-white mb-2 text-center tracking-tight">
          Register Here
        </h2>
        <p className="text-sm text-gray-400 mb-8 text-center">
          Create your account in seconds.
        </p>
        {error.serverSays && (
          <div className="h-10 w-70 rounded-md flex items-center justify-center absolute bg-gray-800 text-white text-md shadow-[2px_2px_15px_rgba(255,255,255,0.3)] right-10 top-10 p-2">
            {error.serverSays}
          </div>
        )}
        {/* {error.pwdMis && (
          <div className="h-50 w-50 rounded-md flex items-center justify-center absolute bg-cyan-700 text-white text-2xl shadow-[2px_2px_15px_rgba(255,255,255,0.2)] right-10 top-10">
            {error.pwdMis}
          </div>
        )} */}
        {/* Sign-Up Form */}
        <form className="space-y-6">
          {/* Name Fields */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* First Name */}
            <div className="flex-1">
              <label
                htmlFor="firstName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                name="fName"
                value={user.fName}
                onChange={handleChange}
                placeholder="John"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-200"
                required
              />
              {error.fName && (
                <p className="text-sm text-red-500">{error.fName}</p>
              )}
            </div>
            {/* Last Name */}
            <div className="flex-1">
              <label
                htmlFor="lastName"
                className="block text-sm font-medium text-gray-300 mb-1"
              >
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                name="lName"
                value={user.lName}
                onChange={handleChange}
                placeholder="Doe"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                           focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-200"
                // required
              />
            </div>
          </div>

          {/* Mobile Number Field */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobNum"
              value={user.mobNum}
              onChange={handleChange}
              placeholder="(555) 123-4567"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-200"
              required
            />
            {error.mobNum && (
              <p className="text-sm text-red-500">{error.mobNum}</p>
            )}
          </div>

          {/* Password Field */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="pass"
              value={user.pass}
              onChange={handleChange}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-200"
              required
            />

            {error.pass && <p className="text-sm text-red-500">{error.pass}</p>}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-300 mb-1"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPass"
              value={user.confirmPass}
              onChange={handleChange}
              onBlur={checkConfirmPass}
              placeholder="••••••••"
              className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition duration-200"
              required
            />
            {error.pwdMismatch && (
              <p className="text-sm text-red-500">{error.pwdMismatch}</p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 mt-8 bg-white text-gray-950 font-bold rounded-lg 
                       hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white 
                       focus:ring-opacity-50 transition duration-300 shadow-lg"
          >
            Sign Up
          </button>
        </form>

        {/* Footer link */}
        <p className="mt-8 text-center text-sm text-gray-400">
          Already have an account?
          <a
            href="#"
            className="font-medium text-white hover:text-gray-200 transition"
          >
            Log in
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
