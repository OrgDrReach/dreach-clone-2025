import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const resources = [
  { name: "WebMD", url: "https://www.webmd.com/" },
  { name: "Mayo Clinic", url: "https://www.mayoclinic.org/" },
  { name: "Patient Support Forum", url: "https://www.patientslikeme.com/" },
  // Add more resources as needed
];

const SupportResources: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Resources</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-2 gap-4">
          {resources.map((resource, index) => (
            <Button key={index} variant="outline" asChild>
              <a href={resource.url} target="_blank" rel="noopener noreferrer">
                {resource.name}
              </a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default SupportResources;