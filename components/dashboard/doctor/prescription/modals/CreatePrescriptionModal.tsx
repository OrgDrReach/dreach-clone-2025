import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { IPrescription } from "@/types/doctor.d.types";
import { IPatient } from "@/types/user.d.types";

interface CreatePrescriptionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (prescription: Omit<IPrescription, "id">) => void;
  patient: IPatient | null;
}

export const CreatePrescriptionModal: React.FC<
  CreatePrescriptionModalProps
> = ({ isOpen, onClose, onSave, patient }) => {
  const [formData, setFormData] = useState({
    name: "",
    dosage: "",
    frequency: "",
    date: new Date().toISOString().split("T")[0],
    status: "Draft" as "Active" | "Inactive" | "Pending" | "Draft",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave({
      ...formData,
      status: "Draft",
      patientId: patient?.id || "",
      patientName: patient?.name || "",
    });
    setFormData({
      name: "",
      dosage: "",
      frequency: "",
      date: new Date().toISOString().split("T")[0],
      status: "Draft" as "Active" | "Inactive" | "Pending" | "Draft",
    });
    onClose();
  };

  if (!patient) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add New Prescription for {patient.name}</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-4">
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="medication">Medication Name</Label>
              <Input
                id="medication"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Enter medication name"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="dosage">Dosage</Label>
              <Input
                id="dosage"
                value={formData.dosage}
                onChange={(e) =>
                  setFormData({ ...formData, dosage: e.target.value })
                }
                placeholder="e.g., 500mg"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="frequency">Frequency</Label>
              <Input
                id="frequency"
                value={formData.frequency}
                onChange={(e) =>
                  setFormData({ ...formData, frequency: e.target.value })
                }
                placeholder="e.g., Twice daily"
                required
              />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) =>
                  setFormData({ ...formData, date: e.target.value })
                }
                required
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="button" variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit">Add Prescription</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
