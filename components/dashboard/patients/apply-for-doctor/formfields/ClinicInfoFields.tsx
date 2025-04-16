import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { FormValues } from "./FormFields";
import { PlusCircle, Trash } from "lucide-react";

interface ClinicInfoFieldsProps {
  control: Control<FormValues>;
  errors: any;
}

const ClinicInfoFields: React.FC<ClinicInfoFieldsProps> = ({ control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "clinics",
  });

  return (
    <div className="col-span-2 flex flex-col gap-2">
      <Label className="text-lg font-semibold">Clinic Information</Label>
      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-1 gap-4 p-4 border rounded-md">
          <Controller
            name={`clinics.${index}.name`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Label htmlFor={`clinicName-${index}`}>Clinic Name</Label>
                <Input id={`clinicName-${index}`} placeholder="Enter clinic name" {...field} />
                {errors.clinics?.[index]?.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.clinics[index].name.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name={`clinics.${index}.address`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Label htmlFor={`clinicAddress-${index}`}>Clinic Address</Label>
                <Textarea id={`clinicAddress-${index}`} placeholder="Enter clinic address" {...field} />
                {errors.clinics?.[index]?.address && (
                  <p className="text-red-500 text-sm mt-1">{errors.clinics[index].address.message}</p>
                )}
              </div>
            )}
          />
          <Controller
            name={`clinics.${index}.hours`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <div>
                <Label htmlFor={`clinicHours-${index}`}>Clinic Hours</Label>
                <Input id={`clinicHours-${index}`} placeholder="e.g., Mon-Fri: 9AM-5PM, Sat: 10AM-2PM" {...field} />
                {errors.clinics?.[index]?.hours && (
                  <p className="text-red-500 text-sm mt-1">{errors.clinics[index].hours.message}</p>
                )}
              </div>
            )}
          />
          <Button
            type="button"
            variant="destructive"
            size="sm"
            onClick={() => remove(index)}
            className="w-full mt-2"
          >
            <Trash className="h-4 w-4 mr-2" />
            Remove Clinic
          </Button>
        </div>
      ))}
      <Button
        type="button"
        variant="outline"
        size="sm"
        onClick={() => append({ name: "", address: "", hours: "" })}
        className="mt-2"
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Clinic
      </Button>
    </div>
  );
};

export default ClinicInfoFields;