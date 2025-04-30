"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion, AnimatePresence } from "framer-motion";
import { Target, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import PlanStatus from "./PlanStatus";

interface TreatmentGoal {
  id: string;
  description: string;
  status: "In Progress" | "Achieved" | "Not Started";
  progress: number;
}

interface ExpectedOutcome {
  id: string;
  description: string;
  timeline: string;
}

interface PlanOverviewProps {
  goals: TreatmentGoal[];
  outcomes: ExpectedOutcome[];
  planStatus: "In Progress" | "Completed" | "On Hold" | "Not Started";
}

const PlanOverview: React.FC<PlanOverviewProps> = ({
  goals,
  outcomes,
  planStatus,
}) => {
  const [expandedGoal, setExpandedGoal] = useState<string | null>(null);

  const getStatusColor = (status: TreatmentGoal["status"]) => {
    switch (status) {
      case "In Progress":
        return "bg-blue-500 text-blue-800";
      case "Achieved":
        return "bg-green-500 text-green-800";
      case "Not Started":
        return "bg-gray-500 text-gray-800";
    }
  };

  const getProgressColor = (progress: number) => {
    if (progress >= 80) return "bg-green-500";
    if (progress >= 50) return "bg-yellow-500 dark:bg-yellow-600";
    return "bg-red-500";
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <Card className="w-full bg-gradient-to-br from-green-50 to-green-50 dark:from-[#00598A] dark:to-gray-700 shadow-lg overflow-hidden">
        <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
          <div className="flex justify-between items-center">
            <CardTitle className="text-2xl font-bold text-green-700 dark:text-green-500 flex items-center">
              <Target className="mr-2 h-6 w-6" />
              Treatment Goals
            </CardTitle>
            <PlanStatus status={planStatus} />
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {goals.map((goal) => (
              <motion.div
                key={goal.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="mb-4 last:mb-0"
              >
                <div
                  className="flex justify-between items-center mb-2 cursor-pointer"
                  onClick={() =>
                    setExpandedGoal(expandedGoal === goal.id ? null : goal.id)
                  }
                >
                  <span className="font-medium text-gray-700 dark:text-gray-200">
                    {goal.description}
                  </span>
                  {expandedGoal === goal.id ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </div>
                <AnimatePresence>
                  {expandedGoal === goal.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mb-2"
                    >
                      <Badge className={`mb-2 ${getStatusColor(goal.status)}`}>
                        {goal.status}
                      </Badge>
                      <Progress
                        value={goal.progress}
                        className={`h-2 ${getProgressColor(goal.progress)}`}
                      />
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-1">
                        {goal.progress}% Complete
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
                <Separator className="my-2" />
              </motion.div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>

      <Card className="w-full bg-gradient-to-br from-indigo-50 to-indigo-50 dark:from-[#00598A] dark:to-gray-700 shadow-lg overflow-hidden">
        <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
          <CardTitle className="text-2xl font-bold text-indigo-700 dark:text-indigo-200 flex items-center">
            <CheckCircle className="mr-2 h-6 w-6" />
            Expected Outcomes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] w-full pr-4">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mb-4 last:mb-0"
              >
                <p className="font-medium text-gray-700 dark:text-gray-200 mb-1">
                  {outcome.description}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-300">
                  Timeline: {outcome.timeline}
                </p>
                <Separator className="my-2" />
              </motion.div>
            ))}
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default PlanOverview;
