import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, CreditCard, FileText } from 'lucide-react';

interface InsuranceInformationProps {
  insuranceName: string;
  insuranceId: string;
  policyDetails: string;
}

const InsuranceInformation: React.FC<InsuranceInformationProps> = ({ insuranceName, insuranceId, policyDetails }) => {
  return (
    <Card className="bg-gradient-to-br from-cyan-50 to-teal-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-cyan-600 dark:text-cyan-400 flex items-center">
          <Shield className="mr-2" />
          Insurance Information
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <CreditCard className="text-cyan-500" />
          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-300">Insurance Name</p>
            <p className="text-gray-600 dark:text-gray-400">{insuranceName}</p>
          </div>
        </div>
        <div className="flex items-center space-x-3 bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <FileText className="text-cyan-500" />
          <div>
            <p className="font-semibold text-gray-700 dark:text-gray-300">Insurance ID</p>
            <p className="text-gray-600 dark:text-gray-400">{insuranceId}</p>
          </div>
        </div>
        <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
          <p className="font-semibold text-gray-700 dark:text-gray-300 mb-2">Policy Details</p>
          <p className="text-gray-600 dark:text-gray-400">{policyDetails}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default InsuranceInformation;