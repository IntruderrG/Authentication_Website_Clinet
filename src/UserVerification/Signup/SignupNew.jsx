import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignupNew = () => {
  const navigate = useNavigate();

  // State for user credentials
  const [userData, setUserData] = useState({
    name: "",
    mobile: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // State for error messages
  const [errors, setErrors] = useState({});

  // Handle error messages
  const handleError = (fieldName, message) => {
    setErrors((prev) => ({ ...prev, [fieldName]: message }));
  };

  // Clear specific error
  const clearError = (fieldName) => {
    setErrors((prev) => ({ ...prev, [fieldName]: "" }));
  };

  // Validate individual fields
  const validateField = (fieldName, fieldValue) => {
    switch (fieldName) {
      case "name":
        if (fieldValue.length === 1) {
          handleError(fieldName, "Name must contain at least two characters");
        } else if (fieldValue.length > 30) {
          handleError(fieldName, "Name is too long");
        }
        break;
      case "mobile":
        if (fieldValue.length !== 10) {
          handleError(fieldName, "Please enter a valid 10-digit mobile number");
        } else if (/[A-Za-z]/.test(fieldValue)) {
          handleError(fieldName, "Mobile number cannot contain letters");
        } else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fieldValue)) {
          handleError(
            fieldName,
            "Mobile number cannot contain special characters"
          );
        }
        break;
      case "email":
        if (!fieldValue.includes("@") || !fieldValue.includes(".")) {
          handleError(fieldName, "Please enter a valid email address");
        }
        break;
      case "password":
        if (fieldValue.length < 8) {
          handleError(fieldName, "Password must be at least 8 characters long");
        } else if (!/[A-Z]/.test(fieldValue)) {
          handleError(
            fieldName,
            "Password must contain at least one uppercase letter"
          );
        } else if (!/[a-z]/.test(fieldValue)) {
          handleError(
            fieldName,
            "Password must contain at least one lowercase letter"
          );
        } else if (!/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fieldValue)) {
          handleError(
            fieldName,
            "Password must contain at least one special character"
          );
        }
        break;
      case "confirmPassword":
        break;
    }
  };

  // Validate required fields
  const validateRequiredFields = () => {
    if (
      !userData.name ||
      !userData.mobile ||
      !userData.email ||
      !userData.password ||
      !userData.confirmPassword
    ) {
      handleError("missingFields", "Please fill in all required fields");
      setTimeout(() => {
        clearError("missingFields");
      }, 3000);
      return false;
    }
    return true;
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    clearError(fieldName);
    validateField(fieldName, fieldValue);
    setUserData((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  // Validate password confirmation
  const validatePasswordConfirmation = () => {
    if (userData.password !== userData.confirmPassword) {
      handleError("passwordMismatch", "Passwords do not match");
      setUserData((prev) => ({ ...prev, confirmPassword: "" }));
    } else {
      clearError("passwordMismatch");
    }
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateRequiredFields()) {
      return;
    }

    try {
      const response = await fetch("http://3.110.84.146:5000/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: userData.name,
          mobile: userData.mobile,
          email: userData.email,
          password: userData.password,
        }),
      });
      console.log("Send the request to backend");
      const serverResponse = await response.json();

      if (response.ok) {
        alert("Account created successfully");
        console.log(serverResponse.message);
        setTimeout(() => {
          navigate("/");
        }, 2000);
      } else {
        throw new Error(serverResponse.message);
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        handleError(
          "serverError",
          "Unable to connect to server. Please try again."
        );
      } else {
        console.log("Error: ", error);
        handleError(
          "serverError",
          error.message || "An unexpected error occurred"
        );
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center p-4">
      {/* Error Message Display */}
      {(errors.serverError || errors.missingFields) && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white border-2 border-pink-300 text-gray-800 text-lg flex items-center justify-center rounded-lg shadow-lg p-4 z-10 max-w-md">
          {errors.serverError || errors.missingFields}
        </div>
      )}

      {/* Signup Card Container */}
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          {/* Left Side - Branding */}
          <div className="lg:w-2/5 bg-gradient-to-br from-pink-500 to-rose-500 p-8 text-white">
            <div className="h-full flex flex-col justify-center">
              <h1 className="text-3xl font-bold mb-4">Create Account</h1>
              <p className="text-pink-100 mb-6">
                Join our community and get started today
              </p>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white">Secure registration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white">Instant access</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-pink-500 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-white">Free forever</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-3/5 p-8">
            <div className="max-w-md mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Sign Up</h2>

              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>

                {/* Mobile Field */}
                <div>
                  <label
                    htmlFor="mobile"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mobile Number
                  </label>
                  <input
                    type="tel"
                    id="mobile"
                    name="mobile"
                    value={userData.mobile}
                    onChange={handleInputChange}
                    placeholder="Enter your mobile number"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  />
                  {errors.mobile && (
                    <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                {/* Password Field */}
                <div>
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={userData.password}
                    onChange={handleInputChange}
                    placeholder="Create a strong password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.password}
                    </p>
                  )}
                </div>

                {/* Confirm Password Field */}
                <div>
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={userData.confirmPassword}
                    onChange={handleInputChange}
                    onBlur={validatePasswordConfirmation}
                    placeholder="Confirm your password"
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
                  />
                  {errors.passwordMismatch && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.passwordMismatch}
                    </p>
                  )}
                </div>

                {/* Terms Agreement */}
                <div className="flex items-center space-x-3">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-4 h-4 text-pink-500 bg-gray-100 border-gray-300 rounded focus:ring-pink-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{" "}
                    <a
                      href="#terms"
                      className="text-pink-500 hover:text-pink-600 font-medium cursor-pointer"
                    >
                      Terms and Conditions
                    </a>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-pink-500 to-rose-500 text-white py-3 px-4 rounded-lg font-semibold hover:from-pink-600 hover:to-rose-600 focus:outline-none focus:ring-4 focus:ring-pink-200 transition duration-300 shadow-lg cursor-pointer"
                >
                  Create Account
                </button>

                {/* Login Link */}
                <div className="text-center pt-2">
                  <p className="text-gray-600">
                    Already have an account?{" "}
                    <a
                      href="/login"
                      className="text-pink-500 hover:text-pink-600 font-semibold cursor-pointer"
                    >
                      Sign In
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupNew;
