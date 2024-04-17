import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/hospital.jpg";
// import Sidebar from "../components/sidebar";

export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src={BackgroundImage}
        alt="background-pic"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      
      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>
      
      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">Welcome to Medikeep</h1>
        
        <div className="flex justify-center mt-8">
          {/* button 1 */}
          <Link to="/login" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg mx-4">
            Login
          </Link>
          {/* button 2 */}
          <Link to="/register" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg mx-4">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}