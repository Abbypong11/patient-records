import React from "react";
import UserProfileCard from "../components/userProfileCards";


export default function UserProfile() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="flex h-full">
        <div className="flex w-1/6 h-full pt-20 bg-blue-600">
          <ul>
            <button className="text-white text-left font-semibold p-4">
              Patients Records
            </button>
            <button className="text-white text-left font-semibold p-4">
              Add new Patient
            </button>
            <button className="text-white text-left font-semibold p-4">
              Log Out
            </button>
          </ul>
        </div>
        <div className="flex flex-col w-5/6 mx-5 my-4 ">
          <div>
            <UserProfileCard />
          </div>
        </div>
      </div>
    </div>
  );
}
