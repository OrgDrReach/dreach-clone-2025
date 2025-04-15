"use client";
import React, { useState } from "react";
import Image from "next/image";
import Book from "@/components/landing/Book";
import { delay } from "@/lib/utils";

const ServiceHero: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = React.useState(false);
  const [isButtonVisible, setIsButtonVisible] = React.useState(false);

  React.useEffect(() => {
    const loadButton = async () => {
      await delay(1000);
      setIsButtonVisible(true);
    };
    loadButton();
  }, []);
  const handleClick = async () => {
    setIsLoading(true);
    await delay(500); // Reduced delay for better UX
    setShowModal((prev) => !prev); // Toggle instead of always setting to true
    setIsLoading(false);
  };

  return (
    <main className="relative min-h-[600px] bg-gradient-to-br from-white to-[#f8fdff] dark:from-slate-900 dark:to-slate-800">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.22] dark:opacity-[0.15]"
        style={{
          backgroundImage: `
            linear-gradient(#31ADDB 1.6px, transparent 1.6px),
            linear-gradient(90deg, #31ADDB 1.6px, transparent 1.6px),
            linear-gradient(#31ADDB 0.8px, transparent 0.8px),
            linear-gradient(90deg, #31ADDB 0.8px, transparent 0.8px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 8px 8px, 8px 8px',
          backgroundPosition: '-1.6px -1.6px, -1.6px -1.6px, -0.8px -0.8px, -0.8px -0.8px'
        }}
      ></div>

      {/* Content Container */}
      <div className="relative container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-2 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              <span className="text-[#125872] dark:text-white">
                Healthcare Solutions
              </span>{" "}
              <br />
              <span className="text-[#31ADDB] dark:text-[#31ADDB]">
                Made for You
              </span>
            </h1>

            <p className="text-xl max-w-xl text-[#125872]/80 dark:text-white/80">
              Healthcare made accessible, convenient, and comprehensive.
              Experience medical care that puts you first.
            </p>

            <div className="flex flex-wrap gap-4">
              {isButtonVisible && (
                <div
                  onClick={handleClick}
                  className="px-8 py-4 rounded-lg transition-all duration-300
                  bg-[#31ADDB] text-white hover:bg-[#125872]
                  shadow-lg hover:shadow-xl dark:hover:bg-[#31ADDB]/80 cursor-pointer"
                >
                  {isLoading ? (
                    "Loading..."
                  ) : (
                    <Book onClick={showModal ? handleClick : undefined} />
                  )}
                </div>
              )}
              <button
                className="px-8 py-4 rounded-lg transition-all duration-300
                border-2 border-[#31ADDB] text-[#31ADDB]
                hover:bg-[#31ADDB]/5
                dark:border-[#31ADDB] dark:text-[#31ADDB]
                dark:hover:bg-[#31ADDB]/10"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Content - Stats */}
          <div className="grid grid-cols-2 gap-4 max-w-[400px] w-full ml-auto">
            {" "}
            {/* Reduced max-width and gap */}
            {[
              { number: "24/7", text: "Available Support" },
              { number: "100+", text: "Healthcare Experts" },
              { number: "50k+", text: "Happy Patients" },
              { number: "15+", text: "Years Experience" },
            ].map((stat, index) => (
              <div
                key={index}
                className="aspect-square p-3 rounded-lg flex flex-col justify-center items-center
                  bg-white/50 backdrop-blur-sm
                  dark:bg-white/5 dark:backdrop-blur-sm
                  transition-all duration-300 hover:transform hover:scale-105
                  border border-[#31ADDB]/20 dark:border-[#31ADDB]/20
                  shadow-lg hover:shadow-xl"
              >
                <h3 className="text-2xl font-bold text-[#31ADDB]">
                  {" "}
                  {/* Reduced font size */}
                  {stat.number}
                </h3>
                <p className="text-sm text-center text-[#125872] dark:text-white/80">
                  {" "}
                  {/* Reduced font size */}
                  {stat.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceHero;
