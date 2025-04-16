import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const articles = [
  { title: "Understanding Your Diagnosis", url: "#" },
  { title: "Preparing for Your First Appointment", url: "#" },
  { title: "Managing Chronic Conditions", url: "#" },
  { title: "Healthy Lifestyle Tips", url: "#" },
];

const KnowledgeBase: React.FC = () => {
  return (
    <Card className="bg-gradient-to-r from-teal-500 to-blue-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">Knowledge Base</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {articles.map((article, index) => (
            <Button
              key={index}
              variant="outline"
              className="w-full justify-start text-black hover:text-black border-white bg-white/20 transition-all duration-300"
            >
              <a href={article.url} className="text-lg">{article.title}</a>
            </Button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default KnowledgeBase;