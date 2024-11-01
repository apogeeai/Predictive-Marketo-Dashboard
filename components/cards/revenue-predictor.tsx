'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { ArrowUpRight, Maximize2 } from 'lucide-react';

const data = [
  { month: 'Sep', revenue: 4200 },
  { month: 'Oct', revenue: 4800 },
  { month: 'Nov', revenue: 5100 },
  { month: 'Dec', revenue: 5400 },
  { month: 'Jan', revenue: 5600 },
  { month: 'Feb', revenue: 5800 },
  { month: 'Mar', revenue: 5849.36, predicted: true },
  { month: 'Apr', revenue: 6100, predicted: true },
  { month: 'May', revenue: 6400, predicted: true },
];

export function RevenuePredictor() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Revenue Predictor</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="flex items-center space-x-2 mb-4">
          <div className="text-2xl font-bold">$5,849.36</div>
          <div className="flex items-center text-emerald-600 text-sm">
            <ArrowUpRight className="h-4 w-4" />
            3.89%
          </div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <defs>
                <linearGradient id="revenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0F4C5C" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0F4C5C" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#0F4C5C"
                fillOpacity={1}
                fill="url(#revenue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}