import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllPatients = ({ patients, onDelete }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6 py-6">
        <h1 className="text-4xl font-bold">List of Patients</h1>
        <Link to="/addpatient" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Patient
        </Link>
      </div>
      <table className="w-full">
        <thead>
          <tr>
            <th className="border border-gray-400 px-4 py-2">Patient ID</th>
            <th className="border border-gray-400 px-4 py-2">Full Name</th>
            <th className="border border-gray-400 px-4 py-2">Date of Birth</th>
            <th className="border border-gray-400 px-4 py-2">Gender</th>
            <th className="border border-gray-400 px-4 py-2">Address</th>
            <th className="border border-gray-400 px-4 py-2">Phone Number</th>
            <th className="border border-gray-400 px-4 py-2">Actions</th>
          </tr>
        </thead>
        {/* <tbody>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td className="border border-gray-400 px-4 py-2">{patient.id}</td>
              <td className="border border-gray-400 px-4 py-2">{patient.name}</td>
              <td className="border border-gray-400 px-4 py-2">{patient.dateOfBirth}</td>
              <td className="border border-gray-400 px-4 py-2">{patient.gender}</td>
              <td className="border border-gray-400 px-4 py-2">{patient.address}</td>
              <td className="border border-gray-400 px-4 py-2">{patient.phoneNumber}</td>
              <td className="border border-gray-400 px-4 py-2">
                <Link to={`/edit/${patient.id}`} className="text-blue-500 hover:underline mr-2">
                  Edit
                </Link>
                <button onClick={() => onDelete(patient.id)} className="text-red-500 hover:underline">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody> */}
      </table>
    </div>
  );
};

export default ViewAllPatients;