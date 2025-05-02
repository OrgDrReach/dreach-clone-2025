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

interface PrescriptionHistoryPanelProps {
  searchTerm: string;
  onSelectPatient: (patient: IPatient) => void;
  selectedPatient: IPatient | null;
}

export const PrescriptionHistoryPanel: React.FC<
  PrescriptionHistoryPanelProps
> = ({ searchTerm, onSelectPatient, selectedPatient }) => {
  return (
    <ScrollArea className="flex-1">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Patient ID</TableHead>
            <TableHead>Name</TableHead>
            {/* <TableHead>Status</TableHead> */}
            <TableHead>Last Visit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>{/* Add patient data mapping here */}</TableBody>
      </Table>
    </ScrollArea>
  );
};
