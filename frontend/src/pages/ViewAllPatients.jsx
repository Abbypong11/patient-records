import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../components/search";

const ViewAllPatients = ({ onDelete }) => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/patients"); 
        console.log(response);
        setPatients(response.data);
      } catch (error) {
        console.error("Error fetching patient data:", error);
      }
    };

    fetchPatients();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6 py-6">
        <h1 className="text-4xl font-bold">Patients Records</h1>
        <Search className="pt-40" />
        <Link
          to="/dashboard/addpatient"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded"
        >
          Add Patient
        </Link>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">Full Name</th>
              <th className="border border-gray-400 px-4 py-2">
                Date of Birth
              </th>
              <th className="border border-gray-400 px-4 py-2">Gender</th>
              <th className="border border-gray-400 px-4 py-2">Address</th>
              <th className="border border-gray-400 px-4 py-2">Phone Number</th>
              <th className="border border-gray-400 px-4 py-2">
                Emergency Contact
              </th>
              <th className="border border-gray-400 px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="border border-gray-400 px-4 py-2">
                  <Link to="/dashboard/patient">{patient.name}</Link>
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {patient.dateOfBirth}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {patient.gender}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {patient.address}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {patient.phoneNumber}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  {patient.emergencyContact}
                </td>
                <td className="border border-gray-400 px-4 py-2">
                  <Link
                    to={`/edit/${patient._id}`}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => onDelete(patient._id)}
                    className="text-red-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllPatients;
