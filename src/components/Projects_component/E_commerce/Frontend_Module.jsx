import { useState } from "react";
import data from "../../../data/Data.json";
import ModuleCard from "../ModuleCard";

export default function Frontend_Module() {
  const [expandedFrontend, setExpandedFrontend] = useState(null);
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
            {data.ecommerce.frontendModule.map((module) => (
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
