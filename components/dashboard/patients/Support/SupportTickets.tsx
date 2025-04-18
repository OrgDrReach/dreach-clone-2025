import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const tickets = [
  {
    id: 1,
    subject: "Appointment Rescheduling",
    status: "Open",
    priority: "High",
  },
  {
    id: 2,
    subject: "Medication Refill",
    status: "In Progress",
    priority: "Medium",
  },
  { id: 3, subject: "Billing Inquiry", status: "Closed", priority: "Low" },
];

const SupportTickets: React.FC = () => {
  return (
    <Card className="shadow-lg hover:shadow-xl transition-all duration-300">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle className="text-2xl font-bold text-gray-800">
            Your Support Tickets
          </CardTitle>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white transition-colors duration-300">
            Create New Ticket
          </Button>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Subject</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Priority</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets.map((ticket) => (
              <TableRow
                key={ticket.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <TableCell>{ticket.id}</TableCell>
                <TableCell>{ticket.subject}</TableCell>
                <TableCell>
                  <Badge
                    variant={
                      ticket.status === "Open"
                        ? "default"
                        : ticket.status === "In Progress"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {ticket.status}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Badge
                    variant={
                      ticket.priority === "High"
                        ? "destructive"
                        : ticket.priority === "Medium"
                          ? "secondary"
                          : "outline"
                    }
                  >
                    {ticket.priority}
                  </Badge>
                </TableCell>
                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:bg-blue-50 transition-colors duration-200"
                  >
                    View
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default SupportTickets;
