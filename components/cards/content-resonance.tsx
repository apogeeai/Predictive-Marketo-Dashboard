'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Maximize2 } from 'lucide-react';

const data = [
  { name: 'Subject A', effectiveness: 85, engagement: 78, decay: 95 },
  { name: 'Subject B', effectiveness: 75, engagement: 82, decay: 88 },
  { name: 'Subject C', effectiveness: 92, engagement: 89, decay: 76 },
  { name: 'Subject D', effectiveness: 68, engagement: 73, decay: 82 },
  { name: 'Subject E', effectiveness: 88, engagement: 91, decay: 85 },
];

export function ContentResonance() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Content Resonance Analyzer</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <div className="text-sm font-medium">Best Performing: Subject C</div>
          <div className="text-sm text-muted-foreground">Average Effectiveness: 82%</div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="effectiveness" fill="#0F4C5C" stackId="a" />
              <Bar dataKey="engagement" fill="#7DD1DE" stackId="a" />
              <Bar dataKey="decay" fill="#FF9F43" stackId="a" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}