import React from "react";
import { Controller, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormValues } from "./FormFields";

interface GenderFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const GenderField: React.FC<GenderFieldProps> = ({ control, errors }) => (
  <div>
    <Label htmlFor="gender">Gender</Label>
    <Controller
      name="gender"
      control={control}
      render={({ field }) => (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <SelectTrigger id="gender">
            <SelectValue placeholder="Select gender" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="male">Male</SelectItem>
            <SelectItem value="female">Female</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      )}
    />
    {errors.gender && (
      <p className="text-red-500 text-sm mt-1">{errors.gender.message}</p>
    )}
  </div>
);

export default GenderField;
