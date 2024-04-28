import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="relative overflow-hidden">
        <div className="flex h-full">
          <div className="flex w-1/6 h-screen pt-10 bg-blue-900">
            <ul>
              <Link to="/dashboard/dash">
                <li className="text-white text-left font-semibold p-4">
                  Dashboard
                </li>
              </Link>
              <Link to="/dashboard/patients">
                <li className="text-white text-left font-semibold p-4">
                  Patients 
                </li>
              </Link>
              <Link to="/dashboard/addpatient">
                <li className="text-white text-left font-semibold p-4">
                  Add new Patient
                </li>
              </Link>
              <Link to="/dashboard/addvitals">
                <li className="text-white text-left font-semibold p-4">
                  Add Vital Signs
                </li>
              </Link>
              <Link to="/dashboard/adddiagnosis">
                <li className="text-white text-left font-semibold p-4">
                  Add Diagnosis
                </li>
              </Link>
            </ul>
          </div>
          <div className="flex flex-col w-5/6 mx-5 my-4 bg-gray-50 ">
            <div>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
