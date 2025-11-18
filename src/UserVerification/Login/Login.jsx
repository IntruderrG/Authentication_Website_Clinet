import React, { useState } from "react";

const Login = () => {
  // State for user credentials
  const [credentials, setCredentials] = useState({
    mobile: "",
    password: "",
  });

  // State for error messages
  const [error, setError] = useState({});

  // Handle error messages
  const handleError = (fieldName, message) => {
    setError((prev) => ({ ...prev, [fieldName]: message }));
  };

  // Clear specific error
  const clearError = (fieldName) => {
    setError((prev) => ({ ...prev, [fieldName]: "" }));
  };

  // Validate required fields
  const validateRequiredFields = () => {
    if (!credentials.mobile || !credentials.password) {
      handleError("missing_field", "Please fill in all required fields");
      setTimeout(() => {
        clearError("missing_field");
      }, 2000);
      return false;
    } else {
      clearError("missing_field");
    }
    return true;
  };

  // Validate mobile number format
  const validateMobileNumber = (fieldName, fieldValue) => {
    if (fieldValue.length !== 10) {
      handleError(fieldName, "Please enter a valid 10-digit mobile number");
    } else if (/[A-Za-z]/.test(fieldValue)) {
      handleError(fieldName, "Mobile number cannot contain letters");
    } else if (/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(fieldValue)) {
      handleError(fieldName, "Mobile number cannot contain special characters");
    }
  };

  // Handle input changes
  const handleInputChange = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;

    clearError(fieldName);
    if (fieldName === "mobile") {
      validateMobileNumber(fieldName, fieldValue);
    }
    setCredentials((prev) => ({ ...prev, [fieldName]: fieldValue }));
  };

  // Handle form submission
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateRequiredFields()) {
      return;
    }

    try {
      const response = await fetch("http://3.110.84.146:5000/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(credentials),
      });
      console.log("Send the request to backend");

      const serverResponse = await response.json();

      if (response.ok) {
        alert("Sign in successful");
      } else {
        throw new Error(serverResponse.message || "Sign in failed");
      }
    } catch (error) {
      if (error.message === "Failed to fetch") {
        handleError(
          "serverError",
          "Database connection issue. Please try again."
        );
        setTimeout(() => {
          clearError("serverError");
        }, 2000);
      } else if (error.message === "Invalid mobile number") {
        clearError("mobile");
        handleError("mobile", "Invalid mobile number format");
        setTimeout(() => {
          clearError("mobile");
        }, 2000);
      } else if (error.message === "Mobile Number not Found") {
        clearError("mobile");
        handleError("mobile", "Mobile number not registered");
        setTimeout(() => {
          clearError("mobile");
        }, 2000);
      } else if (error.message === "Invalid password") {
        clearError("password");
        handleError("password", "Incorrect password");
        setTimeout(() => {
          clearError("password");
        }, 2000);
      } else {
        handleError("serverError", `${error.message}. Please try again.`);
        setTimeout(() => {
          clearError("serverError");
        }, 2000);
      }
    }
  };

  return (
    // Main container with gradient background matching home page
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50 flex items-center justify-center p-4 relative">
      {/* Error Message Display */}
      {(error.missing_field || error.serverError) && (
        <div className="absolute top-5 left-1/2 transform -translate-x-1/2 bg-white border-2 border-pink-300 text-gray-800 text-lg flex items-center justify-center rounded-lg shadow-lg p-4 z-10 max-w-md">
          {error.missing_field || error.serverError}
        </div>
      )}

      {/* Login Card Container */}
      <div className="w-full max-w-md p-8 bg-white border border-gray-200 rounded-2xl shadow-xl">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome Back
          </h2>
          <p className="text-gray-600">Sign in to access your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-6" onSubmit={handleFormSubmit}>
          {/* Mobile Number Field */}
          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Mobile Number
            </label>
            <input
              type="tel"
              id="mobileNumber"
              name="mobile"
              placeholder="Enter your mobile number"
              value={credentials.mobile}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
            />
            {error.mobile && (
              <p className="text-red-500 text-sm mt-2">{error.mobile}</p>
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
              placeholder="Enter your password"
              value={credentials.password}
              onChange={handleInputChange}
              className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 
                         focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition duration-200"
            />
            {error.password && (
              <p className="text-red-500 text-sm mt-2">{error.password}</p>
            )}
          </div>

          {/* Forgot Password Link */}
          <div className="flex justify-end">
            <a
              href="#"
              className="text-sm font-medium text-pink-600 hover:text-pink-500 transition"
            >
              Forgot your password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-lg 
                       focus:outline-none focus:ring-4 focus:ring-pink-200 transition duration-300 shadow-lg cursor-pointer"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Link */}
        <div className="mt-8 text-center">
          <p className="text-gray-600 text-sm">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="font-medium text-pink-600 hover:text-pink-500 transition"
            >
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
