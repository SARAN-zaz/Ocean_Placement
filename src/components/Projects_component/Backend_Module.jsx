import { useState } from "react";
import { LuUsers } from "react-icons/lu";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { RiDatabase2Fill } from "react-icons/ri";
import { FaLayerGroup } from "react-icons/fa6";
import { LuShield } from "react-icons/lu";


// Array of Module Data
const moduleData = [
  {
    id: 5,
    title: "Database Management Module",
    icon: <RiDatabase2Fill size={30} className="text-[#0E90CF]" />,
    description:
      "Handles user registration, login, and authentication, ensuring secure access to user accounts and personalized experiences.",
    features: [
      "User Registration",
      "Login/Logout",
      "Password Recovery",
      "Session Management",
    ],
  },
  {
    id: 6,
    title: "API Layers",
    icon: <FaLayerGroup size={30} className="text-[#0E90CF]" />,
    description:
      "Manages student placement activities, job postings, and company interactions efficiently.",
    features: [
      "Job Postings",
      "Application Tracking",
      "Interview Scheduling",
      "Reports Generation",
    ],
  },
  {
    id: 7,
    title: "User Authentication and Authorization Module    ",
    icon: <LuShield size={30} className="text-[#0E90CF]" />,
    description:
      "Provides administrative tools for managing users, permissions, and system configurations.",
    features: [
      "User Role Management",
      "System Configuration",
      "Data Analytics Dashboard",
      "Security Controls",
    ],
  },
  
];

export default function ModuleList() {
  const [openModule, setOpenModule] = useState(null);

  const toggleModule = (id) => {
    setOpenModule(openModule === id ? null : id);
  };

  return (
    <div className="mx-auto w-[80%] max-w-[1200px] pb-12 space-y-6">
         <div className="text-[#00AEFF] text-2xl mt-10">
            <h2>Backend Module :</h2>
        </div>
      {moduleData.map((module) => {
        const isOpen = openModule === module.id;

        return (
            
          <div
            key={module.id}
            className="border border-[#00AEFF] rounded-lg shadow-sm bg-white transition-all duration-300"
          >
            
            {/* Header */}
            <div
              onClick={() => toggleModule(module.id)}
              className={`flex items-center justify-between px-6 py-6 rounded-lg cursor-pointer transition-all duration-300 ${
                isOpen ? "bg-[#D9F1FF]" : "bg-white"
              }`}
            >
              <div className="flex items-center gap-6">
                <div className="bg-[#a5dbfa] rounded-xl shadow-lg w-12 h-12 flex items-center justify-center">
                  {module.icon}
                </div>
                <h2 className="text-[#0E90CF] font-semibold text-lg">
                  {module.title}
                </h2>
              </div>
              <span className="text-gray-500 text-lg">
                {isOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </div>

            {/* Collapsible Content */}
            {isOpen && (
              <>
                <div className="p-4 text-gray-700 text-[18px] transition-all duration-300">
                  {module.description}
                </div>
               <div className="p-10 sm:p-10 md:p-10 lg:p-10">
                <div className="bg-[#D9F1FF] mb-4 p-4 rounded-lg shadow-sm max-w-[720px] mx-auto border-l-12 border-[#00AEFF]">
                  <h3 className="text-[#00AEFF] font-semibold text-center mb-2">
                    Key Features
                  </h3>
                  <ul className="list-disc list-inside text-gray-700 space-y-1 ml-10">
                    {module.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                </div>
              </>
            )}
          </div>
        );
      })}
    </div>
  );
}
