import React, { useState } from 'react';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [profession, setProfession] = useState('');
  const [email, setEmail] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(URL.createObjectURL(file));
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">

      {image && (
        <img
          className="w-32 h-32 rounded-full mb-4"
          src={image}
          alt="Profile"
        />
      )}
      {!image && (
        <div className="w-32 h-32 bg-gray-300 rounded-full mb-4"></div>
      )}
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4"
      />
      <input
        type="text"
        placeholder="FirstName"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
      <input
        type="text"
        placeholder="LastName"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border rounded-md mb-4"
        />
      <input
        type="text"
        placeholder="Profession"
        value={profession}
        onChange={(e) => setProfession(e.target.value)}
        className="w-full p-2 border rounded-md mb-4"
      />
    </div>
  );
};

export default Profile;