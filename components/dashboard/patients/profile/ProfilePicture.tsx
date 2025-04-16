"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera, Upload } from 'lucide-react';

const ProfilePicture: React.FC = () => {
  const [imageUrl, setImageUrl] = useState('');

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Card className="bg-gradient-to-br from-violet-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 shadow-lg">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-violet-600 dark:text-violet-400 flex items-center">
          <Camera className="mr-2" />
          Profile Picture
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Avatar className="w-32 h-32 border-4 border-violet-200 dark:border-violet-700">
          <AvatarImage src={imageUrl} />
          <AvatarFallback className="bg-violet-100 dark:bg-violet-800 text-violet-600 dark:text-violet-200 text-2xl font-bold">
            {imageUrl ? 'Profile' : 'Upload'}
          </AvatarFallback>
        </Avatar>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          style={{ display: 'none' }}
          id="profile-picture-upload"
        />
        <Button 
          onClick={() => document.getElementById('profile-picture-upload')?.click()}
          className="bg-violet-500 hover:bg-violet-600 text-white"
        >
          <Upload className="mr-2 h-4 w-4" />
          Upload Picture
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfilePicture;