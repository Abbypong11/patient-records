import React, { useState } from "react";
import Button from "@mui/material/Button";

const AddPatient = () => {
  const [patientInfo, setPatientInfo] = useState({
    patientId: "",
    name: "",
    dateOfBirth: "",
    gender: "",
    address: "",
    phoneNumber: "",
    emergencyContact: "",
  });

  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <section>
        <h1 className="text-2xl font-bold mb-4">Patient Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="patientId"
              className="block text-gray-700 font-bold mb-2"
            >
              Patient ID:
            </label>
            <input
              type="text"
              id="patientId"
              name="patientId"
              value={patientInfo.patientId}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-bold mb-2"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={patientInfo.name}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="dateOfBirth"
              className="block text-gray-700 font-bold mb-2"
            >
              Date of Birth:
            </label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={patientInfo.dateOfBirth}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="gender"
              className="block text-gray-700 font-bold mb-2"
            >
              Gender:
            </label>
            <select
              id="gender"
              name="gender"
              value={patientInfo.gender}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            >
              <option value="">Select</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-gray-700 font-bold mb-2"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={patientInfo.address}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Phone Number:
            </label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={patientInfo.phoneNumber}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="emergencyContact"
              className="block text-gray-700 font-bold mb-2"
            >
              Emergency Contact:
            </label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              value={patientInfo.emergencyContact}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
      </section>

      <div>
        <Button
          style={{ marginBottom: "20px" }}
          sx={{ bgcolor: "#1d4ed8", width: "100%" }}
          variant="contained"
        >
          Add Patient
        </Button>
      </div>
    </div>
  );
};

export default AddPatient;
