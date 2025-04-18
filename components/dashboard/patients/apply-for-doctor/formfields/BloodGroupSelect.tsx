import React from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FieldError } from "react-hook-form";
import { FormValues } from "./FormFields";

interface BloodGroupSelectProps {
  onValueChange: (...event: any[]) => void;
  value: "A+" | "A-" | "B+" | "B-" | "AB+" | "AB-" | "O+" | "O-" | null;
  error: FieldError | undefined;
  className?: string;
}

const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "AB+",
  "AB-",
  "O+",
  "O-",
] as const;

export const BloodGroupSelect: React.FC<BloodGroupSelectProps> = ({
  onValueChange,
  value,
  error,
  className,
}) => {
  return (
    <Select onValueChange={onValueChange} value={value || ""} defaultValue="">
      <SelectTrigger
        id="bloodGroup"
        className={`${error ? "border-destructive" : ""} ${className || ""}`}
      >
        <SelectValue placeholder="Select blood group" />
      </SelectTrigger>
      <SelectContent>
        {BLOOD_GROUPS.map((group) => (
          <SelectItem key={group} value={group}>
            {group}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
