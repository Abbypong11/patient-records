import React from "react";
import { Link } from "react-router-dom";
import BackgroundImage from "../assets/heartmonitor.jpeg";

export default function UserProfile() {
  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src={BackgroundImage}
        alt="background-pic"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-8xl">Welcome to Medicare</h1>
        
        <div className="flex justify-center mt-8">
          {/* Card 1 */}
          <Link to="/patients" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg mx-4">
            Patients Records
          </Link>
          {/* Card 2 */}
          <Link to="/addpatient" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg shadow-lg mx-4">
            Add Patient
          </Link>
        </div>
      </div>
    </div>
  );
}