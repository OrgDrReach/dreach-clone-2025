import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Calendar, Phone, Mail, AlertCircle } from 'lucide-react';

interface PersonalInformationProps {
  name: string;
  dateOfBirth: string;
  phoneNumber: string;
  email: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
}

const PersonalInformation: React.FC<PersonalInformationProps> = ({ name, dateOfBirth, phoneNumber, email, emergencyContact }) => {
  return (
    <Card className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-blue-600 dark:text-blue-400">Personal Information</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center space-x-3">
          <User className="text-blue-500" />
          <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Name:</span> {name}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Calendar className="text-blue-500" />
          <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Date of Birth:</span> {dateOfBirth}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Phone className="text-blue-500" />
          <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Phone:</span> {phoneNumber}</p>
        </div>
        <div className="flex items-center space-x-3">
          <Mail className="text-blue-500" />
          <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Email:</span> {email}</p>
        </div>
        <div className="mt-6 border-t pt-4 border-blue-200 dark:border-blue-700">
          <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 flex items-center mb-2">
            <AlertCircle className="mr-2" />
            Emergency Contact
          </h3>
          <div className="bg-white dark:bg-gray-700 p-3 rounded-lg shadow">
            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Name:</span> {emergencyContact.name}</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Relationship:</span> {emergencyContact.relationship}</p>
            <p className="text-gray-700 dark:text-gray-300"><span className="font-semibold">Phone:</span> {emergencyContact.phoneNumber}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default PersonalInformation;