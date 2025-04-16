"use client";

import { TrendingUp } from "lucide-react";
import { LabelList, Pie, PieChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
const chartData = [
  { browser: "general", visitors: 275, fill: "var(--color-general)" },
  { browser: "cardiology", visitors: 200, fill: "var(--color-cardiology)" },
  { browser: "pediatrics", visitors: 187, fill: "var(--color-pediatrics)" },
  { browser: "orthopedics", visitors: 173, fill: "var(--color-orthopedics)" },
  { browser: "others", visitors: 90, fill: "var(--color-others)" },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  general: {
    label: "General",
    color: "hsl(var(--chart-1))",
  },
  cardiology: {
    label: "Cardiology",
    color: "hsl(var(--chart-2))",
  },
  pediatrics: {
    label: "Pediatrics",
    color: "hsl(var(--chart-3))",
  },
  orthopedics: {
    label: "Orthopedics",
    color: "hsl(var(--chart-4))",
  },
  others: {
    label: "Others",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig;

export function PieCharts() {
  return (
    <Card
      className="flex flex-col w-full bg-slate-200"
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
    >
      <CardHeader className="pb-0">
        <CardTitle className="font-sans text-xl font-[700] text-[#0d2737]">
          Consultation Distribution
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[300px] w-full"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="visitors" hideLabel />}
            />
            <Pie data={chartData} dataKey="visitors">
              <LabelList
                dataKey="browser"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
