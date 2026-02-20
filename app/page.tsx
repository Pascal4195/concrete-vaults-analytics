"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from "../components/Sidebar";
import * as Tabs from "@radix-ui/react-tabs";

const tvlData = [
  { date: '2025-06', tvl: 300000000 },
  { date: '2025-09', tvl: 500000000 },
  { date: '2025-12', tvl: 800000000 },
  { date: '2026-01', tvl: 900000000 },
  { date: '2026-02', tvl: 690000000 },
];

// Hardcoded example vaults (real ones from Concrete app; addresses not included here for security - fetch dynamically later via SDK)
const vaults = [
  { name: "weETH Vault", chain: "Ethereum", tvl: "≈$500M+", apy: "10-15% + points", asset: "weETH" },
  { name: "WBTC Vault", chain: "Ethereum", tvl: "≈$100M+", apy: "8-12% + points", asset: "WBTC" },
  { name: "Stable USDT/USDe Vault", chain: "Ethereum / Stable", tvl: "≈$50M+", apy: "8-12%", asset: "USDT / USDe" },
  { name: "Berachain Vaults", chain: "Berachain", tvl: "≈$45M", apy: "Variable + points", asset: "Various" },
  { name: "Other Multi-Asset Vaults", chain: "Multi-chain", tvl: "≈$20M+", apy: "Variable", asset: "Mixed" },
];

export default function Home() {
  const [search, setSearch] = useState("");

  const filteredVaults = vaults.filter(vault =>
    vault.name.toLowerCase().includes(search.toLowerCase()) ||
    vault.chain.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex-1 container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Concrete Vaults Historical Analytics
        </h1>

        <Tabs.Root defaultValue="overview" className="w-full">
          <Tabs.List className="flex flex-wrap border-b border-gray-700 mb-6 gap-2">
            <Tabs.Trigger
              value="overview"
              className="px-5 py-3 text-base md:text-lg font-medium hover:bg-gray-800 rounded-t data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
            >
              Overview
            </Tabs.Trigger>
            <Tabs.Trigger
              value="vaults"
              className="px-5 py-3 text-base md:text-lg font-medium hover:bg-gray-800 rounded-t data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
            >
              Vault Selector
            </Tabs.Trigger>
            <Tabs.Trigger
              value="deep-dive"
              className="px-5 py-3 text-base md:text-lg font-medium hover:bg-gray-800 rounded-t data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
            >
              Per-Vault Deep Dive
            </Tabs.Trigger>
            <Tabs.Trigger
              value="comparisons"
              className="px-5 py-3 text-base md:text-lg font-medium hover:bg-gray-800 rounded-t data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
            >
              Comparisons
            </Tabs.Trigger>
            <Tabs.Trigger
              value="points"
              className="px-5 py-3 text-base md:text-lg font-medium hover:bg-gray-800 rounded-t data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500"
            >
              Points/Rewards
            </Tabs.Trigger>
          </Tabs.List>

          <Tabs.Content value="overview">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Total TVL (Current)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$690M</p>
                  <p className="text-sm text-gray-400">(Ethereum \~$640M dominant)</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">All-Time Volume Processed</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">$11B+</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-2">
                  <CardTitle className="text-lg">Avg Platform APY</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-3xl font-bold">\~10-12%</p>
                  <p className="text-sm text-gray-400">(varies by vault + points)</p>
                </CardContent>
              </Card>
            </div>

            <Card className="mb-10">
              <CardHeader>
                <CardTitle>Platform-Wide TVL Growth (Recent Months)</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-80">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={tvlData}>
                      <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                      <XAxis dataKey="date" stroke="#9ca3af" />
                      <YAxis stroke="#9ca3af" />
                      <Tooltip
                        formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
                        contentStyle={{ backgroundColor: '#1f2937', border: 'none' }}
                      />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="tvl"
                        stroke="#8b5cf6"
                        strokeWidth={2}
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </Tabs.Content>

          <Tabs.Content value="vaults">
            <div className="mb-8">
              <input
                type="text"
                placeholder="Search vaults by name or chain..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full p-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredVaults.length > 0 ? (
                filteredVaults.map((vault, idx) => (
                  <Card key={idx} className="hover:bg-gray-800 transition-colors cursor-pointer">
                    <CardHeader>
                      <CardTitle>{vault.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">Chain: {vault.chain}</p>
                      <p className="text-gray-300">TVL: {vault.tvl}</p>
                      <p className="text-gray-300">APY: {vault.apy}</p>
                      <p className="text-sm text-gray-400 mt-2">Asset: {vault.asset}</p>
                    </CardContent>
                  </Card>
                ))
              ) : (
                <p className="col-span-full text-center py-10 text-gray-400">No vaults match your search</p>
              )}
            </div>

            <p className="text-center text-gray-500 mt-8">
              More vaults coming soon • Click one to view deep dive (placeholder)
            </p>
          </Tabs.Content>

          <Tabs.Content value="deep-dive">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Per-Vault Deep Dive</h2>
              <p className="text-gray-400">
                Select a vault above to see historical TVL chart, APY over time, strategy allocation history, fees harvested, recent transactions, and yield events.
              </p>
              <p className="text-sm mt-4">(Implementation coming next – we can add dynamic charts per vault)</p>
            </div>
          </Tabs.Content>

          <Tabs.Content value="comparisons">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Vault Comparisons</h2>
              <p className="text-gray-400">
                Coming soon: Select multiple vaults and compare TVL trends, APY curves, risk metrics side-by-side.
              </p>
            </div>
          </Tabs.Content>

          <Tabs.Content value="points">
            <div className="text-center py-20">
              <h2 className="text-2xl font-bold mb-4">Points & Rewards Tracker</h2>
              <p className="text-gray-400">
                Coming soon: Track Concrete points multipliers per vault, historical accrual, rewards claims, and leaderboard.
              </p>
            </div>
          </Tabs.Content>
        </Tabs.Root>

        <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
          Dashboard under construction • Data approximate/dummy for now • Community project • Verify on app.concrete.xyz
        </p>
      </main>
    </div>
  );
}