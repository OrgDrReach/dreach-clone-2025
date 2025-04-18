import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PatientAdvocacy: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Patient Advocacy</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="mb-6 text-lg">
          Connect with a patient advocate for support and guidance.
        </p>
        <Button className="w-full bg-white text-blue-600 hover:bg-blue-100 transition-colors duration-300">
          Request an Advocate
        </Button>
      </CardContent>
    </Card>
  );
};

export default PatientAdvocacy;
