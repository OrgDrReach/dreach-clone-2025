import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { IPatient } from "@/types/user.d.types";
import { Button } from "@/components/ui/button";
import { Eye, FileText } from "lucide-react";

interface PatientPrescriptionsPanelProps {
  patient: IPatient | null;
  searchTerm: string;
  onAddPrescription: () => void;
}

export const PatientPrescriptionsPanel: React.FC<
  PatientPrescriptionsPanelProps
> = ({ patient, searchTerm, onAddPrescription }) => {
  if (!patient) {
    return (
      <div className="flex-1 flex items-center justify-center">
        <p className="text-gray-500 dark:text-gray-400">
          Select a patient to view their prescriptions
        </p>
      </div>
    );
  }

  return (
    <ScrollArea className="flex-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Date</TableHead>
            <TableHead>Medication</TableHead>
            <TableHead>Dosage</TableHead>
            <TableHead>Frequency</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{/* Add prescription data mapping here */}</TableBody>
      </Table>
    </ScrollArea>
  );
};
