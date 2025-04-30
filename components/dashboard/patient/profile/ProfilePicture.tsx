import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Camera } from "lucide-react";

interface ProfilePictureProps {
  defaultImage?: string;
  onImageChange: (file: File) => void;
  isEditing: boolean;
}

export const ProfilePicture: React.FC<ProfilePictureProps> = ({
  defaultImage = "/default-avatar.png",
  onImageChange,
  isEditing,
}) => {
  const [previewUrl, setPreviewUrl] = useState<string>(defaultImage);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      onImageChange(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="relative flex items-center gap-4">
      <Avatar className="h-24 w-24">
        <AvatarImage src={previewUrl} alt="Profile picture" />
        <AvatarFallback>
          <Camera className="h-8 w-8 text-gray-400" />
        </AvatarFallback>
      </Avatar>
      {isEditing && (
        <div>
          <input
            type="file"
            id="profile-picture"
            className="hidden"
            accept="image/*"
            onChange={handleImageChange}
          />
          <Button
            type="button"
            variant="outline"
            onClick={() => document.getElementById("profile-picture")?.click()}
          >
            Change Photo
          </Button>
        </div>
      )}
    </div>
  );
};
