import React from "react";

interface HealthScoreProps {
  score: number;
}

const HealthScore: React.FC<HealthScoreProps> = ({ score }) => {
  const getScoreColor = (score: number) => {
    if (score >= 80) return 'bg-emerald-500';
    if (score >= 60) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const getTextColor = (score: number) => {
    if (score >= 80) return 'text-emerald-500';
    if (score >= 60) return 'text-amber-500';
    return 'text-red-500';
  };

  return (
    <div className="text-center">
      <div className="flex items-center justify-center mb-4">
        <div className={`text-5xl font-bold mr-4 ${getTextColor(score)}`}>{score}</div>
        <div className="flex-grow h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className={`h-full rounded-full transition-all duration-300 ease-in-out ${getScoreColor(score)}`}
            style={{ width: `${score}%` }}
          ></div>
        </div>
      </div>
      <p className="text-base font-medium">
        {score >= 80 ? "Excellent" : score >= 60 ? "Good" : "Needs Improvement"}
      </p>
    </div>
  );
};

export default HealthScore;