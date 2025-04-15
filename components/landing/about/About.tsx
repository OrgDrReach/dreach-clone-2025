import React from "react";
import Image from "next/image";

const About = () => {
  const features = [
    "Physician partnership for patient care",
    "Book now, know your wait",
    "Choose your comfort: video or text",
    "Multi-specialist diagnosis for accuracy",
  ];

  return (
    <section className="bg-gradient-to-br from-[#125872] via-[#125872]/95 to-[#125872] py-16 sm:py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with animated background */}
        <div className="relative mb-12 sm:mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[500px] h-[500px] bg-[#ff7c25]/5 rounded-full blur-[100px] animate-pulse"></div>
          </div>
          <div className="relative text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-[#ff7c25]">Us</span>
            </h2>
            <div className="flex items-center justify-center space-x-2">
              <span className="w-8 h-1 bg-[#00feff] rounded-full"></span>
              <span className="w-3 h-1 bg-[#00feff]/50 rounded-full"></span>
              <span className="w-2 h-1 bg-[#00feff]/30 rounded-full"></span>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center">
          {/* Left Side: Mission & Features */}
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-[#00feff] to-[#ff7c25] rounded-2xl opacity-20 blur-xl transition-all duration-500 group-hover:opacity-30"></div>
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <h3 className="text-3xl font-bold text-white mb-6">
                  Our Mission
                </h3>
                <p className="text-white/80 leading-relaxed">
                  Our mission is to deliver premium and reliable healthcare
                  services at an affordable cost, ensuring accessibility for
                  everyone across the country. We are committed to making
                  quality healthcare available to all, regardless of their
                  location or income.
                </p>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="absolute -inset-px bg-gradient-to-r from-[#00feff] to-[#ff7c25] rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                  <div className="relative">
                    <div className="w-12 h-1 bg-[#00feff] mb-4 group-hover:w-16 transition-all duration-300"></div>
                    <p className="text-white/90 font-medium">{feature}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side: Interactive Image Stack */}
          <div className="relative px-4 sm:px-8 md:px-0 mt-8 sm:mt-12 lg:mt-0">
            <div className="grid grid-cols-8 grid-rows-8 gap-6 sm:gap-8">
              {/* Main circular image */}
              <div className="col-span-4 row-span-4 col-start-1 row-start-1">
                <div className="relative group">
                  <div
                    className="aspect-square overflow-hidden rounded-full 
                    ring-2 ring-[#00feff]/30 ring-offset-2 ring-offset-[#125872]
                    shadow-lg shadow-[#00feff]/20 transition-all duration-500"
                  >
                    <Image
                      src="/websiteImages/banner_img.png"
                      width={180} //{/* reduced from 220 */}
                      height={180}
                      className="object-cover w-full h-full transform transition-all duration-700 
                        group-hover:scale-110 group-hover:rotate-3"
                      alt="Healthcare service 1"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-[#00feff]/40 via-transparent to-[#ff7c25]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"></div>
                  </div>
                  <div className="absolute -top-4 -left-4 w-6 h-6 border-t-4 border-l-4 border-[#00feff]/40 rounded-tl-lg"></div>
                </div>
              </div>
              {/* Second circular image (changed from elliptical) */}
              <div className="col-span-4 row-span-4 col-start-5 row-start-2">
                <div className="relative group">
                  <div
                    className="aspect-square overflow-hidden rounded-full 
                    ring-2 ring-[#ff7c25]/30 ring-offset-2 ring-offset-[#125872]
                    shadow-lg shadow-[#ff7c25]/20 transition-all duration-500"
                  >
                    <Image
                      src="/websiteImages/banner_img.png"
                      width={160} // {/* reduced from 200 */}
                      height={160} // {/* changed to match width for circle */}
                      className="object-cover w-full h-full transform transition-all duration-700 
                        group-hover:scale-110 group-hover:rotate-[-3deg]"
                      alt="Healthcare service 2"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-bl from-[#ff7c25]/40 via-transparent to-[#00feff]/20 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                    ></div>
                  </div>
                  <div className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-[#ff7c25]/30"></div>
                </div>
              </div>
              {/* Third circular image */}
              <div className="col-span-4 row-span-4 col-start-2 row-start-5">
                <div className="relative group">
                  <div
                    className="aspect-square overflow-hidden rounded-full 
                    ring-2 ring-[#00feff]/20 ring-offset-2 ring-offset-[#125872]
                    shadow-lg shadow-[#00feff]/10 transition-all duration-500"
                  >
                    <Image
                      src="/websiteImages/banner_img.png"
                      width={140} // {/* reduced from 180 */}
                      height={140}
                      className="object-cover w-full h-full transform transition-all duration-700 
                        group-hover:scale-110 group-hover:rotate-6"
                      alt="Healthcare service 3"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-tl from-[#00feff]/30 via-transparent to-[#ff7c25]/30 
                        opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full"
                    ></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-6 h-6 border-b-4 border-r-4 border-[#00feff]/30 rounded-br-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
