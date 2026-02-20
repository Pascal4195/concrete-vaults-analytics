"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from "../components/Sidebar";
import * as Tabs from "@radix-ui/react-tabs";
import { Menu, X } from "lucide-react";  // ← new imports for icons

// ... (keep tvlData and vaults arrays the same)

export default function Home() {
  const [search, setSearch] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);  // ← new state for mobile menu

  const filteredVaults = vaults.filter(vault =>
    vault.name.toLowerCase().includes(search.toLowerCase()) ||
    vault.chain.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen relative">
      {/* Mobile Hamburger Button */}
      <button
        onClick={() => setIsSidebarOpen(true)}
        className="fixed top-4 left-4 z-50 lg:hidden p-3 bg-gray-800 rounded-full text-white shadow-lg"
        aria-label="Open menu"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar – always visible on lg+, slide-in overlay on mobile */}
      <aside
        className={`
          fixed inset-y-0 left-0 z-40 w-64 bg-gray-900/95 backdrop-blur-md border-r border-gray-800 p-6
          transform transition-transform duration-300 ease-in-out
          lg:relative lg:translate-x-0 lg:z-auto
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Close button for mobile */}
        <button
          onClick={() => setIsSidebarOpen(false)}
          className="lg:hidden absolute top-4 right-4 text-gray-400 hover:text-white"
          aria-label="Close menu"
        >
          <X size={28} />
        </button>

        <SidebarContent />  {/* We'll move Sidebar content here – see below */}
      </aside>

      {/* Overlay backdrop when sidebar is open on mobile */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 z-30 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <main className="flex-1 container mx-auto p-4 md:p-8 pt-16 lg:pt-8">  {/* pt-16 for mobile top padding */}
        {/* ... rest stays the same: h1, Tabs.Root, Tabs.List, Tabs.Content ... */}

        {/* Your existing overview / vaults / other tab content here – no changes needed */}
      </main>
    </div>
  );
}

// Extract Sidebar content to reuse (avoids duplication)
function SidebarContent() {
  return (
    <>
      <h2 className="text-xl font-bold mb-6 text-purple-400">Chains</h2>
      <ul className="space-y-3">
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Ethereum</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Berachain</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Arbitrum</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Polygon</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Base</li>
      </ul>

      <h2 className="text-xl font-bold mt-10 mb-6 text-purple-400">Vault Types</h2>
      <ul className="space-y-3">
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Lending</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">Options</li>
        <li className="py-2 px-3 hover:bg-gray-800 rounded cursor-pointer">LP Farming</li>
      </ul>
    </>
  );
}