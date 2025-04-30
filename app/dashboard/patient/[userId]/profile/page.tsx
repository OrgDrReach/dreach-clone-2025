"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Edit2, Save } from "lucide-react";
import { PatientProfileCard } from "@/components/dashboard/patient/profile/PatientProfileCard";
import { toast } from "sonner";

const ProfilePage: React.FC = () => {
  const initialProfileData = {
    profilePicture: "/default-avatar.png",
    firstName: "",
    lastName: "",
    email: "",
    phoneNumbers: ["+91 "],
    dateOfBirth: "",
    bloodGroup: "",
    currentAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "India",
    },
    permanentAddress: {
      street: "",
      city: "",
      state: "",
      zipCode: "",
      country: "India",
    },
    emergencyContact: {
      name: "",
      relationship: "",
      phoneNumber: "+91 ",
      email: "",
    },
    familyMembers: [
      {
        name: "",
        relationship: "",
        phoneNumber: "+91 ",
      },
    ],
  };

  const [formData, setFormData] = useState(initialProfileData);
  const [isEditing, setIsEditing] = useState(true);
  const [isFirstTime, setIsFirstTime] = useState(true);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFormChange = (updatedData: typeof initialProfileData) => {
    setFormData(updatedData);
  };

  const handleImageChange = (file: File) => {
    setSelectedImage(file);
  };

  const onSubmit = async () => {
    if (!selectedImage && !formData.profilePicture) {
      toast.error("Please upload a profile picture");
      return;
    }

    try {
      // Here you would typically upload the image and form data to your backend
      console.log("Form data:", formData);
      console.log("Selected image:", selectedImage);

      setIsEditing(false);
      setIsFirstTime(false);
      toast.success("Profile updated successfully");
    } catch (error) {
      toast.error("Failed to update profile");
      console.error(error);
    }
  };

  const placeholders = {
    firstName: "Enter your first name",
    lastName: "Enter your last name",
    email: "Enter your email address",
    phoneNumber: "Enter your phone number",
    dateOfBirth: "Select your date of birth",
    bloodGroup: "Select blood group",
    address: {
      street: "Enter street address",
      city: "Enter city",
      state: "Enter state",
      zipCode: "Enter PIN code",
      country: "Enter country",
    },
    emergencyContact: {
      name: "Enter emergency contact name",
      relationship: "Enter relationship",
      phoneNumber: "Enter emergency contact number",
      email: "Enter emergency contact email",
    },
    familyMember: {
      name: "Enter family member name",
      relationship: "Enter relationship",
      phoneNumber: "Enter family member number",
    },
  };

  return (
    <main className="p-4 space-y-6 bg-gray-100 dark:bg-gray-900 rounded-lg min-h-screen">
      <div className="flex justify-between items-center bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
          {isFirstTime ? "Complete Your Profile" : "Patient Profile"}
        </h1>
        <Button
          onClick={onSubmit}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          <Save className="mr-2 h-4 w-4" />
          {isFirstTime ? "Save Profile" : "Save Changes"}
        </Button>
      </div>
      <PatientProfileCard
        data={formData}
        placeholders={placeholders}
        isEditing={isEditing || isFirstTime}
        onImageChange={handleImageChange}
        onChange={handleFormChange}
      />
    </main>
  );
};

export default ProfilePage;
