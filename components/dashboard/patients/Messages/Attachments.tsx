"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { X } from "lucide-react";

interface AttachmentFile {
  name: string;
  size: number;
  type: string;
}

interface AttachmentsProps {
  onAttach: (files: File[]) => void;
  onRemove: (index: number) => void;
  attachments: AttachmentFile[];
}

const Attachments: React.FC<AttachmentsProps> = ({
  onAttach,
  onRemove,
  attachments,
}) => {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      onAttach(fileList);
    }
  };

  return (
    <div className="space-y-2">
      <Input
        type="file"
        onChange={handleFileChange}
        multiple
        className="hidden"
        id="file-upload"
      />
      <label htmlFor="file-upload">
        <Button variant="outline" className="cursor-pointer" asChild>
          <span>Attach Files</span>
        </Button>
      </label>
      {attachments.length > 0 && (
        <ul className="space-y-2">
          {attachments.map((file, index) => (
            <li
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded"
            >
              <span className="text-sm truncate">{file.name}</span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onRemove(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </Button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Attachments;
