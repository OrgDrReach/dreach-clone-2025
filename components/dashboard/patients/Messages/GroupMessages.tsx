"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import MessageStatus from "./MessageStatus";
import { motion, AnimatePresence } from "framer-motion";
import { formatDate } from "@/utils/dateFormatter";
import { Paperclip } from "lucide-react";

interface Provider {
  id: string;
  name: string;
  title: string;
  avatar: string;
}

interface GroupMessage {
  id: string;
  text: string;
  sentAt: string;
  sender: {
    id: string;
    name: string;
    avatar: string;
    isPatient: boolean;
  };
  status: "sent" | "read" | "responded";
  attachments: { name: string }[];
}

const GroupMessages: React.FC = () => {
  const [selectedProviders, setSelectedProviders] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState<string>("");
  const [groupMessages, setGroupMessages] = useState<GroupMessage[]>([]);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

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

  const handleProviderToggle = (providerId: string) => {
    setSelectedProviders((prev) =>
      prev.includes(providerId)
        ? prev.filter((id) => id !== providerId)
        : [...prev, providerId],
    );
  };

  const handleSendMessage = () => {
    if (selectedProviders.length > 0 && newMessage.trim()) {
      const newGroupMessage: GroupMessage = {
        id: Date.now().toString(),
        text: newMessage,
        sentAt: new Date().toISOString(),
        sender: {
          id: "patient",
          name: "You",
          avatar: "/avatars/patient.png",
          isPatient: true,
        },
        status: "sent",
        attachments: [],
      };

      setGroupMessages((prev) => [...prev, newGroupMessage]);
      setNewMessage("");
    }
  };

  return (
    <Card className="w-full bg-gradient-to-br from-green-50 to-teal-50 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-green-700">
          Group Messages
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2 bg-white bg-opacity-50 p-4 rounded-md">
          <Label className="text-lg font-semibold text-green-700">
            Select Providers
          </Label>
          {providers.map((provider) => (
            <div key={provider.id} className="flex items-center space-x-2">
              <Checkbox
                id={`provider-${provider.id}`}
                checked={selectedProviders.includes(provider.id)}
                onCheckedChange={() => handleProviderToggle(provider.id)}
              />
              <Label
                htmlFor={`provider-${provider.id}`}
                className="flex items-center space-x-2 cursor-pointer"
              >
                <Avatar className="h-6 w-6">
                  <AvatarImage src={provider.avatar} alt={provider.name} />
                  <AvatarFallback>{provider.name[0]}</AvatarFallback>
                </Avatar>
                <span>
                  {provider.name} - {provider.title}
                </span>
              </Label>
            </div>
          ))}
        </div>

        <AnimatePresence>
          {selectedProviders.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <ScrollArea className="h-[300px] w-full border rounded-md p-4 bg-white bg-opacity-50 backdrop-blur-sm">
                {groupMessages.map((message, index) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className={`mb-4 flex ${message.sender.isPatient ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`flex items-start space-x-2 ${message.sender.isPatient ? "flex-row-reverse" : "flex-row"}`}
                    >
                      <Avatar className="border-2 border-indigo-200">
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
                      <div
                        className={`max-w-[70%] rounded-lg p-3 ${message.sender.isPatient ? "bg-indigo-100" : "bg-white"} shadow-md`}
                      >
                        <p className="text-sm font-medium mb-1">
                          {message.sender.name}
                        </p>
                        <p className="text-sm">{message.text}</p>
                        {message.attachments.length > 0 && (
                          <div className="mt-2">
                            {message.attachments.map((attachment, index) => (
                              <div
                                key={index}
                                className="flex items-center text-xs text-indigo-600 hover:text-indigo-800 transition-colors"
                              >
                                <Paperclip size={12} className="mr-1" />
                                <span>{attachment.name}</span>
                              </div>
                            ))}
                          </div>
                        )}
                        <div className="flex justify-between items-center mt-2">
                          <p className="text-xs text-gray-500">
                            {isClient ? formatDate(message.sentAt) : ""}
                          </p>
                          <MessageStatus status={message.status} />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </ScrollArea>

              <div className="space-y-2 mt-4">
                <Textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="min-h-[100px] bg-white bg-opacity-70"
                />
                <Button
                  onClick={handleSendMessage}
                  disabled={
                    selectedProviders.length === 0 || !newMessage.trim()
                  }
                  className="w-full bg-green-600 hover:bg-green-700"
                >
                  Send to Group
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </CardContent>
    </Card>
  );
};

export default GroupMessages;
