import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import loginImage from "../assets/heartmonitor.jpeg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/login",
        { email, password }
      );
      console.log(response);
      const { token } = response.data.accessToken;
      console.log(token);

      // Save token to sessionStorage
      sessionStorage.setItem("token", token);

      // Redirect or do something else after successful login
      console.log("Login successful!");
    } catch (error) {
      setError("Invalid email or password. Please try again.");
      navigate("/dashboard/dash");
    }
  };

  return (
    <div className="flex h-screen">
      <nav className="absolute top-0 left-0 w-full flex justify-between p-6">
        <h1 className="text-blue-800 font-extrabold text-4xl italic">
          MEDSTORE
        </h1>
      </nav>
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
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-gray-700 font-bold mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
                required
              />
            </div>
            {error && <p className="text-red-500 mb-4">{error}</p>}
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg w-full mb-2"
            >
              Login
            </button>
            <div className="text-center">
              <a
                href="/register"
                className="text-sm text-gray-600 hover:underline"
              >
                Forgotten Password?
              </a>
            </div>
            <div className="text-center">
              <span className="text-sm text-gray-600">
                Don't have an account?
              </span>
              <Link to="/register" className="text-blue-700 hover:underline">
                Register Here
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
