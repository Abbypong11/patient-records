import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <div className="relative h-screen overflow-hidden">
        <div className="flex h-full">
          <div className="flex w-1/6 h-full pt-20 bg-blue-600">
            <ul>
              <Link to="/dashboard/patients">
                {" "}
                <button className="text-white text-left font-semibold p-4">
                  Patients Records
                </button>
              </Link>
              <Link to="/dashboard/addpatient">
                <button className="text-white text-left font-semibold p-4">
                  Add new Patient
                </button>
              </Link>
              <Link to="/dashboard/addvitals">
                <button className="text-white text-left font-semibold p-4">
                  Add Vital Signs
                </button>
              </Link>
              <Link to="/dashboard/adddiagnosis">
                <button className="text-white text-left font-semibold p-4">
                  Add Diagnosis
                </button>
              </Link>
              <Link to="/">
                <button className="text-white text-left font-semibold p-4">
                  Log Out
                </button>
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
