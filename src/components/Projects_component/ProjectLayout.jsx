"use client";

import { useState } from "react";
// import { ShoppingCart } from "lucide-react"; 
import ModuleCard from "./ModuleCard";

export default function ProjectLayout({ header = "Project", icon: Icon, about = {}, frontend = [], backend = [] }) {
  const [expandedFrontend, setExpandedFrontend] = useState(null);
  const [expandedBackend, setExpandedBackend] = useState(null);

  const RenderIcon = Icon || ShoppingCart;

  return (
    <div className="w-full">
      {/* Header */}
      <section className="bg-linear-to-r from-[#034E72] to-[#00AEFF] py-6 px-10 text-white text-2xl flex items-center gap-4">
        <h2>{header}</h2>
      </section>

      {/* About */}
      <div className="min-h-fit bg-gradient-to-br from-gray-100 via-blue-50 to-purple-100 pt-12 pb-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1200px] w-[80%] mx-auto">
          <div className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-center lg:text-left">
                <div className="inline-block mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-2xl opacity-20 animate-pulse" />
                    <div className="relative bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full p-4">
                      <RenderIcon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>

                <h1 className="text-5xl font-bold mb-4 ">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 whitespace-normal break-words">
                    {about.title || header}
                  </span>
                </h1>

                <p className="text-gray-600 text-lg leading-relaxed">
                  {about.description || "No description provided."}
                </p>
              </div>

              <div className="relative">
                <div className="relative bg-white rounded-xl shadow-2xl transform hover:scale-105 transition-transform duration-300 mt-6">
                  {about.image ? (
                    <img
                      src={`${about.image}`}
                      alt={about.title || header}
                      className="w-full h-auto rounded-xl shadow-lg"
                    />
                  ) : (
                    <div className="w-full h-48 flex items-center justify-center text-gray-400">
                      No image
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frontend Modules */}
      <div className="min-h-fit bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 pt-8 pb-5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-blue-600 to-purple-600 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-800">Frontend Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
            {frontend && frontend.length ? (
              frontend.map((module, index) => (
                <ModuleCard
                  key={index}
                  module={module}
                  isExpanded={expandedFrontend === index}
                  onToggle={() =>
                    setExpandedFrontend(expandedFrontend === index ? null : index)
                  }
                  type="frontend"
                />
              ))
            ) : (
              <p className="text-gray-600">No frontend modules.</p>
            )}
          </div>
        </div>
      </div>

      {/* Backend Modules */}
      <div className="min-h-fit bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-800">Backend Modules</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {backend && backend.length ? (
              backend.map((module, index) => (
                <ModuleCard
                  key={index}
                  module={module}
                  isExpanded={expandedBackend === index}
                  onToggle={() =>
                    setExpandedBackend(expandedBackend === index ? null : index)
                  }
                  type="backend"
                />
              ))
            ) : (
              <p className="text-gray-600">No backend modules.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
