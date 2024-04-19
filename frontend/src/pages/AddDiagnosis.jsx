import React, { useState } from "react";
import { Button } from "@mui/material";

const AddDiagnosis = () => {
  const [diagnosisDetails, setDiagnosisDetails] = useState({
    patientId: "",
    summary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDiagnosisDetails({
      ...diagnosisDetails,
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
          value={diagnosisDetails.patientId}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
          required
        >
          <option value="patientId">Patient Name</option>
        </select>
      </div>
      <section>
        <h1 className="text-2xl font-bold mb-8">Diagnosis</h1>
        <div className="mb-4">
          <label
            htmlFor="summary"
            className="block text-gray-700 font-bold mb-2"
          >
            Summary:
          </label>
          <textarea
            id="summary"
            name="summary"
            value={diagnosisDetails.summary}
            onChange={handleChange}
            className="w-full h-32 border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 resize-none"
            required
          ></textarea>
        </div>
      </section>

      <div>
        <Button
          style={{ marginBottom: "20px" }}
          sx={{ bgcolor: "#1d4ed8", width: "100%" }}
          variant="contained"
        >
          Add Diagnosis
        </Button>
      </div>
    </div>
  );
};

export default AddDiagnosis;
