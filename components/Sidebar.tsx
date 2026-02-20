"use client";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-900/80 backdrop-blur-md border-r border-gray-800 p-6 hidden lg:block">
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
    </aside>
  );
}