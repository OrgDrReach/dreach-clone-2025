import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Phone, Video, MoreVertical } from "lucide-react";

const ChatHeader = () => {
  return (
    <div className="px-6 py-4 border-b flex items-center justify-between bg-white dark:bg-gray-800">
      <div className="flex items-center">
        <Avatar className="h-10 w-10">
          <AvatarImage src="/avatars/patient-1.jpg" alt="Sarah Johnson" />
          <AvatarFallback>SJ</AvatarFallback>
        </Avatar>
        <div className="ml-4">
          <h2 className="text-lg font-semibold">Sarah Johnson</h2>
          <p className="text-sm text-green-500">Online</p>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon">
          <Phone className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Video className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <MoreVertical className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ChatHeader;