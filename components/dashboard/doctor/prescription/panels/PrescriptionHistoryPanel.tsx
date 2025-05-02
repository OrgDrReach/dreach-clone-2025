import React, { useState, useEffect } from "react";
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
import { IPatientList } from "@/types/user.d.types";
import { searchPatients } from "@/data/prescriptionData";

interface PrescriptionHistoryPanelProps {
  searchTerm: string;
  onSelectPatient: (patient: IPatientList) => void;
  selectedPatient: IPatientList | null;
}

export const PrescriptionHistoryPanel: React.FC<
  PrescriptionHistoryPanelProps
> = ({ searchTerm, onSelectPatient, selectedPatient }) => {
  const [filteredPatients, setFilteredPatients] = useState<IPatientList[]>([]);

  useEffect(() => {
    setFilteredPatients(searchPatients(searchTerm));
  }, [searchTerm]);

  return (
    <ScrollArea className="flex-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Visit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredPatients.map((patient) => (
            <TableRow
              key={patient.id}
              className={`cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                selectedPatient?.id === patient.id
                  ? "bg-blue-50 dark:bg-blue-900/30"
                  : ""
              }`}
              onClick={() => onSelectPatient(patient)}
            >
              <TableCell>{patient.id}</TableCell>
              <TableCell className="font-medium">{patient.name}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    patient.status === "Active" ? "success" : "secondary"
                  }
                >
                  {patient.status}
                </Badge>
              </TableCell>
              <TableCell>{patient.lastVisit}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </ScrollArea>
  );
};
