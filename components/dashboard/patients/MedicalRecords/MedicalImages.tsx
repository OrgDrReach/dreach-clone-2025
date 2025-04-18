"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import { ZoomIn, ZoomOut, Move, X } from "lucide-react";

interface MedicalImage {
  id: string;
  name: string;
  date: string;
  imageUrl: string;
  description: string;
}

interface MedicalImagesProps {
  images: MedicalImage[];
}

const MedicalImages: React.FC<MedicalImagesProps> = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState<MedicalImage | null>(null);

  return (
    <Card className="w-full bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
      <CardHeader className="bg-white bg-opacity-70 backdrop-blur-sm">
        <CardTitle className="text-2xl font-bold text-purple-700">
          Medical Images
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[400px] w-full rounded-md border p-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image) => (
              <Dialog key={image.id}>
                <DialogTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full h-40 p-0 overflow-hidden"
                    onClick={() => setSelectedImage(image)}
                  >
                    <img
                      src={image.imageUrl}
                      alt={image.name}
                      className="w-full h-full object-cover"
                    />
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-3xl w-full h-[80vh]">
                  <DialogHeader>
                    <DialogTitle>{image.name}</DialogTitle>
                  </DialogHeader>
                  <div className="relative w-full h-full">
                    <TransformWrapper
                      initialScale={1}
                      initialPositionX={0}
                      initialPositionY={0}
                    >
                      {({ zoomIn, zoomOut, resetTransform }) => (
                        <>
                          <div className="absolute top-2 left-2 z-10 flex space-x-2">
                            <Button size="sm" onClick={() => zoomIn()}>
                              <ZoomIn className="h-4 w-4" />
                            </Button>
                            <Button size="sm" onClick={() => zoomOut()}>
                              <ZoomOut className="h-4 w-4" />
                            </Button>
                            <Button size="sm" onClick={() => resetTransform()}>
                              <Move className="h-4 w-4" />
                            </Button>
                          </div>
                          <TransformComponent>
                            <img
                              src={image.imageUrl}
                              alt={image.name}
                              className="w-full h-full object-contain"
                            />
                          </TransformComponent>
                        </>
                      )}
                    </TransformWrapper>
                  </div>
                  <p className="text-sm text-gray-500 mt-2">
                    {image.description}
                  </p>
                  <p className="text-xs text-gray-400">Date: {image.date}</p>
                </DialogContent>
              </Dialog>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default MedicalImages;
