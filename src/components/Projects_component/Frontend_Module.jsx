import React, { useState } from "react";
import {
  ShoppingCart,
  Package,
  CreditCard,
  Clock,
  Database,
  Layers,
  Lock,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

export default function Frontend_Module() {
  const [expandedFrontend, setExpandedFrontend] = useState(null);

  const frontendModules = [
    {
      id: 1,
      title: "User Authentication Module",
      icon: Lock,
      color: "from-blue-500 to-cyan-500",
      description:
        "Handles user registration, login, and authentication, ensuring secure access to user accounts and personalized experiences.",
      features: [
        "User Registration",
        "Login / Logout",
        "Password Recovery",
        "Session Management",
      ],
    },
    {
      id: 2,
      title: "Product Management Module",
      icon: Package,
      color: "from-purple-500 to-pink-500",
      description:
        "Manages the entire product lifecycle from creation to inventory tracking for efficient control and smooth user experience.",
      features: [
        "Product Creation & Editing",
        "Category Management",
        "Inventory Tracking",
        "Price Management",
        "Search & Filter Options",
        "Product Reviews & Ratings",
      ],
    },
    {
      id: 3,
      title: "Shopping Cart Module",
      icon: ShoppingCart,
      color: "from-orange-500 to-red-500",
      description:
        "Add, remove, and manage items with real-time price calculations.",
    },
    {
      id: 4,
      title: "Order Tracking and History Module",
      icon: Clock,
      color: "from-green-500 to-teal-500",
      description:
        "Track orders in real-time and view complete purchase history.",
    },
  ];

  const ModuleCard = ({ module, isExpanded, onToggle, type }) => {
    const Icon = module.icon;

    return (
      <div
        className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
        onClick={onToggle}
      >
        <div
          className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
        />

        <div className="relative p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
              >
                <Icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                  {module.title}
                </h3>
              </div>
            </div>
            <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
              {isExpanded ? (
                <ChevronUp className="w-5 h-5" />
              ) : (
                <ChevronDown className="w-5 h-5" />
              )}
            </div>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              isExpanded ? "max-h-full mt-4" : "max-h-0"
            }`}
          >
            <p className="text-gray-600 text-[16px] leading-relaxed">
              {module.description}
            </p>
            <ul className="text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
              {module.features?.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-fit bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-8 pb-5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Frontend Modules */}
        <div className="mb-16">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-800">
              Frontend Modules
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {frontendModules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                isExpanded={expandedFrontend === module.id}
                onToggle={() =>
                  setExpandedFrontend(
                    expandedFrontend === module.id ? null : module.id
                  )
                }
                type="frontend"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
