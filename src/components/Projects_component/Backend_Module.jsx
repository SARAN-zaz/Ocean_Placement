import React, { useState } from 'react';
import { Database, Layers, Lock, ChevronDown, ChevronUp } from 'lucide-react';

export default function Backend_Module() {
const [expandedBackend, setExpandedBackend] = useState(null);

  const backendModules = [
    {
      id: 1,
      title: 'Database Management Module',
      icon: Database,
      color: 'from-indigo-500 to-blue-500',
      description: 'Handles user registration, login, and authentication, ensuring secure access to user accounts and personalized experiences.'
    },
    {
      id: 2,
      title: 'API Layers',
      icon: Layers,
      color: 'from-cyan-500 to-teal-500',
      description: 'RESTful APIs connecting frontend with backend services.'
    },
    {
      id: 3,
      title: 'User Authentication and Authorization Module',
      icon: Lock,
      color: 'from-violet-500 to-purple-500',
      description: 'JWT-based authentication with role-based access control.'
    }
  ];

  const ModuleCard = ({ module, isExpanded, onToggle, type }) => {
    const Icon = module.icon;
    return(
         <div 
            className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden cursor-pointer"
            onClick={onToggle}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${module.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
            
            <div className="relative p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center shadow-lg transform group-hover:scale-110 transition-transform duration-300`}>
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
              
              <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-24 mt-4' : 'max-h-0'}`}>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {module.description}
                </p>
              </div>
            </div>
          </div>
        );
      };
    return (
       <div className="min-h-fit bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-3 mb-8">
            <div className="w-1 h-8 bg-gradient-to-b from-purple-600 to-pink-600 rounded-full" />
            <h2 className="text-3xl font-bold text-gray-800">Backend Modules</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-6">
            {backendModules.map((module) => (
              <ModuleCard
                key={module.id}
                module={module}
                isExpanded={expandedBackend === module.id}
                onToggle={() => setExpandedBackend(expandedBackend === module.id ? null : module.id)}
                type="backend"
              />
            ))}
          </div>
          </div>
        </div> 
    )
  };












  