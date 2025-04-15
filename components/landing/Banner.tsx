"use client";
import React from "react";
import Image from "next/image";
import ImageViewer from "../images/ImageViewer";

const Banner: React.FC = () => {
  const [showImageViewer, setShowImageViewer] = React.useState(false);

  return (
    <main>
      <div className="cursor-pointer" onClick={() => setShowImageViewer(true)}>
        <Image
          src={"/websiteImages/healthunity_banner.png"}
          alt="banner_image"
          width={1980}
          height={1400}
          className="w-full h-auto"
        />
      </div>

      <ImageViewer
        isOpen={showImageViewer}
        onClose={() => setShowImageViewer(false)}
      >
        <Image
          src={"/websiteImages/healthunity_banner.png"}
          alt="banner_image"
          width={1980}
          height={1400}
          className="max-w-full max-h-[90vh] object-contain"
        />
      </ImageViewer>
    </main>
  );
};

export default Banner;
