import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

interface Message {
  id: string;
  text: string;
  sender: {
    name: string;
    title: string;
    avatar: string;
  };
  sentAt: string;
}

const Inbox: React.FC = () => {
  // Mock data for demonstration
  const messages: Message[] = [
    {
      id: "1",
      text: "Your lab results are ready. Please schedule a follow-up appointment.",
      sender: {
        name: "Dr. Jane Smith",
        title: "Cardiologist",
        avatar: "/avatars/jane-smith.png",
      },
      sentAt: "2023-06-15T10:30:00Z",
    },
    {
      id: "2",
      text: "Reminder: Your physical therapy session is tomorrow at 2 PM.",
      sender: {
        name: "Mike Johnson",
        title: "Physical Therapist",
        avatar: "/avatars/mike-johnson.png",
      },
      sentAt: "2023-06-14T15:45:00Z",
    },
    // Add more mock messages as needed
  ];

  return (
    <Card className="w-full shadow-lg rounded-lg overflow-hidden">
      <CardContent className="p-0">
        <div className="bg-indigo-600 text-white p-4 -mt-6">
          <h2 className="text-2xl font-bold">Inbox</h2>
        </div>
        <ScrollArea className="h-[calc(100vh-12rem)]">
          {messages.map((message, index) => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="p-4 border-b hover:bg-indigo-50 transition-colors cursor-pointer"
            >
              <div className="flex items-start space-x-4">
                <Avatar className="h-12 w-12 border-2 border-indigo-200">
                  <AvatarImage
                    src={message.sender.avatar}
                    alt={message.sender.name}
                  />
                  <AvatarFallback className="bg-indigo-100 text-indigo-700">
                    {message.sender.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <div>
                      <p className="font-semibold text-indigo-800 dark:text-indigo-400">
                        {message.sender.name}
                      </p>
                      <p className="text-sm text-indigo-600">
                        {message.sender.title}
                      </p>
                    </div>
                    <p className="text-xs text-indigo-500">
                      {new Date(message.sentAt).toLocaleString()}
                    </p>
                  </div>
                  <p className="text-gray-700 dark:text-gray-400 line-clamp-2">{message.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default Inbox;
