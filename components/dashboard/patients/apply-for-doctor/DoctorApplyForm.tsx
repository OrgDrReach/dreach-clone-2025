"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import ImageUpload from "./image-upload/ImageUpload";
import FormFields from "./formfields/FormFields";
import { Button } from "@/components/ui/button";

const DoctorApplyForm: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const methods = useForm();

  const onSubmit = (data: any) => {
    if (!selectedImage) {
      alert("Please upload an image");
      return;
    }
    console.log("Form data:", data);
    console.log("Selected image:", selectedImage);
    // Handle form submission here
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <main>
          <Card>
            <CardHeader>
              <CardTitle>Doctor's Application</CardTitle>
              <CardDescription>
                Please fill in the form below to apply for doctor.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/6">
                  <ImageUpload onImageChange={setSelectedImage} />
                </div>
                <div className="w-full md:w-2/3">
                  <FormFields />
                </div>
              </div>
              <div className="flex items-center justify-center mt-12">
                <Button type="submit" className="w-1/4">
                  Submit
                </Button>
              </div>
            </CardContent>
          </Card>
        </main>
      </form>
    </FormProvider>
  );
};

export default DoctorApplyForm;
