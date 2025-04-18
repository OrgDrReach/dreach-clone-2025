"use client";

import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";
import { Button } from "@/components/ui/button";
import { Mail, Users, Send, Clock, Star } from "lucide-react";

// Dynamically import client-side components
const Inbox = dynamic(
  () => import("@/components/dashboard/patients/Messages/Inbox"),
  { ssr: false },
);
const Compose = dynamic(
  () => import("@/components/dashboard/patients/Messages/Compose"),
  { ssr: false },
);
const MessageHistory = dynamic(
  () => import("@/components/dashboard/patients/Messages/MessageHistory"),
  { ssr: false },
);
const RatingSystem = dynamic(
  () => import("@/components/dashboard/patients/Messages/RatingSystem"),
  { ssr: false },
);
const PrivateMessages = dynamic(
  () => import("@/components/dashboard/patients/Messages/PrivateMessages"),
  { ssr: false },
);
const GroupMessages = dynamic(
  () => import("@/components/dashboard/patients/Messages/GroupMessages"),
  { ssr: false },
);

const MessagesPage: React.FC = () => {
  const [activeComponent, setActiveComponent] = useState("inbox");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false);
  }, []);

  const handleRatingSubmit = (rating: number, feedback: string) => {
    console.log("Rating:", rating, "Feedback:", feedback);
  };

  if (isLoading) {
    return <Skeleton className="h-screen w-full" />;
  }

  const renderComponent = () => {
    switch (activeComponent) {
      case "inbox":
        return <Inbox />;
      case "compose":
        return <Compose />;
      case "history":
        return <MessageHistory />;
      case "private":
        return <PrivateMessages />;
      case "group":
        return <GroupMessages />;
      case "rate":
        return <RatingSystem onSubmit={handleRatingSubmit} />;
      default:
        return <Inbox />;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex h-[95vh] bg-gradient-to-br from-blue-50 to-indigo-100"
    >
      <nav className="w-64 bg-white shadow-lg p-6 space-y-4">
        <h1 className="text-2xl font-bold text-indigo-800 mb-8">Messages</h1>
        {[
          { name: "inbox", icon: Mail },
          { name: "compose", icon: Send },
          { name: "history", icon: Clock },
          { name: "private", icon: Mail },
          { name: "group", icon: Users },
          { name: "rate", icon: Star },
        ].map(({ name, icon: Icon }) => (
          <Button
            key={name}
            variant={activeComponent === name ? "default" : "ghost"}
            className={`w-full justify-start ${
              activeComponent === name
                ? "bg-sky-800 text-white hover:bg-sky-700"
                : ""
            }`}
            onClick={() => setActiveComponent(name)}
          >
            <Icon className="mr-2 h-4 w-4" />{" "}
            {name.charAt(0).toUpperCase() + name.slice(1)}
          </Button>
        ))}
      </nav>
      <main className="flex-1 p-8 overflow-auto">{renderComponent()}</main>
    </motion.div>
  );
};

export default MessagesPage;
