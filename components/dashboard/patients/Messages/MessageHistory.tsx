"use client"

import React, { useState, useEffect, useCallback } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Paperclip } from "lucide-react";
import MessageStatus from "./MessageStatus";
import { motion } from "framer-motion";
import { formatDate } from "@/utils/dateFormatter";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Attachment {
  name: string;
  size: number;
  type: string;
}

interface Message {
  id: string;
  text: string;
  sender: {
    name: string;
    avatar: string;
    isPatient: boolean;
  };
  sentAt: string;
  attachments: Attachment[];
  status: "sent" | "read" | "responded";
}

const MessageItem = React.memo(({ message, isClient }: { message: Message; isClient: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
    className={`mb-4 flex ${message.sender.isPatient ? 'justify-end' : 'justify-start'}`}
  >
    <div className={`flex items-start space-x-2 ${message.sender.isPatient ? 'flex-row-reverse' : 'flex-row'}`}>
      <Avatar className="border-2 border-indigo-200">
        <AvatarImage src={message.sender.avatar} alt={message.sender.name} />
        <AvatarFallback className="bg-indigo-100 text-indigo-700">{message.sender.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div className={`max-w-[70%] rounded-lg p-3 ${message.sender.isPatient ? 'bg-indigo-100' : 'bg-white'} shadow-md`}>
        <p className="text-sm font-medium mb-1">{message.sender.name}</p>
        <p className="text-sm">{message.text}</p>
        {message.attachments.length > 0 && (
          <div className="mt-2">
            {message.attachments.map((attachment, index) => (
              <div key={index} className="flex items-center text-xs text-indigo-600 hover:text-indigo-800 transition-colors">
                <Paperclip size={12} className="mr-1" />
                <span>{attachment.name}</span>
              </div>
            ))}
          </div>
        )}
        <div className="flex justify-between items-center mt-2">
          <p className="text-xs text-gray-500">
            {isClient ? formatDate(message.sentAt) : ''}
          </p>
          <MessageStatus status={message.status} />
        </div>
      </div>
    </div>
  </motion.div>
));

// Add this line to set the display name
MessageItem.displayName = 'MessageItem';

const MessageHistory: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isClient, setIsClient] = useState(false);

  const fetchMessages = useCallback(async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock data for demonstration
    const fetchedMessages: Message[] = [
      {
        id: "1",
        text: "Hello Dr. Smith, I've been experiencing some chest pain lately.",
        sender: {
          name: "John Doe",
          avatar: "/avatars/john-doe.png",
          isPatient: true,
        },
        sentAt: "2023-06-10T09:30:00Z",
        attachments: [],
        status: "read",
      },
      {
        id: "2",
        text: "Hi John, I'm sorry to hear that. Can you describe the pain in more detail?",
        sender: {
          name: "Dr. Jane Smith",
          avatar: "/avatars/jane-smith.png",
          isPatient: false,
        },
        sentAt: "2023-06-10T10:15:00Z",
        attachments: [],
        status: "responded",
      },
      {
        id: "3",
        text: "It's a sharp pain that comes and goes, usually when I exert myself. I've attached a document with more details.",
        sender: {
          name: "John Doe",
          avatar: "/avatars/john-doe.png",
          isPatient: true,
        },
        sentAt: "2023-06-10T10:30:00Z",
        attachments: [
          { name: "pain-description.pdf", size: 1024000, type: "application/pdf" },
        ],
        status: "sent",
      },
      {
        id: "4",
        text: "I see. Let's schedule an appointment for a thorough check-up. In the meantime, please avoid strenuous activities.",
        sender: {
          name: "Dr. Jane Smith",
          avatar: "/avatars/jane-smith.png",
          isPatient: false,
        },
        sentAt: "2023-06-10T11:00:00Z",
        attachments: [],
        status: "read",
      },
    ];
    setMessages(fetchedMessages);
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMessages();
    setIsClient(true);
  }, [fetchMessages]);

  if (isLoading) {
    return <div>Loading messages...</div>;
  }

  return (
    <Card className="w-full bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
      <CardContent>
        <ScrollArea className="h-[500px] pr-4">
          {messages.map((message) => (
            <MessageItem key={message.id} message={message} isClient={isClient} />
          ))}
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MessageHistory;