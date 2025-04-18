import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

interface Appointment {
  id: string;
  dateTime: string;
  providerName: string;
  providerSpecialty: string;
  location?: string;
}

const Upcoming: React.FC = () => {
  // Mock data for demonstration purposes
  const appointments: Appointment[] = [
    {
      id: "1",
      dateTime: "2023-04-15T10:00:00",
      providerName: "Dr. Smith",
      providerSpecialty: "Cardiologist",
      location: "Heart Center",
    },
    {
      id: "2",
      dateTime: "2023-04-18T14:30:00",
      providerName: "Dr. Johnson",
      providerSpecialty: "Dermatologist",
    },
    {
      id: "3",
      dateTime: "2023-04-20T11:00:00",
      providerName: "Dr. Williams",
      providerSpecialty: "Orthopedist",
    },
    {
      id: "4",
      dateTime: "2023-04-22T09:30:00",
      providerName: "Dr. Brown",
      providerSpecialty: "Neurologist",
    },
    // Add more appointments as needed
  ];

  const sliderSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const AppointmentCard: React.FC<{ appointment: Appointment }> = ({
    appointment,
  }) => (
    <div className="p-4">
      <Card className="h-full bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
        <CardContent className="p-6">
          <Badge
            variant="outline"
            className="mb-2 font-semibold text-indigo-600 bg-indigo-100 border-indigo-200"
          >
            {new Date(appointment.dateTime).toLocaleString()}
          </Badge>
          <h3 className="font-bold text-lg mb-2 text-indigo-800">
            {appointment.providerName}
          </h3>
          <p className="text-sm text-indigo-600 mb-1">
            {appointment.providerSpecialty}
          </p>
          <p className="text-sm text-indigo-500">
            {appointment.location || "Main Clinic"}
          </p>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <Card className="shadow-lg bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400">
      <CardHeader className="bg-white bg-opacity-90 border-b border-gray-200">
        <CardTitle className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
          Upcoming Appointments
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4 p-6">
        {appointments.length > 3 ? (
          <Slider {...sliderSettings}>
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </Slider>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {appointments.map((appointment) => (
              <AppointmentCard key={appointment.id} appointment={appointment} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Upcoming;
