"use client";

import React, { JSX } from "react";
import { Zap, Earth, Shield, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

interface MissionVisionCardProps {
  title: string;
  items: Array<{
    icon: JSX.Element;
    title: string;
    description: string;
  }>;
  className?: string;
  imageUrl: string;
}

interface ColorScheme {
  bg: string;
  icon: string;
  text: string;
  hover: string;
  border: string;
}

const MissionVisionCard = ({
  title,
  items,
  className = "",
  imageUrl,
}: MissionVisionCardProps) => {
  const colors: Record<number, ColorScheme> = {
    1: {
      bg: "bg-[#125872]/10 dark:bg-[#125872]/20",
      icon: "bg-[#125872] dark:bg-[#125872]",
      text: "text-[#125872] dark:text-[#31addb]",
      hover:
        "group-hover/item:text-[#125872] dark:group-hover/item:text-[#31addb]",
      border: "border-[#125872]/20 dark:border-[#125872]/30",
    },
    2: {
      bg: "bg-[#31addb]/10 dark:bg-[#31addb]/20",
      icon: "bg-[#31addb] dark:bg-[#31addb]",
      text: "text-[#31addb] dark:text-[#31addb]",
      hover:
        "group-hover/item:text-[#31addb] dark:group-hover/item:text-[#31addb]",
      border: "border-[#31addb]/20 dark:border-[#31addb]/30",
    },
    3: {
      bg: "bg-[#125872]/10 dark:bg-[#125872]/20",
      icon: "bg-[#125872] dark:bg-[#125872]",
      text: "text-[#125872] dark:text-[#31addb]",
      hover:
        "group-hover/item:text-[#125872] dark:group-hover/item:text-[#31addb]",
      border: "border-[#125872]/20 dark:border-[#125872]/30",
    },
    4: {
      bg: "bg-[#31addb]/10 dark:bg-[#31addb]/20",
      icon: "bg-[#31addb] dark:bg-[#31addb]",
      text: "text-[#31addb] dark:text-[#31addb]",
      hover:
        "group-hover/item:text-[#31addb] dark:group-hover/item:text-[#31addb]",
      border: "border-[#31addb]/20 dark:border-[#31addb]/30",
    },
  };

  return (
    <motion.div
      initial="initial"
      whileInView="animate"
      viewport={{ once: true }}
      className={`group ${className}`}
    >
      <div className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-xl dark:shadow-2xl dark:shadow-slate-900/50 overflow-hidden">
        {/* Card Header */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={imageUrl}
            alt={title}
            fill
            className="object-cover object-center scale-110"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#125872]/95 to-[#31addb]/80 dark:from-[#125872]/90 dark:to-[#31addb]/75" />

          {/* Header Content */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <span className="px-4 py-1.5 bg-white/10 dark:bg-slate-900/20 backdrop-blur-md rounded-full text-white text-sm font-medium">
                {title}
              </span>
              <span className="w-12 h-12 flex items-center justify-center rounded-2xl bg-white/10 dark:bg-slate-900/20 backdrop-blur-md text-white">
                {title === "Our Mission" ? (
                  <Zap className="w-6 h-6" />
                ) : (
                  <Shield className="w-6 h-6" />
                )}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-white">
              {title === "Our Mission"
                ? "Revolutionizing Healthcare Access"
                : "Shaping Tomorrow's Care"}
            </h2>
          </div>
        </div>

        {/* Content Grid */}
        <div className="p-8">
          <div className="grid grid-cols-1 gap-4">
            {items.map((item, index) => (
              <motion.div
                key={item.title}
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: {
                    opacity: 1,
                    y: 0,
                    transition: { delay: index * 0.1 },
                  },
                }}
                className="group/item"
              >
                <div
                  className={`relative p-5 rounded-2xl ${
                    colors[((index % 4) + 1) as 1 | 2 | 3 | 4]?.bg ||
                    "default-bg-class"
                  } hover:bg-white dark:hover:bg-slate-800 transition-colors duration-300`}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div
                      className={`shrink-0 w-10 h-10 ${
                        colors[((index % 4) + 1) as 1 | 2 | 3 | 4]?.icon ||
                        "default-icon-class"
                      } rounded-xl shadow-lg dark:shadow-slate-900/50 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300`}
                    >
                      {item.icon &&
                        React.cloneElement(item.icon, {
                          className: "w-5 h-5 text-white",
                        })}
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <h3
                        className={`font-semibold text-slate-900 dark:text-white mb-1 ${
                          colors[((index % 4) + 1) as 1 | 2 | 3 | 4]?.hover ||
                          "default-hover-class"
                        } transition-colors duration-300`}
                      >
                        {item.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const OurMissionVision = () => {
  const missionItems = [
    {
      icon: <Zap />,
      title: "Digital Solutions",
      description:
        "Bringing quality healthcare within everyone's reach through innovative digital technology.",
    },
    {
      icon: <Earth />,
      title: "Seamless Integration",
      description:
        "Combining online and in-person care to deliver smooth, effective, and well-coordinated treatment.",
    },
    {
      icon: <Shield />,
      title: "Reduced Travel",
      description:
        "Enabling collaborative and integrated care so patients receive the best possible treatment without unnecessary travel.",
    },
    {
      icon: <Briefcase />,
      title: "Simplified Healthcare",
      description:
        "Removing complexity from healthcare, making it easy to access and navigate. Saving time, money, and effort for all and improving overall well-being.",
    },
  ];

  const visionItems = [
    {
      icon: <Zap />,
      title: "Accessible Healthcare",
      description:
        "Ensure that quality medical care is available to everyone, regardless of location or circumstances.",
    },
    {
      icon: <Earth />,
      title: "Collaborative & Integrated Care",
      description:
        "Build a connected healthcare ecosystem where local specialists and top experts work together to provide the best possible treatment.",
    },
    {
      icon: <Shield />,
      title: "Tech-Driven Innovation",
      description:
        "Leverage AI, digital tools, and smart integrations to enhance healthcare efficiency, accuracy, and  patient outcomes.",
    },
    {
      icon: <Briefcase />,
      title: "Patient-Centered Approach",
      description:
        "Empower individuals with seamless, hassle-free healthcare solutions that save time, reduce costs, and improve overall well-being.",
    },
  ];

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-slate-50/80 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950/80">
      <div className="container mx-auto px-4 lg:px-8 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl lg:text-5xl font-bold text-[#125872] dark:text-[#31addb]">
            Our Mission & Vision
          </h1>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          <MissionVisionCard
            title="Our Mission"
            items={missionItems}
            imageUrl="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?q=80&w=2071&auto=format&fit=crop"
          />
          <MissionVisionCard
            title="Our Vision"
            items={visionItems}
            imageUrl="https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default OurMissionVision;
