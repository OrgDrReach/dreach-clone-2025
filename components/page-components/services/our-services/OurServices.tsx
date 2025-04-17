import React from "react";
import ServiceCard from "./ServiceCard";
import { FaUserMd, FaHospital, FaVideo } from "react-icons/fa";
import { MdHomeWork, MdBiotech } from "react-icons/md";
import { RiMedicineBottleFill } from "react-icons/ri";
import Link from "next/link";

export const ServiceData = [
  {
    id: 1,
    icon: (
      <FaUserMd className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Expert Consultation",
    desc: "Connect with top specialists through seamless video consultations available 24/7.",
    link: "",
  },
  {
    id: 2,
    icon: (
      <FaHospital className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Integrated Care",
    desc: "Comprehensive healthcare combining virtual consultations and local nursing support.",
    link: "/services/integrated-care",
  },
  {
    id: 3,
    icon: (
      <FaVideo className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Virtual Care",
    desc: "Quick and easy video consultations with pre-consultation symptom sharing.",
    link: "",
  },
  {
    id: 4,
    icon: (
      <MdHomeWork className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Home Healthcare",
    desc: "Professional healthcare services delivered right to your doorstep.",
    link: "/services/home-care",
  },
  {
    id: 5,
    icon: (
      <MdBiotech className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Diagnostics",
    desc: "Home sample collection with digital results and expert interpretation.",
    link: "",
  },
  {
    id: 6,
    icon: (
      <RiMedicineBottleFill className="text-5xl text-[#31ADDB] group-hover:text-white transition-all duration-300 transform group-hover:scale-110" />
    ),
    text: "Pharmacy",
    desc: "Digital prescriptions with doorstep medication delivery service.",
    link: "",
  },
];

const OurServices: React.FC = () => {
  return (
    <main className="py-16 px-4 lg:px-24 bg-gradient-to-b from-gray-50/50 via-white to-gray-50/50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-[#125872] dark:text-[#31ADDB] mb-4">
            Our Services
          </h1>
          <div className="flex items-center justify-center gap-2">
            <div className="h-1 w-32 bg-[#31addb] dark:bg-[#125872] rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2">
          {ServiceData.map((info, index) => (
            <Link href={info.link} key={index}>
              <ServiceCard
                key={index}
                icon={info.icon}
                text={info.text}
                desc={info.desc}
                className="group relative flex flex-col p-6 items-center justify-center gap-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-1 border border-gray-100/50 dark:border-gray-700/50 hover:border-[#31ADDB] dark:hover:border-[#125872] overflow-hidden isolate cursor-pointer"
              />
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default OurServices;
