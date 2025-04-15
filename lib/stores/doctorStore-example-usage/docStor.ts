import { EAppointmentMode } from "@/types/appointment.d.types";
import { useDoctorStore } from "@/lib/stores/doctorStore";

// Example usage in a component
const ExampleComponent = async () => {
  const { doctors, loading, error, fetchDoctors, bookAppointment } =
    useDoctorStore();

  try {
    // Fetch doctors by specialty
    await fetchDoctors("Cardiology");

    // Check loading state and error
    if (loading) {
      console.log("Loading doctors...");
      return;
    }

    if (error) {
      console.error("Error fetching doctors:", error);
      return;
    }

    // Log available doctors
    console.log("Available doctors:", doctors);

    // Book an appointment
    const appointment = {
      patientId: "patient123",
      providerId: "doctor456",
      dateTime: new Date(),
      mode: EAppointmentMode.VIDEO,
      reason: "Annual checkup",
    };

    const result = await bookAppointment(appointment);

    if (result) {
      console.log("Appointment booked successfully:", result);
    } else {
      console.error("Failed to book appointment");
    }
  } catch (err) {
    console.error("Operation failed:", err);
  }
};

export default ExampleComponent;
