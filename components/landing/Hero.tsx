"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import ImageViewer from "../images/ImageViewer";

const Hero: React.FC = () => {
  const router = useRouter();
  const [showImageViewer, setShowImageViewer] = React.useState(false);

  return (
    <main className="hero py-6 sm:py-8 md:py-12 lg:py-16 lg:pb-28">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center">
          <div className="text-white w-full lg:w-1/2 mt-8 lg:mt-0">
            <h1 className="font-bold text-[22px] sm:text-[25px] md:text-[28px] xl:text-[30px] pb-2 sm:pb-4 text-center lg:text-left">
              <span className="text-[#ff852d]">Quality Care Begins Here</span>
            </h1>
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] xl:text-5xl 2xl:text-[42px] font-bold mb-4 sm:mb-6 text-center lg:text-left leading-tight">
              Global Care, Local Trust
            </p>
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-[#01F4F1] mb-4 sm:mb-6 text-center lg:text-left">
              " Healthcare at your fingertips "
            </p>
            <div className="lg:max-w-[600px] mb-6 sm:mb-8">
              <p className="text-sm sm:text-base text-center lg:text-left leading-relaxed">
                Choose Dr Reach and enjoy world-class treatment. Our virtual
                platform and integrated health facilities provide comprehensive
                medical consultation services. We are determined to make quality
                healthcare accessible, convenient, and effective for everyone
                through one of India's top national start-ups.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start mb-8 sm:mb-12">
              <button
                onClick={() => router.push("/auth/login")}
                className="bg-orange-500 text-base sm:text-lg hover:bg-white text-white hover:text-orange-500 font-bold py-2.5 sm:py-3 px-6 sm:px-8 rounded-full transition duration-300 shadow-lg hover:shadow-xl cursor-pointer"
                title="Get Started"
              >
                Get Started
              </button>
            </div>
            <div className={`w-full md:w-[80%] mx-auto lg:mx-0`}>
              <div
                className={`bg-white/10 lg:bg-transparent rounded-lg p-4 sm:p-6 md:p-8`}
              >
                <div
                  className={`flex gap-4 sm:gap-6 md:gap-8 justify-center lg:justify-start`}
                >
                  <div className={`text-center flex flex-col lg:gap-2`}>
                    <h3
                      className={`text-3xl md:text-5xl lg:text-6xl font-bold`}
                    >
                      20+
                    </h3>
                    <p className={`text-xs md:text-base lg:text-lg`}>
                      Years of Experience
                    </p>
                  </div>
                  <div className={`separator`}></div>
                  <div className={`text-center flex flex-col lg:gap-2`}>
                    <h3
                      className={`text-3xl md:text-5xl lg:text-6xl font-bold`}
                    >
                      50+
                    </h3>
                    <p className={`text-xs md:text-base lg:text-lg`}>
                      Expert Doctors
                    </p>
                  </div>
                  <div className={`separator`}></div>
                  <div className={`text-center flex flex-col lg:gap-2`}>
                    <h3
                      className={`text-3xl md:text-5xl lg:text-6xl font-bold`}
                    >
                      30+
                    </h3>
                    <p className={`text-xs md:text-base lg:text-lg`}>
                      Clinics and Hospitals
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mb-8 lg:mb-0">
            <div
              className="bg-[#E6E6E6] rounded-xl hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)] transition duration-300 p-2 sm:p-4 cursor-pointer"
              onClick={() => setShowImageViewer(true)}
            >
              <Image
                src="/websiteImages/banner_img.png"
                alt="banner image"
                width={455}
                height={455}
                className="w-full max-w-[280px] sm:max-w-[400px] lg:max-w-[380px] xl:w-[450px] rounded-lg"
                style={{
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </div>

      <ImageViewer
        isOpen={showImageViewer}
        onClose={() => setShowImageViewer(false)}
      >
        <Image
          src="/websiteImages/banner_img.png"
          alt="banner image"
          width={900}
          height={900}
          className="max-w-full max-h-[90vh] object-contain rounded-lg"
          style={{
            height: "auto",
          }}
        />
      </ImageViewer>
    </main>
  );
};

export default Hero;
