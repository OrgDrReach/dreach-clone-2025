import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { formatDistanceToNow } from 'date-fns';

interface Chat {
  id: number;
  patientName: string;
  avatar?: string;
  lastMessage: string;
  timestamp: Date;
  unreadCount?: number;
  status?: 'online' | 'offline' | 'away';
}

interface ChatListProps {
  selectedChat: number | null;
  onChatSelect: (id: number) => void;
  chats?: Chat[];
}

const ChatList: React.FC<ChatListProps> = ({ 
  selectedChat, 
  onChatSelect,
  chats = [{
    id: 1,
    patientName: "Sarah Johnson",
    lastMessage: "Hi Dr. Smith, I've been experiencing severe headaches lately...",
    timestamp: new Date(),
    unreadCount: 1,
    status: 'online'
  }]
}) => {
  return (
    <div className="space-y-2">
      {chats.map((chat) => (
        <Card
          key={chat.id}
          onClick={() => onChatSelect(chat.id)}
          className={`flex items-start p-4 cursor-pointer transition-all hover:bg-gray-50 dark:hover:bg-gray-800 ${
            selectedChat === chat.id ? 'bg-indigo-50 dark:bg-gray-800 ring-2 ring-indigo-500 dark:ring-indigo-400' : ''
          }`}
        >
          <div className="relative">
            <Avatar className="h-12 w-12">
              <AvatarImage src={chat.avatar || `/avatars/patient-${chat.id}.jpg`} alt={chat.patientName} />
              <AvatarFallback>{chat.patientName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
            {chat.status && (
              <span 
                className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-white
                  ${chat.status === 'online' ? 'bg-green-500' : 
                    chat.status === 'away' ? 'bg-yellow-500' : 'bg-gray-500'
                  }`
                }
              />
            )}
          </div>
          
          <div className="ml-4 flex-1 min-w-0">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
                  {chat.patientName}
                </h3>
                <p className="text-xs text-gray-500">
                  {formatDistanceToNow(chat.timestamp, { addSuffix: true })}
                </p>
              </div>
              {chat.unreadCount ? (
                <Badge 
                  variant="destructive" 
                  className="rounded-full px-2 py-0.5 text-xs"
                >
                  {chat.unreadCount}
                </Badge>
              ) : null}
            </div>
            
            <p className="mt-1 text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
              {chat.lastMessage}
            </p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default ChatList;