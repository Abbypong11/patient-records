import React, { useState } from "react";

const AddVitalSigns = () => {
  const [pressure, setPressure] = useState("");
  const [temperature, setTemperature] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");

  return (
    <div className="flex flex-col space-y-4">
      <h1 className="text-2xl font-bold mb-4">Vitals</h1>
      <div className="flex space-x-4">
        <div className="flex items-center pb-5">
          <label htmlFor="pressure" className="mr-2">
            Blood Pressure:
          </label>
          <input
            type="text"
            id="pressure"
            value={pressure}
            onChange={(e) => setPressure(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="temperature" className="mr-2">
            Temperature:
          </label>
          <input
            type="text"
            id="temperature"
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </div>
      </div>
      <div className="flex space-x-4">
        <div className="flex items-center">
          <label htmlFor="weight" className="mr-2">
            Weight:
          </label>
          <input
            type="text"
            id="weight"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </div>
        <div className="flex items-center">
          <label htmlFor="height" className="mr-2">
            Height:
          </label>
          <input
            type="text"
            id="height"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="border border-gray-400 px-2 py-1 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default AddVitalSigns;
