import React from "react";
import { Controller, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { FormValues } from "./FormFields";
import ISDSelect from "./ISDSelect";

interface PhoneNumberFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const PhoneNumberField: React.FC<PhoneNumberFieldProps> = ({ control, errors }) => (
  <div>
    <Label htmlFor="phoneNumber">Phone Number</Label>
    <Controller
      name="phoneNumber"
      control={control}
      defaultValue=""
      render={({ field }) => (
        <ISDSelect
          value={field.value}
          onChange={(value) => field.onChange(value)}
        />
      )}
    />
    {errors.phoneNumber && <p className="text-red-500 text-sm mt-1">{errors.phoneNumber.message}</p>}
  </div>
);

export default PhoneNumberField;