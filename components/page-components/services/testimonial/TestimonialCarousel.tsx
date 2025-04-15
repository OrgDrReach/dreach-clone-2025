"use client";

import React, { useState, useEffect } from "react";

interface Slide {
  image: string;
  name: string;
  title: string;
  text: string;
}

const slides: Slide[] = [
  {
    image: "/images/Rewant v1.2.png",
    name: "Rewant Raj",
    title: "Founder Circle",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
  },
  {
    image: "/images/Rewant v1.2.png",
    name: "Aditya Kumar",
    title: "Founder Circle",
    text: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco ",
  },
  {
    image: "/images/Rewant v1.2.png",
    name: "Hardik Bhosale",
    title: "Founder Circle",
    text: "Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedious form, long calls, or administrative hassle) and securely",
  },
];

const TestimonialCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };
  const goToPreviousSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length,
    );
  };
  useEffect(() => {
    const interval = setInterval(goToNextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative py-4 mt-10">
      <h2 className="sm:text-[32px] xl:text-4xl text-3xl px-8 text-center  font-bold mb-12  text-[#125872]">
        What Our Customer Are Saying
      </h2>
      <div className="container mx-auto px-6 sm:px-24 lg:px-32 2xlg:px-56 xl:px-80">
        <div className="bg-offer text-white rounded-lg shadow-lg p-7 sm:p-8 lg:p-10 xl:pb-12 flex flex-col items-center">
          <div className="flex justify-center">
            <button
              onClick={goToPreviousSlide}
              className="text-2xl text-white mr-4"
            >
              {/* {"<"} */}
            </button>
            <div className="flex-1">
              <div className="flex items-center justify-center">
                <img
                  src={slides[currentIndex]?.image}
                  alt={slides[currentIndex]?.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-xl text-orange-400 font-bold">
                    {slides[currentIndex]?.name}
                  </h3>
                  <p className="text-[#77dbff] font-medium">
                    {slides[currentIndex]?.title}
                  </p>
                </div>
              </div>
              <p className="mt-4 text-center">{slides[currentIndex]?.text}</p>
            </div>
            <button
              onClick={goToNextSlide}
              className="text-2xl text-white ml-4"
            >
              {/* {">"} */}
            </button>
          </div>
          <div className="flex mt-4 space-x-2">
            {slides.map((_, index) => (
              <button
                title="Slide"
                key={index}
                className={`h-2 w-2 rounded-full ${
                  currentIndex === index ? "bg-white" : "bg-gray-400"
                }`}
                // onClick={() => setCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
