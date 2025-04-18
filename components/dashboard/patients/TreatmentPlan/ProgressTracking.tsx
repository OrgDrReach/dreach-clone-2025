"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { motion } from "framer-motion";
import { CheckCircle, Target } from "lucide-react";

interface GoalProgress {
  id: string;
  description: string;
  progress: number;
  milestones: {
    id: string;
    description: string;
    completed: boolean;
  }[];
}

interface ProgressData {
  date: string;
  progress: number;
}

interface ProgressTrackingProps {
  goals: GoalProgress[];
  progressData: ProgressData[];
}

const ProgressTracking: React.FC<ProgressTrackingProps> = ({
  goals,
  progressData,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg overflow-hidden">
        <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
          <CardTitle className="text-2xl font-bold text-blue-700 flex items-center">
            <Target className="mr-2 h-6 w-6" />
            Progress Graph
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={progressData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="progress"
                  stroke="#4F46E5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card className="w-full bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg overflow-hidden">
        <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
          <CardTitle className="text-2xl font-bold text-purple-700 flex items-center">
            <CheckCircle className="mr-2 h-6 w-6" />
            Goal Milestones
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {goals.map((goal, index) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-6 last:mb-0"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-gray-800">
                    {goal.description}
                  </h3>
                  <Badge className="bg-blue-100 text-blue-800">
                    {goal.progress}% Complete
                  </Badge>
                </div>
                <div className="space-y-2">
                  {goal.milestones.map((milestone) => (
                    <div
                      key={milestone.id}
                      className="flex items-center space-x-2"
                    >
                      <div
                        className={`w-4 h-4 rounded-full ${milestone.completed ? "bg-green-500" : "bg-gray-300"}`}
                      />
                      <span
                        className={`text-sm ${milestone.completed ? "text-green-600 font-medium" : "text-gray-600"}`}
                      >
                        {milestone.description}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default ProgressTracking;
