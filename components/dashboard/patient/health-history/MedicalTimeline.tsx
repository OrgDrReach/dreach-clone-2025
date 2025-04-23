"use client";

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Clock, Clock10 } from 'lucide-react';
import { motion } from 'framer-motion';
import { TimelineEvent } from '@/types/health-history';

interface MedicalTimelineProps {
  events: TimelineEvent[];
}

const MedicalTimeline: React.FC<MedicalTimelineProps> = ({ events }) => {
  const sortedEvents = [...events].sort((a, b) => b.date.getTime() - a.date.getTime());

  return (
    <Card className="overflow-hidden shadow-lg border-gray-500">
      <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 p-4 -mt-6">
        <CardTitle className="text-xl font-bold text-white flex items-center">
          <Clock className="w-5 h-5 mr-2" />
          Medical Timeline
        </CardTitle>
      </CardHeader>
      <CardContent className="p-6">
        <ScrollArea className="h-[400px]">
          <div className="relative">
            <div className="absolute left-4 top-0 h-full w-0.5 bg-blue-200" />
            {sortedEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="mb-6 ml-10 relative"
              >
                <div className="absolute -left-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-white" />
                <div className="bg-gradient-to-r from-blue-200 to-blue-900 dark:from-slate-800 dark:to-slate-700 p-4 rounded-lg shadow">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-semibold text-lg text-blue-700">{event.title}</h3>
                    <Badge variant="secondary">
                      {new Date(event.date).toLocaleDateString()}
                    </Badge>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{event.description}</p>
                  {(event.doctor || event.facility) && (
                    <div className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                      {event.doctor && <span>Dr. {event.doctor}</span>}
                      {event.doctor && event.facility && <span> · </span>}
                      {event.facility && <span>{event.facility}</span>}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MedicalTimeline;