"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

interface MedicalCondition {
  name: string;
  diagnosisDate: string;
}

interface Medication {
  name: string;
  dosage: string;
  frequency: string;
}

interface Allergy {
  name: string;
  severity: "Mild" | "Moderate" | "Severe";
}

interface SummaryProps {
  conditions: MedicalCondition[];
  medications: Medication[];
  allergies: Allergy[];
}

const Summary: React.FC<SummaryProps> = ({
  conditions,
  medications,
  allergies,
}) => {
  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg overflow-hidden">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-indigo-700">
          Medical Summary
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Medical Conditions
          </h3>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {conditions.map((condition, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span className="font-medium">{condition.name}</span>
                <Badge variant="outline">{condition.diagnosisDate}</Badge>
              </div>
            ))}
          </ScrollArea>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Current Medications
          </h3>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {medications.map((medication, index) => (
              <div key={index} className="mb-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{medication.name}</span>
                  <Badge>{medication.dosage}</Badge>
                </div>
                <p className="text-sm text-gray-600">{medication.frequency}</p>
              </div>
            ))}
          </ScrollArea>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h3 className="text-lg font-semibold text-indigo-600 mb-2">
            Allergies
          </h3>
          <ScrollArea className="h-[200px] w-full rounded-md border p-4">
            {allergies.map((allergy, index) => (
              <div
                key={index}
                className="flex justify-between items-center mb-2"
              >
                <span className="font-medium">{allergy.name}</span>
                <Badge
                  variant={
                    allergy.severity === "Severe"
                      ? "destructive"
                      : allergy.severity === "Moderate"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {allergy.severity}
                </Badge>
              </div>
            ))}
          </ScrollArea>
        </motion.div>
      </CardContent>
    </Card>
  );
};

export default Summary;
