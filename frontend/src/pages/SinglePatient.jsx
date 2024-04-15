import React, { useState } from 'react';

const SinglePatient = () => {
  const [patientInfo, setPatientInfo] = useState({
    patientId: '',
    name: '',
    dateOfBirth: '',
    gender: '',
    address: '',
    phoneNumber: '',
    emergencyContact: '',
  });

  const [vitalSigns, setVitalSigns] = useState({
    temperature: '',
    pressure: '',
    weight: '',
    height: '',
  });

  const [diagnosis, setDiagnosis] = useState({
    summary: '',
  });

  const handlePatientInfoChange = (e) => {
    const { name, value } = e.target;
    setPatientInfo({
      ...patientInfo,
      [name]: value,
    });
  };

  const handleVitalSignsChange = (e) => {
    const { name, value } = e.target;
    setVitalSigns({
      ...vitalSigns,
      [name]: value,
    });
  };

  const handleDiagnosisChange = (e) => {
    const { name, value } = e.target;
    setDiagnosis({
      ...diagnosis,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-8">
      <section>
        <h1 className="text-2xl font-bold mb-8">Patient Information</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="patientId" className="block text-gray-700 font-bold mb-2">Patient ID:</label>
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
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={patientInfo.name}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="dateOfBirth" className="block text-gray-700 font-bold mb-2">Date of Birth:</label>
            <input
              type="date"
              id="dateOfBirth"
              name="dateOfBirth"
              value={patientInfo.dateOfBirth}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender:</label>
            <select
              id="gender"
              name="gender"
              value={patientInfo.gender}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            >
            
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="address" className="block text-gray-700 font-bold mb-2">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={patientInfo.address}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNumber" className="block text-gray-700 font-bold mb-2">Phone Number:</label>
            <input
              type="text"
              id="phoneNumber"
              name="phoneNumber"
              value={patientInfo.phoneNumber}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="emergencyContact" className="block text-gray-700 font-bold mb-2">Emergency Contact:</label>
            <input
              type="text"
              id="emergencyContact"
              name="emergencyContact"
              value={patientInfo.emergencyContact}
              onChange={handlePatientInfoChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
        </div>
  
      </section>

      <hr className="my-8" />

      <section>
        <h1 className="text-2xl font-bold mb-8">Vital Signs</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="mb-4">
            <label htmlFor="temperature" className="block text-gray-700 font-bold mb-2">Temperature (°C):</label>
            <input
              type="text"
              id="temperature"
              name="temperature"
              value={vitalSigns.temperature}
              onChange={handleVitalSignsChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="pressure" className="block text-gray-700 font-bold mb-2">Blood Pressure (mmHg):</label>
            <input
              type="text"
              id="pressure"
              name="pressure"
              value={vitalSigns.pressure}
              onChange={handleVitalSignsChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="weight" className="block text-gray-700 font-bold mb-2">Weight (kg):</label>
            <input
              type="text"
              id="weight"
              name="weight"
              value={vitalSigns.weight}
              onChange={handleVitalSignsChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              
            />
          </div>
          <div className="mb-4">
            <label htmlFor="height" className="block text-gray-700 font-bold mb-2">Height (cm):</label>
            <input
              type="text"
              id="height"
              name="height"
              value={vitalSigns.height}
              onChange={handleVitalSignsChange}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
              required
            />
          </div>
        </div>
      </section>

      <hr className="my-8" />

      <section>
        <h1 className="text-2xl font-bold mb-8">Diagnosis</h1>
        <div className="mb-4">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={diagnosis.summary}
            onChange={handleDiagnosisChange}
            className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            required
          ></textarea>
        </div>
      </section>
    </div>
  );
};

export default SinglePatient;