"use client";

import React, { JSX, useState } from "react";
import Image from "next/image";
import ImageViewer from "@/components/images/ImageViewer";

interface FounderCardProps {
  name: string;
  title: string;
  bio: string;
  imageSrc: string;
  socialLinks: { icon: JSX.Element; url: string }[];
  reverse?: boolean;
  classNames?: string;
}

const FounderCard: React.FC<FounderCardProps> = ({
  name,
  title,
  bio,
  imageSrc,
  socialLinks,
  reverse = false,
  classNames = "",
}) => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  return (
    <div className="mb-16">
      <div
        className={`flex flex-col ${
          reverse ? "md:flex-row-reverse" : "md:flex-row"
        } bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-indigo-500/20 transition-all duration-300`}
      >
        {/* Image Section */}
        <div className="md:w-1/3 relative group p-4 flex items-center justify-center">
          <div
            className="relative w-full aspect-[3/4] cursor-pointer overflow-hidden rounded-lg"
            onClick={() => setIsImageViewerOpen(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-2 z-10">
              <span className="text-white text-sm px-4 py-2 bg-black/40 backdrop-blur-sm rounded-full">
                Click to expand
              </span>
            </div>
            <Image
              src={imageSrc}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 33vw"
              style={{
                objectFit: "contain",
                objectPosition: "center center",
              }}
              alt={`${name}, ${title}`}
              className="transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        {/* Content Section - adjust width to complement the new image width */}
        <div className="md:w-3/4 p-8 md:p-12 flex flex-col justify-center">
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                {name}
              </h2>
              <p className="text-lg font-medium text-amber-400 mt-2">{title}</p>
            </div>

            <p className={`text-gray-300 leading-relaxed ${classNames}`}>
              {bio}
            </p>

            <div className="flex space-x-6 pt-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-amber-400 text-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ImageViewer
        isOpen={isImageViewerOpen}
        onClose={() => setIsImageViewerOpen(false)}
      >
        <Image
          src={imageSrc}
          width={1200}
          height={800}
          alt={`${name}, ${title}`}
          className="max-w-full max-h-[85vh] object-contain"
        />
      </ImageViewer>
    </div>
  );
};

export default FounderCard;
