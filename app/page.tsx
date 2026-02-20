"use client";

import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Sidebar from "../components/Sidebar";

const tvlData = [
  { date: '2025-06', tvl: 300000000 },
  { date: '2025-09', tvl: 500000000 },
  { date: '2025-12', tvl: 800000000 },
  { date: '2026-01', tvl: 900000000 },
  { date: '2026-02', tvl: 684000000 },
];

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      
      <main className="flex-1 container mx-auto p-4 md:p-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Concrete Vaults Historical Analytics
        </h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">Total TVL (Peak/Current)</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$900M / $684M</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-lg">All-Time Volume</CardTitle>
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
              <p className="text-3xl font-bold">\~12%</p>
            </CardContent>
          </Card>
        </div>

        <Card className="mb-10">
          <CardHeader>
            <CardTitle>Platform-Wide TVL Growth (Recent)</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={tvlData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                  <XAxis dataKey="date" stroke="#9ca3af" />
                  <YAxis stroke="#9ca3af" />
                  <Tooltip 
                    formatter={(value: number) => `$${(value / 1000000).toFixed(0)}M`} 
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

        <p className="text-center text-gray-500 dark:text-gray-400 mt-12">
          Dashboard under construction • Data is approximate/dummy for now • Community project
        </p>
      </main>
    </div>
  );
}