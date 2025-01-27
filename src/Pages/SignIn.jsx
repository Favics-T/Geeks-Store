import React from "react";
import { Link } from "react-router-dom";
import SigninImage from "../assets/zea.avif";

const SignIn = () => {
  return (
    <div className="min-h-screen bg-[#0b0e20] text-white py-10 flex items-center justify-center">
      {/* SignIn Container */}
      <div className="flex flex-col md:flex-row bg-[#0b0e20] max-w-6xl w-full rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="relative flex-1 flex items-center justify-center">
          <img
            src={SigninImage}
            alt="Sign In"
            className="w-[90%] h-60 rounded-3xl"
          />
          <div className="absolute top-4 left-4">
            <li className="text-blue-900 text-xl font-bold font-logoFont">
              Gee<span className="text-white">ksStore</span>
            </li>
          </div>
          <div className="absolute bottom-10 left-10">
            <h1 className="text-lg font-serif">
              Sign in to a beautiful experience with Geeks
            </h1>
          </div>
          <Link
            to="/home"
            className="absolute top-4 right-4 bg-blue-700 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-300"
          >
            Back to Home
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-12">
          <h1 className="text-3xl font-bold mb-8">Sign In</h1>

          {/* Form */}
          <form className="w-full max-w-md space-y-6">
            {/* Username/Email Input */}
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium mb-2"
              >
                Username or Email
              </label>
              <input
                type="text"
                id="username"
                placeholder="Enter your username or email"
                className="w-full bg-[#0b0e20] border border-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Password Input */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full bg-[#0b0e20] border border-gray-500 text-white py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Sign In Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 font-semibold"
              >
                Sign In
              </button>
            </div>

            {/* Create Account Link */}
            <p className="text-center text-sm mt-4">
              Don’t have an account?{" "}
              <Link
                to="/signup"
                className="underline text-blue-500 hover:text-blue-400"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
