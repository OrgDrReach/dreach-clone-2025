"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FaArrowRight,
  FaUserMd,
  FaHospital,
  FaAward,
  FaCheckCircle,
} from "react-icons/fa";
import ImageViewer from "@/components/images/ImageViewer";

const WhoWeAre = () => {
  const [isImageViewerOpen, setIsImageViewerOpen] = useState(false);

  const stats = [
    {
      icon: <FaUserMd className="text-3xl" />,
      count: "50+",
      label: "Expert Doctors",
    },
    {
      icon: <FaHospital className="text-3xl" />,
      count: "1000+",
      label: "Happy Patients",
    },
    {
      icon: <FaAward className="text-3xl" />,
      count: "15+",
      label: "Years Experience",
    },
  ];

  const highlights = [
    "24/7 Virtual Medical Support",
    "Experienced Healthcare Professionals",
    "Advanced Telemedicine Platform",
    "Affordable Healthcare Solutions",
  ];

  return (
    <section className={`who-we-are`}>
      <div className={`who-we-are-container`}>
        <div className={`text-center mb-16`}>
          <h2>Who We Are</h2>
          <div className={`who-we-are-separator`}></div>
        </div>

        <div className={`who-we-are-column`}>
          <div className={`relative group`}>
            <div className={`who-we-are-unknown`}></div>
            <div className={`who-we-are-background`}>
              <Image
                src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
                alt="Modern Healthcare Facility"
                width={600}
                height={400}
                className={`who-we-are-image cursor-pointer`}
                priority
                unoptimized={true}
                onClick={() => setIsImageViewerOpen(true)}
              />
              <div className={`who-we-are-stat-exp`}>
                <p className={`text-3xl font-bold`}>10+</p>
                <p className={`text-sm font-medium`}>Years of Excellance</p>
              </div>
            </div>
          </div>

          <ImageViewer
            isOpen={isImageViewerOpen}
            onClose={() => setIsImageViewerOpen(false)}
          >
            <Image
              src="https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=2000&auto=format&fit=crop"
              alt="Modern Healthcare Facility"
              width={1200}
              height={800}
              className="object-contain"
              unoptimized={true}
            />
          </ImageViewer>

          <div className={`space-y-8 lg:text-left text-center`}>
            <div>
              <h3 className="lg:text-left text-center">
                Revolutionizing Healthcare Access
              </h3>
              <p
                className={`text-lg text-gray-700 dark:text-gray-300 leading-relaxed`}
              >
                Dr. Reach is on a mission to transform healthcare by making it
                simpler, faster, and more accessible for everyone, regardless of
                location. We save patients time, money, and the hassle of
                dealing with complex healthcare systems by offering a seamless
                reliable solutions.
              </p>
            </div>
            <div className={`grid grid-cols-1 md:grid-cols-2 gap-4`}>
              {highlights.map((highlight, index) => (
                <div
                  key={index}
                  className="flex items-center lg:justify-start justify-center space-x-2 text-gray-700 dark:text-gray-300"
                >
                  <FaCheckCircle className="text-[#2da3cf] dark:text-[#56d2ff] flex-shrink-0" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
            <div className="flex lg:justify-start justify-center">
              <Link href={"/contact"} className={`inline-block`}>
                <button className={`connect-btn`}>
                  <span className={`text-lg`}>Connect with Us</span>
                  <FaArrowRight className={`text-lg`} />
                </button>
              </Link>
            </div>

            {/* Stats section remains in grid */}
            <div className={`grid grid-cols-3 gap-4`}>
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`stats-data text-center flex flex-col items-center`}
                >
                  <div className="text-[#2da3cf] dark:text-[#56d2ff] mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="font-bold text-2xl text-[#125872] dark:text-[#56d2ff]">
                    {stat.count}
                  </div>
                  <div className="text-sm font-medium text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
