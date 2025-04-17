"use client";
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const reminderSchema = z.object({
  appointmentId: z.string().nonempty("Please select an appointment"),
  reminderTime: z.string().nonempty("Please select a reminder time"),
  email: z.boolean(),
  phone: z.boolean(),
  mobileApp: z.boolean(),
  phoneNumber: z
    .string()
    .optional()
    .refine((val) => !val || /^\+?[1-9]\d{1,14}$/.test(val), {
      message: "Invalid phone number",
    }),
});

type ReminderFormData = z.infer<typeof reminderSchema>;

const Reminders: React.FC = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ReminderFormData>({
    resolver: zodResolver(reminderSchema),
    defaultValues: {
      email: false,
      phone: false,
      mobileApp: false,
    },
  });

  const phoneChecked = watch("phone");

  // Mock data for upcoming appointments (replace with actual data fetching logic)
  const upcomingAppointments = [
    { id: "1", description: "Cardiology - Dr. John Doe (Apr 15, 2023)" },
    { id: "2", description: "Dermatology - Dr. Jane Smith (Apr 18, 2023)" },
  ];

  const onSubmit = (data: ReminderFormData) => {
    console.log("Setting reminder:", data);
    // Implement reminder setting logic here
  };

  return (
    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
      <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
        <CardTitle className="text-2xl font-bold">
          Set Appointment Reminder
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-4">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label htmlFor="appointmentId">Select Appointment</Label>
            <Controller
              name="appointmentId"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="appointmentId">
                    <SelectValue placeholder="Select an appointment" />
                  </SelectTrigger>
                  <SelectContent>
                    {upcomingAppointments.map((appointment) => (
                      <SelectItem key={appointment.id} value={appointment.id}>
                        {appointment.description}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.appointmentId && (
              <p className="text-red-500 text-sm mt-1">
                {errors.appointmentId.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="reminderTime">Reminder Time</Label>
            <Controller
              name="reminderTime"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger id="reminderTime">
                    <SelectValue placeholder="Select reminder time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 minutes before</SelectItem>
                    <SelectItem value="30">30 minutes before</SelectItem>
                    <SelectItem value="60">1 hour before</SelectItem>
                    <SelectItem value="1440">1 day before</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
            {errors.reminderTime && (
              <p className="text-red-500 text-sm mt-1">
                {errors.reminderTime.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Notification Method</Label>
            <div className="flex space-x-4">
              <div className="flex items-center space-x-2">
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="email"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="email">Email</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="phone"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="phone">Phone</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Controller
                  name="mobileApp"
                  control={control}
                  render={({ field }) => (
                    <Checkbox
                      id="mobileApp"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  )}
                />
                <Label htmlFor="mobileApp">Mobile App</Label>
              </div>
            </div>
          </div>

          {phoneChecked && (
            <div>
              <Label htmlFor="phoneNumber">Phone Number</Label>
              <Controller
                name="phoneNumber"
                control={control}
                render={({ field }) => (
                  <Input
                    id="phoneNumber"
                    placeholder="Enter phone number"
                    {...field}
                  />
                )}
              />
              {errors.phoneNumber && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.phoneNumber.message}
                </p>
              )}
            </div>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:from-cyan-600 hover:to-blue-600 transition-colors duration-300"
          >
            Set Reminder
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default Reminders;
