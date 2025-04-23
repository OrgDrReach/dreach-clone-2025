import React from "react";

interface Appointment {
  name: string;
  time: string;
  description: string;
}

const AppointmentCard: React.FC<Appointment> = ({
  name,
  time,
  description,
}) => {
  return (
    <div className="flex justify-between rounded-xl items-center p-4 border-b border-gray-200">
      <div>
        <h4 className="text-[#089dd4] font-semibold">{name}</h4>
        <p className="text-gray-600 dark:text-gray-300">
          {time} - {description}
        </p>
      </div>
      <button className="bg-[#125872] text-white px-4 py-1 rounded-lg font-medium hover:underline">
        View Details
      </button>
    </div>
  );
};

const UpcomingAppointments: React.FC = () => {
  const appointments: Appointment[] = [
    { name: "Sarah Johnson", time: "10:00 AM", description: "General Checkup" },
    { name: "Mike Davis", time: "11:30 AM", description: "Follow-up" },
    {
      name: "Emily Wilson",
      time: "2:00 PM",
      description: "New Patient Consultation",
    },
  ];

  return (
    <div className=" bg-gray-100 dark:bg-gray-800 flex items-center rounded-xl shadow-md justify-center">
      <div className=" rounded-lg shadow p-8 w-full ">
        <h2 className=" text-[#125872] dark:text-[#4db7dd] text-2xl font-semibold mb-6">
          Upcoming Appointments
        </h2>
        <div>
          {appointments.map((appointment, index) => (
            <AppointmentCard
              key={index}
              name={appointment.name}
              time={appointment.time}
              description={appointment.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
