"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PlusCircle, Target } from "lucide-react";

interface Goal {
  name: string;
  date: string;
  progress: number;
}

const HealthGoals: React.FC = () => {
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState({ name: "", date: "" });

  const addGoal = () => {
    if (newGoal.name && newGoal.date) {
      setGoals([...goals, { ...newGoal, progress: 0 }]);
      setNewGoal({ name: "", date: "" });
    }
  };

  return (
    <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-green-600 dark:text-green-400 flex items-center">
          <Target className="mr-2" />
          Health Goals
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {goals.map((goal, index) => (
          <div
            key={index}
            className="p-3 bg-white dark:bg-gray-700 rounded-lg shadow flex justify-between items-center"
          >
            <div>
              <p className="font-semibold text-gray-700 dark:text-gray-300">
                {goal.name}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Due: {goal.date}
              </p>
            </div>
            <div className="w-20 h-20 relative">
              <svg className="w-full h-full" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#E5E7EB"
                  strokeWidth="3"
                />
                <path
                  d="M18 2.0845
                    a 15.9155 15.9155 0 0 1 0 31.831
                    a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="3"
                  strokeDasharray={`${goal.progress}, 100`}
                />
                <text
                  x="18"
                  y="20.35"
                  className="text-xs font-semibold"
                  textAnchor="middle"
                  fill="#10B981"
                >{`${goal.progress}%`}</text>
              </svg>
            </div>
          </div>
        ))}
        <Input
          placeholder="Goal name"
          value={newGoal.name}
          onChange={(e) => setNewGoal({ ...newGoal, name: e.target.value })}
          className="bg-white dark:bg-gray-700"
        />
        <Input
          type="date"
          value={newGoal.date}
          onChange={(e) => setNewGoal({ ...newGoal, date: e.target.value })}
          className="bg-white dark:bg-gray-700"
        />
        <Button
          onClick={addGoal}
          className="w-full bg-green-500 hover:bg-green-600 text-white"
        >
          <PlusCircle className="mr-2" />
          Add Goal
        </Button>
      </CardContent>
    </Card>
  );
};

export default HealthGoals;
