import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  LinkedinIcon,
  Users,
  Briefcase,
  Heart,
  Trophy,
  Building2,
  GraduationCap,
} from "lucide-react";
import Image from "next/image";

const CareersPage: React.FC = () => {
  const stats = [
    { number: "500+", label: "Healthcare Professionals" },
    { number: "1M+", label: "Patient Consultations" },
    { number: "50+", label: "Cities Covered" },
    { number: "24/7", label: "Healthcare Access" },
  ];

  const testimonials = [
    {
      quote:
        "Being part of Dr. Reach has allowed me to impact healthcare accessibility while growing professionally.",
      name: "Dr. Sarah Kumar",
      role: "Senior Medical Officer",
      image: "/websiteImages/doctor-1.jpg",
    },
    {
      quote:
        "The culture of innovation and patient-first approach makes every day meaningful.",
      name: "Rahul Sharma",
      role: "Technical Lead",
      image: "/websiteImages/tech-lead.jpg",
    },
  ];

  const values = [
    {
      icon: Heart,
      title: "Patient First",
      description: "Every decision is made with patient care in mind",
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Work together to transform healthcare",
    },
    {
      icon: Trophy,
      title: "Excellence",
      description: "Strive for the highest quality in everything",
    },
    {
      icon: GraduationCap,
      title: "Growth",
      description: "Continuous learning and development",
    },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#125872]/90 via-[#1cb7ef]/80 to-[#125872]/90">
          {/* <Image
						src="/websiteImages/healthunity_banner.png"
						alt="Healthcare professionals"
						fill
						className="object-cover mix-blend-overlay"
						priority
					/> */}
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fadeIn">
            Transform Healthcare With Us
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fadeIn opacity-90">
            Join our mission to revolutionize healthcare accessibility through
            innovation and compassion
          </p>
          <Button
            size="lg"
            className="bg-white text-[#125872] hover:bg-orange-50 hover:scale-105 transition-transform duration-300"
          >
            View Open Positions
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h3 className="text-4xl font-bold text-[#125872] dark:text-[#1cb7ef] mb-2">
                  {stat.number}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#125872] dark:text-[#1cb7ef]">
            Current Opportunities
          </h2>
          <Card className="bg-gradient-to-br from-sky-900 to-cyan-800 dark:from-sky-950 dark:to-cyan-900 text-white overflow-hidden group hover:shadow-2xl transition-all duration-300">
            <CardContent className="relative p-8 text-center">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 group-hover:translate-x-full transition-transform duration-1000"></div>
              <h3 className="text-xl font-bold mb-6">
                <span className="bg-orange-500 px-6 py-2 rounded-full inline-block">
                  No Positions Currently Available
                </span>
              </h3>
              <p className="text-lg max-w-2xl mx-auto mb-8">
                We're not actively hiring at the moment, but we're always
                interested in connecting with talented individuals who are
                passionate about our mission.
              </p>
              <Button
                variant="secondary"
                size="lg"
                className="group-hover:scale-105 transition-transform duration-300"
                asChild
              >
                <a
                  href="https://www.linkedin.com/company/dreach/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <LinkedinIcon className="w-5 h-5" />
                  <span>Join Our Talent Network</span>
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#125872] dark:text-[#1cb7ef]">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-[#1cb7ef] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-[#125872] dark:text-[#1cb7ef]">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#125872] dark:text-[#1cb7ef]">
            Life at Dr. Reach
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <CardContent className="p-6 flex gap-4">
                  <div className="relative w-24 h-24 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                      "{testimonial.quote}"
                    </p>
                    <h4 className="font-semibold text-[#125872] dark:text-[#1cb7ef]">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.role}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#125872] dark:text-[#1cb7ef]">
            Why Join Dr. Reach
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Briefcase,
                title: "Competitive Package",
                description:
                  "Attractive compensation, equity options, and comprehensive benefits",
              },
              {
                icon: GraduationCap,
                title: "Learning & Development",
                description:
                  "Continuous learning opportunities and career growth",
              },
              {
                icon: Building2,
                title: "Modern Workspace",
                description:
                  "Flexible work arrangements and state-of-the-art facilities",
              },
            ].map((benefit, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <CardContent className="p-6 text-center">
                  <benefit.icon className="w-12 h-12 mx-auto mb-4 text-[#1cb7ef] group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="text-xl font-semibold mb-2 text-[#125872] dark:text-[#1cb7ef]">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
