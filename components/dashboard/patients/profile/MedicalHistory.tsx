import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, Pill, AlertTriangle } from 'lucide-react';

interface MedicalHistoryProps {
  conditions: string[];
  medications: string[];
  allergies: string[];
}

const MedicalHistory: React.FC<MedicalHistoryProps> = ({ conditions, medications, allergies }) => {
  return (
    <Card className="bg-gradient-to-br from-red-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-red-600 dark:text-red-400 flex items-center">
          <Activity className="mr-2" />
          Medical History
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center mb-2">
            <Activity className="mr-2" /> Medical Conditions
          </h3>
          <ul className="list-disc list-inside">
            {conditions.map((condition, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{condition}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center mb-2">
            <Pill className="mr-2" /> Medications
          </h3>
          <ul className="list-disc list-inside">
            {medications.map((medication, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{medication}</li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <h3 className="text-lg font-semibold text-red-600 dark:text-red-400 flex items-center mb-2">
            <AlertTriangle className="mr-2" /> Allergies
          </h3>
          <ul className="list-disc list-inside">
            {allergies.map((allergy, index) => (
              <li key={index} className="text-gray-700 dark:text-gray-300">{allergy}</li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default MedicalHistory;