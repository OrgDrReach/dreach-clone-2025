"use client";
import Image from "next/image";
import { useState } from "react";
import ImageViewer from "@/components/images/ImageViewer";

const StartupIndia = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const closeImageViewer = () => {
    setSelectedImage(null);
  };

  return (
    <section className="relative py-5 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Content Container */}
        <div className="relative z-10 bg-[#32addb]/5  dark:bg-[#125872]/40 backdrop-blur-sm rounded-[2.5rem] p-8 lg:p-12 shadow-lg border border-[#32addb]/20 dark:border-[#32addb]/10">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="flex-1 space-y-8">
              {/* Recognition Badge */}
              <div className="inline-flex items-center gap-2 bg-[#32addb]/10 dark:bg-[#125872]/50 rounded-full px-4 py-2 border border-[#32addb]/20 dark:border-[#32addb]/30">
                <div className="bg-white dark:bg-[#125872] rounded-full p-1">
                  <Image
                    src="https://res.cloudinary.com/dxjdeviz9/image/upload/v1734199232/fc89c902-1afd-4209-a79c-8e0e892c3c94.png"
                    alt="Startup India Logo"
                    width={80}
                    height={24}
                    className="object-contain rounded-full cursor-pointer"
                    onClick={() =>
                      handleImageClick(
                        "https://res.cloudinary.com/dxjdeviz9/image/upload/v1734199232/fc89c902-1afd-4209-a79c-8e0e892c3c94.png",
                      )
                    }
                  />
                </div>
                <span className="text-sm font-medium text-[#125872] dark:text-[#32addb] pl-2 border-l border-[#32addb]/20 dark:border-[#32addb]/30">
                  DPIIT Recognized
                </span>
              </div>

              {/* Main Content */}
              <div className="space-y-6">
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  Recognized by{" "}
                  <span className="text-[#32addb] dark:text-[#32addb]">
                    Startup India
                  </span>{" "}
                  Initiative
                </h2>
                <p className="text-lg text-[#125872] dark:text-[#32addb]/90">
                  We're proud to be officially recognized under the Startup
                  India initiative by the Government of India, validating our
                  commitment to revolutionizing healthcare accessibility across
                  the nation.
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#125872]/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm border border-[#32addb]/20 dark:border-[#32addb]/10 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#32addb]/10 dark:bg-[#32addb]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-[#125872] dark:text-[#32addb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#125872] dark:text-white">
                        Government Certified
                      </h3>
                      <p className="text-sm text-[#125872]/70 dark:text-[#32addb]/80 mt-1">
                        DPIIT Recognized Healthcare Startup
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-white dark:bg-[#125872]/30 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow backdrop-blur-sm border border-[#32addb]/20 dark:border-[#32addb]/10 group">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#32addb]/10 dark:bg-[#32addb]/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg
                        className="w-6 h-6 text-[#125872] dark:text-[#32addb]"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#125872] dark:text-white">
                        Innovation Leader
                      </h3>
                      <p className="text-sm text-[#125872]/70 dark:text-[#32addb]/80 mt-1">
                        Digital Healthcare Pioneer
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="lg:flex-1 w-full">
              <div
                className="relative aspect-[4/3] w-full"
                onClick={() =>
                  handleImageClick(
                    "https://res.cloudinary.com/dxjdeviz9/image/upload/v1734199192/de64d3ed-2686-465b-9c16-c51b18f088c8.png",
                  )
                }
              >
                <div className="absolute inset-0 rounded-2xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-tr from-[#32addb]/10 to-transparent dark:from-[#32addb]/10 mix-blend-overlay" />
                  <Image
                    src="https://res.cloudinary.com/dxjdeviz9/image/upload/v1734199192/de64d3ed-2686-465b-9c16-c51b18f088c8.png"
                    alt="Startup India Recognition"
                    fill
                    className="object-cover cursor-pointer"
                    priority
                  />
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-[#125872]/10 dark:ring-[#32addb]/10" />
              </div>
            </div>
          </div>
        </div>

        {/* Background Decorative Elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-1/2 left-0 w-32 h-32 bg-[#32addb]/20 dark:bg-[#32addb]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#125872]/20 dark:bg-[#125872]/5 rounded-full blur-3xl" />
        </div>
      </div>

      <ImageViewer isOpen={!!selectedImage} onClose={closeImageViewer}>
        {selectedImage && (
          <Image
            src={selectedImage}
            alt="Enlarged view"
            width={1200}
            height={800}
            className="object-contain"
          />
        )}
      </ImageViewer>
    </section>
  );
};

export default StartupIndia;
