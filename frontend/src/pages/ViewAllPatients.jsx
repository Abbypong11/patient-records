import React from 'react';
import { Link } from 'react-router-dom';

const ViewAllPatients = ({ patients, onDelete }) => {
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-6 py-6">
        <h1 className="text-4xl font-bold">Patients Records</h1>
        <Link to="/addpatient" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add Patient
        </Link>
      </div>
      <div className="overflow-x-auto">
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
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">234</th>
              <th className="border border-gray-400 px-4 py-2">Jane Doe</th>
              <th className="border border-gray-400 px-4 py-2">04/04/85</th>
              <th className="border border-gray-400 px-4 py-2">female</th>
              <th className="border border-gray-400 px-4 py-2">Accra</th>
              <th className="border border-gray-400 px-4 py-2">7746352</th>
              <th className="border border-gray-400 px-4 py-2"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">204</th>
              <th className="border border-gray-400 px-4 py-2">Jane Doe</th>
              <th className="border border-gray-400 px-4 py-2">04/04/85</th>
              <th className="border border-gray-400 px-4 py-2">female</th>
              <th className="border border-gray-400 px-4 py-2">Accra</th>
              <th className="border border-gray-400 px-4 py-2">7746352</th>
              <th className="border border-gray-400 px-4 py-2"></th>
            </tr>
          </thead>
          <thead>
            <tr>
              <th className="border border-gray-400 px-4 py-2">1234</th>
              <th className="border border-gray-400 px-4 py-2">John Doe</th>
              <th className="border border-gray-400 px-4 py-2">01/01/99</th>
              <th className="border border-gray-400 px-4 py-2">male</th>
              <th className="border border-gray-400 px-4 py-2">Tema</th>
              <th className="border border-gray-400 px-4 py-2">1234</th>
              <th className="border border-gray-400 px-4 py-2"></th>
            </tr>
          </thead>
          {/* <tbody>
            {patients.map((patient) => (
              <tr key={patient._id}>
                <td className="border border-gray-400 px-4 py-2">{patient._id}</td>
                <td className="border border-gray-400 px-4 py-2">{patient.name}</td>
                <td className="border border-gray-400 px-4 py-2">{patient.dateOfBirth}</td>
                <td className="border border-gray-400 px-4 py-2">{patient.gender}</td>
                <td className="border border-gray-400 px-4 py-2">{patient.address}</td>
                <td className="border border-gray-400 px-4 py-2">{patient.phoneNumber}</td>
                <td className="border border-gray-400 px-4 py-2">
                  <Link to={`/edit/${patient._id}`} className="text-blue-500 hover:underline mr-2">
                    Edit
                  </Link>
                  <button onClick={() => onDelete(patient._id)} className="text-red-500 hover:underline">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default ViewAllPatients;