"use client";

import { TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { month: "January", revenue: 1500000 },
  { month: "February", revenue: 1700000 },
  { month: "March", revenue: 1900000 },
  { month: "April", revenue: 2100000 },
  { month: "May", revenue: 2300000 },
  { month: "June", revenue: 2500000 },
];

const chartConfig = {
  revenue: {
    label: "Revenue",
    color: "hsl(var(--chart-1))",
  },
} satisfies ChartConfig;

export function BarCharts() {
  return (
    <Card
      className="flex flex-col w-full bg-slate-300"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardHeader>
        <CardTitle className="font-sans text-xl font-[700] text-[#0d2737]">
          Revenue Overview
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] w-full"
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis
              dataKey="revenue"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => "$" + value / 1000000 + "M"}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey={"revenue"} fill="var(--color-revenue)" />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
