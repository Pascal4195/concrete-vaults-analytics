"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // We'll create this folder/component next
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const dummyTvlData = [
  { date: '2025-01', tvl: 500000000 },
  { date: '2025-03', tvl: 800000000 },
  { date: '2025-06', tvl: 1200000000 },
  { date: '2025-09', tvl: 1800000000 },
  { date: '2025-12', tvl: 2500000000 },
  { date: '2026-02', tvl: 1800000000 },
];

export default function Home() {
  return (
    <main className="container mx-auto p-4 md:p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Concrete Vaults Historical Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Total TVL (Peak/Current)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$2.5B / $1.8B</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>All-Time Volume</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">$7.2B</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Avg Platform APY</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12.5%</p>
          </CardContent>
        </Card>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Platform-Wide TVL Growth (1 Year)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dummyTvlData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip formatter={(value) => `$${value.toLocaleString()}`} />
                <Legend />
                <Line type="monotone" dataKey="tvl" stroke="#8884d8" activeDot={{ r: 8 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <p className="text-center text-muted-foreground mt-8">
        Dashboard under construction • Data is dummy for now • Powered by community
      </p>
    </main>
  );
}
