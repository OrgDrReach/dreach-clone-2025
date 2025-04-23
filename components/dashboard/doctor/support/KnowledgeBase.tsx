import React from "react";

interface Article {
  title: string;
  description: string;
}

const articles: Article[] = [
  {
    title: "Getting Started Guide",
    description: "Learn the basics of using the Doctor's Dashboard.",
  },
  {
    title: "Patient Management",
    description:
      "Tips for effectively managing patient records and information.",
  },
  {
    title: "Appointment Scheduling",
    description: "Best practices for efficient appointment scheduling.",
  },
  {
    title: "Prescription Management",
    description: "How to manage and track prescriptions in the dashboard.",
  },
];

const KnowledgeBase: React.FC = () => {
  return (
    <div className="bg-[#ffffff] dark:bg-slate-800 p-6 rounded-lg  shadow-lg">
      <h2 className="text-2xl font-semibold mb-4 text-[#125872] dark:text-[#4db7dd]">
        Knowledge Base
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {articles.map((article, index) => (
          <div key={index} className="border-gray-600 dark:border-gray-400 p-4 border rounded-lg">
            <h3 className="text-xl font-semibold mb-1">{article.title}</h3>
            <p className="dark:text-gray-400 text-gray-600 mb-4">{article.description}</p>
            <button className="bg-[#125872] hover:bg-[#3698bc] text-white text-sm py-1 px-3 rounded">
              Read Article
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KnowledgeBase;
