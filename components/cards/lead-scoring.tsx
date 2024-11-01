'use client';

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Maximize2 } from 'lucide-react';

const scores = Array.from({ length: 10 }, (_, i) => 
  Array.from({ length: 10 }, (_, j) => ({
    x: i * 10,
    y: j * 10,
    value: Math.random()
  }))
).flat();

export function LeadScoring() {
  return (
    <Card className="col-span-1">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-base font-medium">Lead Scoring Matrix</CardTitle>
        <Maximize2 className="h-4 w-4 text-muted-foreground cursor-pointer hover:text-foreground" />
      </CardHeader>
      <CardContent>
        <div className="space-y-1 mb-4">
          <div className="text-sm font-medium">Average Lead Quality: 72/100</div>
          <div className="text-sm text-muted-foreground">Conversion Probability: 64%</div>
        </div>
        <div className="grid grid-cols-10 gap-0.5 h-[200px]">
          {scores.map((cell, i) => (
            <div
              key={i}
              className="relative"
              style={{
                backgroundColor: `rgba(15, 76, 92, ${cell.value})`,
              }}
              title={`Quality: ${cell.x}, Engagement: ${cell.y}, Score: ${Math.round(cell.value * 100)}%`}
            />
          ))}
        </div>
        <div className="mt-2 flex justify-between text-xs text-muted-foreground">
          <span>Low Quality</span>
          <span>High Quality</span>
        </div>
      </CardContent>
    </Card>
  );
}