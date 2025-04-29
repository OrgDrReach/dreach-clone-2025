import { formatDate } from "@/lib/utils/date";
import { Badge } from "@/components/ui/badge";

// Assuming appointment is passed as a prop to the component:
const AppointmentCard = ({
  appointment,
}: {
  appointment: { date: string };
}) => (
  <Badge variant="secondary" className="bg-emerald...">
    <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font...">
      {formatDate(appointment.date)}
    </div>
  </Badge>
);

export default AppointmentCard;
