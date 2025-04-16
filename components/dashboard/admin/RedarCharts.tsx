"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { title: "Patient Satisfaction", performance: 186 },
  { title: "Treatment Success", performance: 305 },
  { title: "Emergency Response", performance: 237 },
  { title: "Cleanliness", performance: 273 },
  { title: "Staff Efficiency", performance: 209 },
];

const chartConfig = {
  performance: {
    label: "Performance",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function RedarCharts() {
  return (
    <Card
      className="flex flex-col w-full bg-slate-100"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardHeader className="pb-0">
        <CardTitle className="font-sans text-xl font-[700] text-[#0d2737]">
          Hospital Performance
        </CardTitle>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[400px]"
        >
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="title" fontSize={8} fontStretch={12} />
            <PolarGrid />
            <Radar
              dataKey="performance"
              fill="var(--color-performance)"
              fillOpacity={0.5}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
