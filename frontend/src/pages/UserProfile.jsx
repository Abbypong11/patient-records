import React from "react";
import UserProfileCard from "../components/userProfileCards";
import { Link } from "react-router-dom";


export default function UserProfile() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex h-full">
        <div className="flex w-1/6 h-full pt-20 bg-blue-600">
          <ul>
          <Link to="/patients">  <button className="text-white text-left font-semibold p-4">
              Patients Records
            </button></Link>
        <Link to="/addpatient">    <button className="text-white text-left font-semibold p-4">
              Add new Patient
            </button></Link>
          <Link to="/">  <button className="text-white text-left font-semibold p-4">
              Log Out
            </button></Link>
          </ul>
        </div>
        <div className="flex flex-col w-5/6 mx-5 my-4 bg-gray-50 ">
          <div>
            <UserProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
