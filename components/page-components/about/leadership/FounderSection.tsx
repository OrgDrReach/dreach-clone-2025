import React from "react";
import FounderCard from "./FounderCard";
import { FaLinkedin, FaTwitter, FaEnvelope, FaGithub } from "react-icons/fa";

const iconsDimension = `w-8 h-8`;

const founders = [
  {
    name: "Rewant Raj",
    title: "Founder & CEO",
    bio: `The inspiration behind Dr. Reach came from a deeply personal experience. My mother, living in a remote area, faced significant challenges in accessing medical care for her brain tumor. She endured high costs and exhaustion from constant travel and stays in different locations to receive the care she needed. Seeing her struggle, I felt driven to create a solution that would break down these barriers to quality healthcare. Dr. Reach was born out of a desire to ensure accessibility to comprehensive medical assistance and optimal treatment options without undue hardship, so that others like my mother wouldn't have to face similar obstacles.`,
    imageSrc: "/assets/teamImages/founders/Rewant_Raj.png",
    socialLinks: [
      {
        icon: <FaLinkedin className={iconsDimension} />,
        url: "https://linkedin.com/in/johndoe",
      },
      {
        icon: <FaTwitter className={iconsDimension} />,
        url: "https://twitter.com/johndoe",
      },
      {
        icon: <FaEnvelope className={iconsDimension} />,
        url: "mailto:john@example.com",
      },
    ],
  },
  {
    name: "Aditya Kumar",
    title: "Co-Founder & COO",
    bio: `The inspiration behind Dr. Reach comes from a deeply personal experience. My father battled Stage 5 Chronic Kidney Disease (CKD), and throughout his journey, we faced immense challenges—frequent hospital visits, high medical costs, and the emotional and physical toll of navigating a complex healthcare system. Witnessing his struggle firsthand made me realize the urgent need for a seamless, accessible, and efficient healthcare solution. Dr. Reach was born from this vision—to ensure that no one has to go through the same hardship just to receive the care they deserve. Our goal is to bridge the gap between patients and quality healthcare, making essential medical services more affordable, accessible, and integrated for everyone, regardless of their location or financial status.`,
    imageSrc: "/assets/teamImages/founders/Aditya_Kumar.jpeg",
    socialLinks: [
      {
        icon: <FaLinkedin className={iconsDimension} />,
        url: "https://linkedin.com/in/janesmith",
      },
      {
        icon: <FaGithub className={iconsDimension} />,
        url: "https://github.com/janesmith",
      },
      {
        icon: <FaEnvelope className={iconsDimension} />,
        url: "mailto:jane@example.com",
      },
    ],
    reverse: true,
  },
];

const FounderSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto py-20 px-4">
      <h1 className="text-center mb-16">
        <span className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
          Our Visionary Founders
        </span>
        <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mt-6" />
      </h1>
      {founders.map((founder, index) => (
        <FounderCard
          key={index}
          {...founder}
          classNames={index === 0 ? "" : ""}
        />
      ))}
    </section>
  );
};

export default FounderSection;
