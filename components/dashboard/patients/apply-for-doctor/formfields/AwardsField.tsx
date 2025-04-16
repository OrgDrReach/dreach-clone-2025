import React from "react";
import { Controller, Control, useFieldArray } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { FormValues } from "./FormFields";
import { PlusCircle, Trash } from "lucide-react";

interface AwardsFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const AwardsField: React.FC<AwardsFieldProps> = ({ control, errors }) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "awards",
  });

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  return (
    <div className="col-span-2 flex flex-col gap-2">
      <Label>Awards and Recognitions</Label>
      {fields.map((field, index) => (
        <div key={field.id} className="grid grid-cols-3 gap-2 mt-2">
          <Controller
            name={`awards.${index}.title`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input {...field} placeholder="Award Title" className="col-span-1" />
            )}
          />
          <Controller
            name={`awards.${index}.organization`}
            control={control}
            defaultValue=""
            render={({ field }) => (
              <Input
                {...field}
                placeholder="Awarding Organization"
                className="col-span-1"
              />
            )}
          />
          <div className="flex items-center gap-2">
            <Controller
              name={`awards.${index}.year`}
              control={control}
              defaultValue=""
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    {years.map((year) => (
                      <SelectItem key={year} value={year.toString()}>
                        {year}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            <Button
              type="button"
              variant="destructive"
              size="icon"
              onClick={() => remove(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
        </div>
      ))}
      {errors.awards && (
        <p className="text-red-500 text-sm mt-1">{errors.awards.message}</p>
      )}
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="mt-2"
        onClick={() => append({ title: "", organization: "", year: "" })}
      >
        <PlusCircle className="h-4 w-4 mr-2" />
        Add Award
      </Button>
    </div>
  );
};

export default AwardsField;