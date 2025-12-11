"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { Database, 
         Layers, 
         Lock,
         Package, 
         ShoppingCart, 
         Clock, 
         BarChart3, 
         CircleCheck,
         ClipboardCheck,
         ListCheck,
         FolderGit2,
         LayoutDashboard,
         ClipboardClock,
         UserPen,
         ShieldUser,
        LibraryBig,
        Logs } from "lucide-react";

// keys must match strings you use in Data.json like "Database", "Lock", "Package", "ShoppingCart", "Clock"
const iconsMap = {
  Database,
  Layers,
  Lock,
  Package,
  ShoppingCart,
  Clock,
  BarChart3,
  CircleCheck,
  ClipboardCheck,
  ListCheck ,
  FolderGit2,
  LayoutDashboard,
  ClipboardClock,
  UserPen,
  ShieldUser,
  LibraryBig,
  Logs       
  // add any more icons you reference in Data.json
};

export default function ModuleCard({ module, isExpanded, onToggle }) {
  const Icon = iconsMap[module.icon] || ShoppingCart;

  return (
    <div
      className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
      onClick={onToggle}
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${module.color || "from-gray-200 to-gray-400"} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
      />

      <div className="relative p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div
              className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color || "from-gray-400 to-gray-500"} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}
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
            {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
          </div>
        </div>

        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? "max-h-[900px] mt-4" : "max-h-0"}`}>
          <p className="text-gray-600 text-[16px] leading-relaxed">
            {module.description}
          </p>

          <ul className="text-gray-600 text-[15px] leading-relaxed list-disc pl-5 mt-3">
            {module.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
