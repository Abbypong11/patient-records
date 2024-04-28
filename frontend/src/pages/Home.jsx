import React from "react";
import { Link } from "react-router-dom";
// import BackgroundImage from "../assets/doctorhall.jpg";

export default function HomePage() {
  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <img
        src="https://media.istockphoto.com/id/921644524/photo/medical-student-textbook-and-black-stethoscope.jpg?s=612x612&w=0&k=20&c=tSCkx5QJnWCjk1ft62omnfLcikvJ1_wEnDeydmDwQcw="
        alt="background-pic"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Black Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"></div>

      {/* Transparent Navbar */}
      <nav className="absolute top-0 left-0 w-full flex justify-between p-6">
        <h1 className="text-white font-extrabold text-4xl italic">MEDSTORE</h1>
        <ul className="flex items-center">
          <li>
            <Link
              to="/register"
              className="text-white text-2xl italic font-bold mr-2 hover:text-orange-500 transition duration-300"
            >
              Register
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className="text-white text-2xl italic font-bold ml-4 hover:text-orange-500 transition duration-300"
            >
              Log In
            </Link>
          </li>
        </ul>
      </nav>

      {/* Content */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-4xl md:text-6xl lg:text-6xl mb-10">
          Welcome to MedStore{" "}
        </h1>

        <p className="text-2xl md:text-4xl lg:text-4xl">
          Patients Records Management System
        </p>

        <p className="text-xl md:text-3xl lg:text-3xl mt-7">
          Please Login or Register if new here
        </p>


    
      </div>
    </div>
  );
}


// import { Link } from 'react-router-dom';

// const HomePage = () => {
//   return (
//     <div className="bg-gray-100 min-h-screen flex flex-col md:flex-row items-center">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center justify-between">
//           <div className="md:w-1/2 mb-6 md:mb-0 md:pr-8">
//             <h1 className="text-2xl md:text-4xl font-bold mb-4">Welcome to MEDSTORE</h1>
//             <h2 className="text-1xl md:text-3xl font-bold mb-4">Patients Records <br /> Management System</h2>
//             <p className="text-base md:text-lg"></p>
//           </div>
//           <div className="md:w-1/2 md:text-right mt-4 md:mt-0">
//             <div className="flex justify-end items-center">
//               <Link to="/register" className="text-black hover:text-gray-800 mr-4">Sign Up</Link>
//               <Link to="/login" className="text-black hover:text-gray-800">Login</Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomePage;
