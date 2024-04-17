import React from "react";
import loginImage from "../assets/heartmonitor.jpeg";

const Login = () => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 bg-gray-100 flex justify-center items-center">
        <img
          src={loginImage}
          alt="Login"
          className="w-96 h-auto md:max-h-full mb-4"
        />
      </div>
      <div className="w-1/2 bg-gray-100 shadow-md rounded-lg p-8 flex justify-center items-center h-full">
        <div className="w-80">
          <h2 className="text-2xl font-bold mb-4">Login</h2>
          <form>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Username
              </label>
              <input
                type="username"
                id="username"
                name="username"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your username"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="password"
                className="block text-gray-700 font-bold mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
            >
              Login
            </button>
            <div className="text-center">
              <a href="/register" className="text-sm text-gray-600 hover:underline">
                Forgotten Password?
              </a>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?
              </span>
              <a href="/register" className="text-blue-500 hover:underline">
                Register Here
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
