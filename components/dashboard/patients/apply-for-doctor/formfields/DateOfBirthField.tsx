import React from "react";
import { Controller, Control } from "react-hook-form";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar as CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { FormValues } from "./FormFields";

interface DateOfBirthFieldProps {
  control: Control<FormValues>;
  errors: any;
}

const DateOfBirthField: React.FC<DateOfBirthFieldProps> = ({
  control,
  errors,
}) => {
  return (
    <div>
      <Label htmlFor="dateOfBirth">Date of Birth</Label>
      <Controller
        name="dateOfBirth"
        control={control}
        render={({ field }) => (
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant={"outline"}
                className={cn(
                  "w-full justify-start text-left font-normal",
                  !field.value && "text-muted-foreground",
                )}
              >
                <CalendarIcon className="mr-2 h-4 w-4" />
                {field.value ? (
                  format(field.value, "PPP")
                ) : (
                  <span>Pick a date</span>
                )}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0">
              <Calendar
                mode="single"
                selected={field.value}
                onSelect={field.onChange}
                disabled={(date) =>
                  date > new Date() || date < new Date("1900-01-01")
                }
                initialFocus
              />
            </PopoverContent>
          </Popover>
        )}
      />
      {errors.dateOfBirth && (
        <p className="text-red-500 text-sm mt-1">
          {errors.dateOfBirth.message}
        </p>
      )}
    </div>
  );
};

export default DateOfBirthField;
