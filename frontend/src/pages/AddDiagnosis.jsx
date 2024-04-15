import React, { useState } from 'react';

const AddDiagnosis = () => {
  const [diagnosisDetails, setDiagnosisDetails] = useState({
    diagnosis: '',
    patientId: '',
    summary: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiagnosisDetails({
      ...diagnosisDetails,
      [name]: value,
    });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Diagnosis</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="mb-4">
          <label htmlFor="patientId" className="block text-gray-700 font-bold mb-2">Patient ID:</label>
          <input
            type="text"
            id="patientId"
            name="patientId"
            value={diagnosisDetails.patientId}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
            required
          />
        </div>
        <div className="mb-4 col-span-2">
          <label htmlFor="summary" className="block text-gray-700 font-bold mb-2">Summary:</label>
          <textarea
            id="summary"
            name="summary"
            value={diagnosisDetails.summary}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            required
          ></textarea>
        </div>
      </div>
    </div>
  );
};

export default AddDiagnosis;
