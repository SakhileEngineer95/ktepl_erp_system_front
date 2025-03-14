import React, { useState } from 'react';
import { Menu, Package, Activity, Layers } from 'lucide-react';

export default function MainPage() {
  const [activeSection, setActiveSection] = useState('Primary Packaging Scrap');

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-lg p-4 flex flex-col">
        <div className="flex items-center justify-center mb-6">
          <img
            src="https://www.kelloggtolarameswatini.com/images/kt-logo-sm.png"
            alt="Noodle Manufacturing Logo"
            className="h-12"
          />
        </div>
        <nav className="space-y-4">
          <button onClick={() => setActiveSection('Primary Packaging Scrap')} className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md w-full">
            <Package className="w-5 h-5" />
            <span>Primary Packaging Scrap</span>
          </button>
          <button onClick={() => setActiveSection('Primary Packaging Machine')} className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md w-full">
            <Activity className="w-5 h-5" />
            <span>Primary Packaging Machine</span>
          </button>
          <button onClick={() => setActiveSection('Primary Packaging Monitoring')} className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-200 rounded-md w-full">
            <Layers className="w-5 h-5" />
            <span>Primary Packaging Monitoring</span>
          </button>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-2xl font-bold text-gray-800">{activeSection}</h1>
        <p className="mt-4 text-gray-600">Content for {activeSection} will be displayed here.</p>
      </main>
    </div>
  );
}
