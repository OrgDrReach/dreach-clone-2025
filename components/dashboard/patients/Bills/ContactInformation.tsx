"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ContactInformation: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Billing Support</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p><strong>Phone:</strong> (555) 123-4567</p>
        <p><strong>Email:</strong> billing@healthcare.com</p>
        <p><strong>Hours:</strong> Monday - Friday, 9am - 5pm</p>
        <Button>Contact Support</Button>
      </CardContent>
    </Card>
  );
};

export default ContactInformation;