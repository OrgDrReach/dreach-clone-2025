"use client";
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon, Clock, User, Stethoscope, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface Provider {
  id: string;
  name: string;
  specialty: string;
}

const bookingSchema = z.object({
  provider: z.string().nonempty("Please select a provider"),
  date: z.date({ required_error: "Please select a date" }),
  time: z.string().nonempty("Please select a time"),
  reason: z
    .string()
    .min(3, "Reason must be at least 3 characters long")
    .max(100, "Reason must not exceed 100 characters"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

const Booking: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  // Mock data for providers (replace with actual data fetching logic)
  const providers: Provider[] = [
    { id: "1", name: "Dr. John Doe", specialty: "Cardiology" },
    { id: "2", name: "Dr. Jane Smith", specialty: "Dermatology" },
    // Add more providers as needed
  ];

  const onSubmit = async (data: BookingFormData) => {
    setIsSubmitting(true);
    console.log("Booking appointment:", data);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    // Implement booking logic here
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Card className="shadow-lg hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-blue-50 to-purple-50">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
          <CardTitle className="text-2xl font-bold flex items-center">
            <CalendarIcon className="mr-2" /> Book Appointment
          </CardTitle>
        </CardHeader>
        <CardContent className="mt-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <Label
                htmlFor="provider"
                className="flex items-center text-lg font-semibold text-gray-700"
              >
                <User className="mr-2" /> Select Provider
              </Label>
              <Controller
                name="provider"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger id="provider" className="mt-1">
                      <SelectValue placeholder="Select a provider" />
                    </SelectTrigger>
                    <SelectContent>
                      {providers.map((provider) => (
                        <SelectItem key={provider.id} value={provider.id}>
                          {provider.name} - {provider.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.provider && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.provider.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label className="flex items-center text-lg font-semibold text-gray-700">
                <CalendarIcon className="mr-2" /> Select Date
              </Label>
              <Controller
                name="date"
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
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.date.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="time"
                className="flex items-center text-lg font-semibold text-gray-700"
              >
                <Clock className="mr-2" /> Select Time
              </Label>
              <Controller
                name="time"
                control={control}
                render={({ field }) => (
                  <Input id="time" type="time" {...field} className="mt-1" />
                )}
              />
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.time.message}
                </p>
              )}
            </div>

            <div>
              <Label
                htmlFor="reason"
                className="flex items-center text-lg font-semibold text-gray-700"
              >
                <FileText className="mr-2" /> Reason for Appointment
              </Label>
              <Controller
                name="reason"
                control={control}
                render={({ field }) => (
                  <Input
                    id="reason"
                    {...field}
                    placeholder="Enter reason for appointment"
                    className="mt-1"
                  />
                )}
              />
              {errors.reason && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.reason.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-colors duration-300"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Booking..." : "Book Appointment"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Booking;
