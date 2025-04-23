import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, BedDouble, Stethoscope, Activity } from 'lucide-react';

const QuickStats: React.FC = () => {
  const stats = [
    {
      title: 'Total Patients',
      value: '2,845',
      icon: Users,
      change: '+12.5%',
      color: 'text-blue-600',
    },
    {
      title: 'Bed Occupancy',
      value: '85%',
      icon: BedDouble,
      change: '+5.2%',
      color: 'text-green-600',
    },
    {
      title: 'Active Doctors',
      value: '142',
      icon: Stethoscope,
      change: '+3.1%',
      color: 'text-purple-600',
    },
    {
      title: 'Emergency Cases',
      value: '24',
      icon: Activity,
      change: '-2.3%',
      color: 'text-red-600',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
                  {stat.title}
                </p>
                <h3 className="text-2xl font-bold mt-2">{stat.value}</h3>
                <p className={`text-sm mt-1 ${stat.change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
                  {stat.change}
                </p>
              </div>
              <stat.icon className={`h-8 w-8 ${stat.color}`} />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuickStats;