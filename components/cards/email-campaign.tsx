'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Maximize2 } from 'lucide-react';

const data = [
  { time: '00:00', opens: 45, clicks: 22, engagement: 0.32 },
  { time: '04:00', opens: 38, clicks: 18, engagement: 0.28 },
  { time: '08:00', opens: 65, clicks: 35, engagement: 0.48 },
  { time: '12:00', opens: 78, clicks: 42, engagement: 0.62 },
  { time: '16:00', opens: 88, clicks: 48, engagement: 0.71 },
  { time: '20:00', opens: 52, clicks: 28, engagement: 0.45 },
];

export function EmailCampaign() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Email Campaign Intelligence</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <div className="text-sm font-medium">Optimal Send Time: 4:00 PM</div>
          <div className="text-sm text-muted-foreground">Engagement Score: 71%</div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="opens" 
                stroke="#0F4C5C" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="clicks" 
                stroke="#7DD1DE" 
                strokeWidth={2}
              />
              <Line 
                type="monotone" 
                dataKey="engagement" 
                stroke="#FF9F43" 
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}