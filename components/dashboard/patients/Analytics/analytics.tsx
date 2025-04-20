import React from "react";
import KPI from "./KPI";
import HealthScore from "./HealthScore";
import TrendAnalysis from "./TrendAnalysis";
import MedicationEffectiveness from "./MedicationEffectiveness";
import PatientEngagement from "./PatientEngagement";
import HealthRiskAssessment from "./HealthRiskAssessment";
import ComparativeAnalysis from "./ComparativeAnalysis";

const Analytics: React.FC = () => {
  const kpis = [
    { title: "Blood Pressure", value: "120/80", unit: "mmHg" },
    { title: "Glucose Levels", value: 95, unit: "mg/dL" },
    { title: "Body Mass Index (BMI)", value: 22.5 },
    { title: "Medication Adherence", value: 95, unit: "%" },
  ];

  const healthScore = 75;

  return (
    <div className="grid gap-8 p-8 max-w-7xl mx-auto">
      <section className="bg-gray-100 dark:bg-gray-900 border-gray-500 rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Health Score
        </h2>
        <HealthScore score={healthScore} />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Key Performance Indicators
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {kpis.map((kpi, index) => (
            <KPI key={index} {...kpi} />
          ))}
        </div>
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Trend Analysis
        </h2>
        <TrendAnalysis />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Medication Effectiveness
        </h2>
        <MedicationEffectiveness />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Patient Engagement
        </h2>
        <PatientEngagement />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Health Risk Assessment
        </h2>
        <HealthRiskAssessment />
      </section>
      <section className="bg-gray-100 dark:bg-gray-900 rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-400">
          Comparative Analysis
        </h2>
        <ComparativeAnalysis />
      </section>
    </div>
  );
};

export default Analytics;
