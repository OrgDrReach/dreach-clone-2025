"use client";

import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Attachments from "./Attachments";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

interface Recipient {
  id: string;
  name: string;
  title: string;
}

interface AttachmentFile {
  name: string;
  size: number;
  type: string;
}

const Compose: React.FC = () => {
  const [recipient, setRecipient] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [attachments, setAttachments] = useState<AttachmentFile[]>([]);

  // Mock data for recipients
  const recipients: Recipient[] = [
    { id: "1", name: "Dr. Jane Smith", title: "Cardiologist" },
    { id: "2", name: "Mike Johnson", title: "Physical Therapist" },
    { id: "3", name: "Nurse Sarah", title: "Registered Nurse" },
  ];

  const handleAttach = (files: File[]) => {
    const newAttachments = files.map((file) => ({
      name: file.name,
      size: file.size,
      type: file.type,
    }));
    setAttachments([...attachments, ...newAttachments]);
  };

  const handleRemoveAttachment = (index: number) => {
    setAttachments(attachments.filter((_, i) => i !== index));
  };

  const handleSend = () => {
    // Implement send logic here
    console.log("Sending message to:", recipient);
    console.log("Message:", message);
    console.log("Attachments:", attachments);
    // Reset form after sending
    setRecipient("");
    setMessage("");
    setAttachments([]);
  };

  return (
    <Card className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
      <CardHeader className="bg-indigo-600 text-white">
        <CardTitle className="text-2xl font-bold">Compose Message</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 p-6">
        <div className="space-y-2">
          <label
            htmlFor="recipient"
            className="text-sm font-medium text-indigo-700"
          >
            Recipient
          </label>
          <Select value={recipient} onValueChange={setRecipient}>
            <SelectTrigger id="recipient" className="border-indigo-200">
              <SelectValue placeholder="Select a recipient" />
            </SelectTrigger>
            <SelectContent>
              {recipients.map((r) => (
                <SelectItem key={r.id} value={r.id}>
                  {r.name} - {r.title}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-indigo-700"
          >
            Message
          </label>
          <Textarea
            id="message"
            placeholder="Type your message here..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[200px] border-indigo-200"
          />
        </div>
        <Attachments
          onAttach={handleAttach}
          onRemove={handleRemoveAttachment}
          attachments={attachments}
        />
      </CardContent>
      <CardFooter>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full"
        >
          <Button
            onClick={handleSend}
            disabled={!recipient || !message}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            <Send className="mr-2 h-4 w-4" /> Send Message
          </Button>
        </motion.div>
      </CardFooter>
    </Card>
  );
};

export default Compose;
