import { useState } from "react";
import data from "../../../data/Data.json";
import ModuleCard from "../ModuleCard";

export default function Backend_Module() {
  const [expandedBackend, setExpandedBackend] = useState(null);

  return (
    <div className="min-h-fit bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-3 mb-8">
          <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
          <h2 className="text-3xl font-bold text-gray-800">Backend Modules</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
          {data.ecommerce.backendModule.map((module) => (
            <ModuleCard
              key={module.id}
              module={module}
              isExpanded={expandedBackend === module.id}
              onToggle={() =>
                setExpandedBackend(
                  expandedBackend === module.id ? null : module.id
                )
              }
              type="frontend"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
