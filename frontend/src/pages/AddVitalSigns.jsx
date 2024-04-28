import React, { useState } from "react";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AddVitalSigns = () => {
  const navigate=useNavigate()
  const handleNavigate=()=>{
    navigate('/dashboard/patients')
  }
  const [vitalSignsInfo, setVitalSignsInfo] = useState({
    patientId: "",
    temperature: "",
    bloodPressure: "",
    weight: "",
    height: "",
  });

  const handleVitalSignsInfoChange = (e) => {
    const { name, value } = e.target;
    setVitalSignsInfo({
      ...vitalSignsInfo,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4 bg-gray-50">
      <div className="mb-4">
        <label
          htmlFor="patientId"
          className="block text-gray-700 font-bold mb-2"
        >
          Select Patient:
        </label>
        <select
          id="patientId"
          name="patientId"
          value={vitalSignsInfo.patientId}
          onChange={handleVitalSignsInfoChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          required
        >
          <option value="patiendId">Jade Nana</option>
          <option value="patiendId">Kwame Nkansah</option>
        </select>
      </div>
      <section>
        <h1 className="text-2xl font-bold mb-8">Vital Signs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label
              htmlFor="temperature"
              className="block text-gray-700 font-bold mb-2"
            >
              Temperature (°C):
            </label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={vitalSignsInfo.temperature}
              onChange={handleVitalSignsInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="pressure"
              className="block text-gray-700 font-bold mb-2"
            >
              Blood Pressure (mmHg):
            </label>
            <input
              type="text"
              id="bloodPressure"
              name="bloodPressure"
              value={vitalSignsInfo.bloodPressure}
              onChange={handleVitalSignsInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="weight"
              className="block text-gray-700 font-bold mb-2"
            >
              Weight (kg):
            </label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={vitalSignsInfo.weight}
              onChange={handleVitalSignsInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="height"
              className="block text-gray-700 font-bold mb-2"
            >
              Height (cm):
            </label>
            <input
              type="text"
              id="height"
              name="height"
              value={vitalSignsInfo.height}
              onChange={handleVitalSignsInfoChange}
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
          onClick={handleNavigate}
        >
          Add Vital Signs
        </Button>
      </div>
    </div>
  );
};

export default AddVitalSigns;
