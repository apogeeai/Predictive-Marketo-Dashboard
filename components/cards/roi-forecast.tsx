'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Maximize2 } from 'lucide-react';

const data = [
  { month: 'Jan', revenue: 4000, cost: 2400, forecast: 4200 },
  { month: 'Feb', revenue: 3000, cost: 1398, forecast: 3500 },
  { month: 'Mar', revenue: 2000, cost: 9800, forecast: 2800 },
  { month: 'Apr', revenue: 2780, cost: 3908, forecast: 3100 },
  { month: 'May', revenue: 1890, cost: 4800, forecast: 2400 },
  { month: 'Jun', revenue: 2390, cost: 3800, forecast: 2900 },
];

export function RoiForecast() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">ROI Forecast</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <div className="text-sm font-medium">Projected ROI: 168%</div>
          <div className="text-sm text-muted-foreground">Confidence Level: 92%</div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Area 
                type="monotone" 
                dataKey="revenue" 
                stackId="1" 
                stroke="#0F4C5C" 
                fill="#0F4C5C" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="cost" 
                stackId="1" 
                stroke="#FF9F43" 
                fill="#FF9F43" 
                fillOpacity={0.6}
              />
              <Area 
                type="monotone" 
                dataKey="forecast" 
                stackId="2" 
                stroke="#7DD1DE" 
                fill="#7DD1DE" 
                fillOpacity={0.6}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}