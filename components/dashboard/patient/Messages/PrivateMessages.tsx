"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MessageStatus from "./MessageStatus";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "@/utils/dateFormatter";

interface Provider {
  id: string;
  name: string;
  title: string;
  avatar: string;
}

interface PrivateMessage {
  id: string;
  text: string;
  sentAt: string;
  isPatient: boolean;
  status: "sent" | "read" | "responded";
}

const PrivateMessages: React.FC = () => {
  const [selectedProvider, setSelectedProvider] = useState<string>("");
  const [newMessage, setNewMessage] = useState<string>("");
  const [conversations, setConversations] = useState<
    Record<string, PrivateMessage[]>
  >({});

  // Mock data for providers
  const providers: Provider[] = [
    {
      id: "1",
      name: "Dr. Jane Smith",
      title: "Cardiologist",
      avatar: "/avatars/jane-smith.png",
    },
    {
      id: "2",
      name: "Mike Johnson",
      title: "Physical Therapist",
      avatar: "/avatars/mike-johnson.png",
    },
    {
      id: "3",
      name: "Nurse Sarah",
      title: "Registered Nurse",
      avatar: "/avatars/sarah-nurse.png",
    },
  ];

  const handleSendMessage = () => {
    if (selectedProvider && newMessage.trim()) {
      const newPrivateMessage: PrivateMessage = {
        id: Date.now().toString(),
        text: newMessage,
        sentAt: new Date().toISOString(),
        isPatient: true,
        status: "sent",
      };

      setConversations((prev) => ({
        ...prev,
        [selectedProvider]: [
          ...(prev[selectedProvider] || []),
          newPrivateMessage,
        ],
      }));

      setNewMessage("");
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-[#00598A] dark:to-gray-700 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-purple-700 dark:text-white">
          Private Messages
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Select value={selectedProvider} onValueChange={setSelectedProvider}>
          <SelectTrigger className="bg-white">
            <SelectValue placeholder="Select a healthcare provider" />
          </SelectTrigger>
          <SelectContent>
            {providers.map((provider) => (
              <SelectItem key={provider.id} value={provider.id}>
                <div className="flex items-center">
                  <Avatar className="h-6 w-6 mr-2">
                    <AvatarImage src={provider.avatar} alt={provider.name} />
                    <AvatarFallback>{provider.name[0]}</AvatarFallback>
                  </Avatar>
                  {provider.name} - {provider.title}
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        {selectedProvider && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollArea className="h-[300px] w-full border rounded-md p-4 bg-white bg-opacity-50 backdrop-blur-sm">
                {conversations[selectedProvider]?.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`mb-4 flex ${message.isPatient ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 ${message.isPatient ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Avatar>
                        <AvatarImage
                          src={
                            message.isPatient
                              ? "/avatars/patient.png"
                              : providers.find((p) => p.id === selectedProvider)
                                  ?.avatar
                          }
                        />
                        <AvatarFallback>
                          {message.isPatient
                            ? "You"
                            : providers.find((p) => p.id === selectedProvider)
                                ?.name[0]}
                        </AvatarFallback>
                      </Avatar>
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${message.isPatient ? "bg-blue-100" : "bg-gray-100"}`}
                      >
                        <p className="text-sm">{message.text}</p>
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xs text-gray-500">
                            {new Date(message.sentAt).toLocaleString()}
                          </p>
                          <MessageStatus status={message.status} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </ScrollArea>

              <div className="flex space-x-2 mt-4">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="flex-grow bg-white bg-opacity-70"
                />
                <Button
                  onClick={handleSendMessage}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  Send
                </Button>
              </div>
            </motion.div>
          </AnimatePresence>
        )}
      </CardContent>
    </Card>
  );
};

export default PrivateMessages;
