import React, { useState } from "react";


const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPatients, setFilteredPatients] = useState([]);

  // Dummy patient data
  const patients = [
   
    // Add more patient data here
  ];

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter patients based on search query
    const filtered = patients.filter((patient) =>
      patient.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPatients(filtered);
  };

  return (
    <div>

      {/* Search input field */}
      <input
        type="text"
        placeholder="Search patients..."
        value={searchQuery}
        onChange={handleSearchInputChange}
        className="border border-gray-400 rounded-md px-4 py-2 mb-4"
      />

      {/* Display filtered patients or all patients if no search query */}
      <ul>
        {searchQuery === ""
          ? // Display all patients if no search query
            patients.map((patient) => <li key={patient.id}>{patient.name}</li>)
          : // Display filtered patients
            filteredPatients.map((patient) => (
              <li key={patient.id}>{patient.name}</li>
            ))}
      </ul>
    </div>
  );
};

export default Search;
