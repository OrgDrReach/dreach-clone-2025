import React from "react";

const LearnMore: React.FC = () => {
  return (
    <main className={`p-4 lg:px-24 lg:py-12`}>
      <div className={`text-center`}>
        <h1 className={`text-[#125872] dark:text-[#31ADDB] text-2xl font-bold`}>
          Experience seamless healthcare with Dr. Reach
        </h1>
        <p className={`text-slate-600 dark:text-slate-400 text-base mt-2`}>
          Book appointments, access specialists, and receive the care you
          deserve—all from the comfort of your home.
        </p>
        <button
          className={`bg-blue-500 border-medium border-blue-800 text-white font-bold px-6 py-3 mt-4 rounded-full transition-colors duration-300`}
        >
          <a href="/auth/register">Sign Up Today</a>
        </button>
      </div>
    </main>
  );
};

export default LearnMore;
