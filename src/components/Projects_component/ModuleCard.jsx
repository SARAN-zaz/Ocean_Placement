"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Database, Layers, Lock } from "lucide-react";
import { Package, ShoppingCart, Clock } from "lucide-react";

// Combine icons here (you can extend this anytime)
const iconsMap = {
  Database,
  Layers,
  Lock,
  Package,
  ShoppingCart,
  Clock,
};

export default function ModuleCard({ module, isExpanded, onToggle, type }) {
  const Icon = iconsMap[module.icon];

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      {/* Hover Overlay Background */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {/* Icon */}
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
            >
              <Icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300">
                {module.title}
              </h3>
            </div>
          </div>

          {/* Toggle Arrow */}
          <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
            {isExpanded ? (
              <ChevronUp className="w-5 h-5" />
            ) : (
              <ChevronDown className="w-5 h-5" />
            )}
          </div>
        </div>

        {/* Expanded Content */}
        <div
          className={`overflow-hidden transition-all duration-300 ${
            isExpanded ? "max-h-full mt-4" : "max-h-0"
          }`}
        >
          {/* Description */}
          <p className="text-gray-600 text-[16px] leading-relaxed">
            {module.description}
          </p>

          {/* Feature List */}
          <ul className="text-gray-600 text-[15px] leading-relaxed list-disc pl-5">
            {module.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
