import React from "react";
import { Link } from "react-router-dom";

const Dash = () => {
  const cards = [
    {
      title: "Patients",
      description: "List of All Patients",
      color: "bg-red-500",
      link: "/dashboard/patients",
    },
    {
      title: "Vital Signs",
      description: "All Patients Vitals",
      color: "bg-blue-500",
      link: "/dashboard/addvitals",
    },
    {
      title: "Diagnosis",
      description: "All Patients Diagnosis",
      color: "bg-green-500",
      link: "/dashboard/adddiagnosis",
    },
  ];

  return (
    <div className="flex flex-wrap justify-center items-center">
      {cards.slice(0, 3).map((card, index) => (
        <div
          key={index}
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 p-2"
        >
          <Link to={card.link} className="w-full">
            <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden transition duration-300 transform hover:scale-105 mt-7">
              <div className={`h-12 ${card.color} rounded-t-lg`}></div>
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            </div>
          </Link>
        </div>
      ))}
      <div className="mt-8">
        <img
          src="https://cdn.pixabay.com/photo/2014/12/10/20/56/medical-563427_640.jpg"
          alt="pic"
          className="w-full mx-auto"
        />
      </div>
    </div>
  );
};

export default Dash;
