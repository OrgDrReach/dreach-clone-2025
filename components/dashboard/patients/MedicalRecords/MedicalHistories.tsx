"use client"

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface MedicalEvent {
  id: string;
  date: string;
  type: "Illness" | "Treatment" | "Surgery";
  description: string;
  details?: string;
}

interface MedicalHistoriesProps {
  histories: MedicalEvent[];
}

const MedicalHistories: React.FC<MedicalHistoriesProps> = ({ histories }) => {
  const sortedHistories = [...histories].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const getEventTypeColor = (type: MedicalEvent['type']) => {
    switch (type) {
      case "Illness":
        return "bg-red-100 text-red-800";
      case "Treatment":
        return "bg-blue-100 text-blue-800";
      case "Surgery":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-amber-50 to-orange-50 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-amber-700">Medical History</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[500px] w-full pr-4">
          <Accordion type="single" collapsible className="w-full">
            {sortedHistories.map((event) => (
              <AccordionItem key={event.id} value={event.id}>
                <AccordionTrigger className="hover:no-underline">
                  <div className="flex items-center justify-between w-full">
                    <span className="font-medium">{event.date}</span>
                    <Badge className={`ml-2 ${getEventTypeColor(event.type)}`}>
                      {event.type}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="space-y-2">
                    <p className="font-semibold">{event.description}</p>
                    {event.details && (
                      <p className="text-sm text-gray-600">{event.details}</p>
                    )}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MedicalHistories;