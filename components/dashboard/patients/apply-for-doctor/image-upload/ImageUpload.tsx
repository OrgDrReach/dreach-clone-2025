import React, { useState, useRef } from "react";

interface ImageUploadProps {
  onImageChange: (file: File | null) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageChange }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        // 5MB limit
        setError("File size should not exceed 5MB");
        onImageChange(null);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
        setError(null);
      };
      reader.readAsDataURL(file);
      onImageChange(file);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
    onImageChange(null);
  };

  return (
    <div className="flex flex-col items-center space-y-2 w-full">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        ref={fileInputRef}
        className="hidden"
      />
      <div
        className="w-[10rem] h-[12rem] border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center cursor-pointer hover:border-gray-400 transition-colors overflow-hidden"
        onClick={() => !selectedImage && fileInputRef.current?.click()}
      >
        {selectedImage ? (
          <img
            src={selectedImage}
            alt="Selected"
            className="w-full h-full object-cover"
          />
        ) : (
          <span className="text-sm text-gray-500">Click to upload image</span>
        )}
      </div>
      {error && <p className="text-red-500 text-sm">{error}</p>}
      {selectedImage && (
        <button
          onClick={handleRemoveImage}
          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors mt-2"
        >
          Remove Image
        </button>
      )}
    </div>
  );
};

export default ImageUpload;
