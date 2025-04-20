"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { FaClipboardList } from "react-icons/fa";

interface Note {
  id: string;
  date: string;
  title: string;
  content: string;
  type: "visit" | "test" | "other";
}

interface RecentNotesProps {
  notes: Note[];
}

const RecentNotes: React.FC<RecentNotesProps> = ({ notes }) => {
  const getTypeIcon = (type: Note["type"]) => {
    switch (type) {
      case "visit":
        return "🩺";
      case "test":
        return "🧪";
      default:
        return "📝";
    }
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader className="bg-gradient-to-r from-[#285b6d] to-[#31addb] text-white rounded-t-lg p-4 -mt-6">
        <CardTitle className="text-xl font-semibold flex items-center">
          <FaClipboardList className="w-6 h-6 mr-2" />
          Recent Notes
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6">
        <ScrollArea className="h-[300px] pr-4">
          {notes.map((note) => (
            <div
              key={note.id}
              className="mb-4 p-3 bg-white dark:bg-gray-700 rounded-lg shadow border border-gray-600 transition-colors duration-200"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-300">{note.date}</span>
                <span className="text-lg" title={note.type}>
                  {getTypeIcon(note.type)}
                </span>
              </div>
              <h3 className="font-semibold text-lg mb-1">{note.title}</h3>
              <p className="text-sm text-gray-700 dark:text-gray-300">{note.content}</p>
            </div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default RecentNotes;
