"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { BookOpen, Save } from "lucide-react";

const Bio: React.FC = () => {
  const [bio, setBio] = useState("");

  const handleSaveBio = () => {
    console.log("Saving bio:", bio);
  };

  return (
    <Card className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-purple-600 dark:text-purple-400 flex items-center">
          <BookOpen className="mr-2" />
          Bio
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="Write a brief bio about yourself..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          className="bg-white dark:bg-gray-700 border-purple-200 dark:border-gray-600 focus:border-purple-400 dark:focus:border-purple-400"
          rows={4}
        />
        <Button
          onClick={handleSaveBio}
          className="w-full bg-purple-500 hover:bg-purple-600 text-white"
        >
          <Save className="mr-2" />
          Save Bio
        </Button>
      </CardContent>
    </Card>
  );
};

export default Bio;
