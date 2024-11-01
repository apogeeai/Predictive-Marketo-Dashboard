'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Maximize2 } from 'lucide-react';

const data = [
  { name: 'Email', value: 35, prediction: 42 },
  { name: 'Social', value: 25, prediction: 28 },
  { name: 'Direct', value: 20, prediction: 18 },
  { name: 'Other', value: 20, prediction: 12 },
];

const COLORS = ['#0F4C5C', '#7DD1DE', '#FF9F43', '#10B981'];

export function CampaignPerformance() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Campaign Performance Predictor</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <div className="text-sm font-medium">Total Conversion Rate: 3.8%</div>
          <div className="text-sm text-muted-foreground">Predicted Growth: +12%</div>
        </div>
        <div className="h-[200px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}