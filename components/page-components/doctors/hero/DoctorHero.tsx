"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { FaSearch, FaCalendar, FaUserMd, FaHospital } from "react-icons/fa";
import DoctorSearchModal from "@/components/page-components/doctors/search-filter/DoctorSearchModal";
import AppointmentBookingModal from "@/components/page-components/doctors/booking/AppointmentBookingModal";
import { useDoctorStore } from "@/lib/stores/doctorStore";
import { Provider } from "@/types/provider.d.types";
import { IDoctor } from "@/types/doctor.d.types";

// Define types for statistics
interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
}

// Define types for hero images
interface HeroImage {
  primary: string;
  fallback: string;
  alt: string;
}

const DoctorHero: React.FC = () => {
  const router = useRouter();
  const { doctors, loading } = useDoctorStore();
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);
  const [isAppointmentModalOpen, setIsAppointmentModalOpen] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<
    (Provider & IDoctor) | null
  >(null);
  const [imageError, setImageError] = useState(false);

  // Statistics configuration
  const stats: StatItem[] = [
    {
      number: "1000+",
      label: "Doctors",
      icon: <FaUserMd />,
      description: "Verified Healthcare Professionals",
    },
    {
      number: "50+",
      label: "Specialties",
      icon: <FaHospital />,
      description: "Medical Specializations",
    },
    {
      number: "24/7",
      label: "Support",
      icon: <FaCalendar />,
      description: "Round the Clock Assistance",
    },
  ];

  // Hero image configuration
  const heroImage: HeroImage = {
    primary:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?q=80&w=2091&auto=format&fit=crop",
    fallback:
      "https://images.unsplash.com/photo-1666214280557-f1b5022eb634?q=80&w=2070&auto=format&fit=crop",
    alt: "Professional healthcare doctor consulting with patient",
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const scaleIn = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  const handleAppointmentClick = () => {
    if (!selectedDoctor) {
      setIsSearchModalOpen(true);
    } else {
      setIsAppointmentModalOpen(true);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#125872]">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-14">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Your Health, Our
              <span className="text-[#4CC0F4]"> Priority</span>
            </h1>
            <p className="text-xl text-gray-100 mb-8 max-w-2xl mx-auto lg:mx-0">
              Experience healthcare excellence with our network of trusted
              medical professionals. Book appointments instantly and take
              control of your health journey.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsSearchModalOpen(true)}
                className="px-8 py-4 bg-white text-[#125872] rounded-full font-semibold hover:bg-[#4CC0F4] hover:text-white transition-all flex items-center justify-center gap-2"
              >
                <FaSearch /> Find a Doctor
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAppointmentClick}
                className="px-8 py-4 bg-[#4CC0F4] text-white rounded-full font-semibold hover:bg-white hover:text-[#125872] transition-all flex items-center justify-center gap-2"
              >
                <FaCalendar /> Book Appointment
              </motion.button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeInUp}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-4 rounded-lg bg-white/10 backdrop-blur-sm"
                >
                  <div className="text-[#4CC0F4] text-2xl mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-200">{stat.label}</div>
                  {stat.description && (
                    <div className="text-xs text-gray-300 mt-1">
                      {stat.description}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={scaleIn}
            transition={{ duration: 0.6 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full h-[600px] rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-[#125872] via-transparent to-transparent z-10" />
              <Image
                src={imageError ? heroImage.fallback : heroImage.primary}
                alt={heroImage.alt}
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
                onError={() => setImageError(true)}
              />

              {/* Trust Indicators */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm rounded-2xl p-4 shadow-lg z-20 hover:bg-white/100 transition-all"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#4CC0F4] rounded-full flex items-center justify-center text-white shadow-inner">
                    <FaUserMd size={24} />
                  </div>
                  <div>
                    <div className="font-medium text-[#125872]">
                      Verified Experts
                    </div>
                    <div className="text-sm text-gray-600">
                      Trusted Healthcare
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Availability Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="absolute bottom-4 left-4 bg-[#4CC0F4]/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg z-20"
              >
                <div className="flex items-center gap-2">
                  <FaCalendar className="text-white" />
                  <span className="text-white text-sm font-medium">
                    24/7 Available
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Modals */}
      <DoctorSearchModal
        isOpen={isSearchModalOpen}
        onClose={() => setIsSearchModalOpen(false)}
      />
      {isAppointmentModalOpen && selectedDoctor && (
        <AppointmentBookingModal
          isOpen={isAppointmentModalOpen}
          onClose={() => {
            setIsAppointmentModalOpen(false);
            setSelectedDoctor(null);
          }}
          selectedDoctor={selectedDoctor}
        />
      )}
    </section>
  );
};

export default DoctorHero;
