"use client";

import * as Tabs from "@radix-ui/react-tabs";

export default function DashboardTabs({ children }: { children: React.ReactNode }) {
  return (
    <Tabs.Root defaultValue="overview" className="w-full">
      <Tabs.List className="flex border-b border-gray-700 mb-6">
        <Tabs.Trigger value="overview" className="px-6 py-3 text-lg font-medium hover:bg-gray-800 data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
          Overview
        </Tabs.Trigger>
        <Tabs.Trigger value="per-vault" className="px-6 py-3 text-lg font-medium hover:bg-gray-800 data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
          Per-Vault Deep Dive
        </Tabs.Trigger>
        <Tabs.Trigger value="comparisons" className="px-6 py-3 text-lg font-medium hover:bg-gray-800 data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
          Comparisons
        </Tabs.Trigger>
        <Tabs.Trigger value="points" className="px-6 py-3 text-lg font-medium hover:bg-gray-800 data-[state=active]:bg-gray-800 data-[state=active]:border-b-2 data-[state=active]:border-purple-500">
          Points/Rewards Tracker
        </Tabs.Trigger>
      </Tabs.List>

      <Tabs.Content value="overview">{children}</Tabs.Content>  {/* Current overview content goes here */}
      <Tabs.Content value="per-vault">
        <p className="text-center py-10">Coming soon: Select a vault to see historical TVL, APY curve, strategy changes...</p>
      </Tabs.Content>
      <Tabs.Content value="comparisons">
        <p className="text-center py-10">Coming soon: Side-by-side vault charts</p>
      </Tabs.Content>
      <Tabs.Content value="points">
        <p className="text-center py-10">Coming soon: Points multipliers, rewards history</p>
      </Tabs.Content>
    </Tabs.Root>
  );
}