import React from "react";

const OnlineConsultation: React.FC = () => {
  return (
    <section className="relative h-[550px] sm:h-auto md:p-12">
      <div
        className="absolute inset-0 bg-cover h-[550px] dark:bg-slate-400 sm:h-auto bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/websiteImages/online-consultation.svg')",
        }}
      ></div>
      <div className="relative  mx-auto px-6 flex  pt-8 sm:pt-0">
        <div className="p-8 max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-[#125872] mb-8">
            Get Online Consultation
          </h2>
          <p className="text-gray-800 font-semibold">
            Experience effortless healthcare with Dr. Reach’s online
            consultations. Our platform connects you with top doctors from
            around the world, enabling you to discuss symptoms, receive expert
            advice, and explore treatment options all through a secure,
            user-friendly video call. Enjoy the convenience and efficiency of
            quality care from anywhere.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineConsultation;
