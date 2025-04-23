import React from "react";
import { Controller, Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FormValues } from "./FormFields";

interface UserInfoFieldsProps {
  control: Control<FormValues>;
  errors: any;
}

const UserInfoFields: React.FC<UserInfoFieldsProps> = ({ control, errors }) => (
  <>
    <div>
      <Label htmlFor="username">Username</Label>
      <Controller
        name="username"
        control={control}
        render={({ field }) => (
          <Input id="username" placeholder="Enter your username" {...field} />
        )}
      />
      {errors.username && (
        <p className="text-red-500 text-sm mt-1">{errors.username.message}</p>
      )}
    </div>
    <div>
      <Label htmlFor="email">Email</Label>
      <Controller
        name="email"
        control={control}
        render={({ field }) => (
          <Input
            id="email"
            type="email"
            placeholder="Enter your email"
            {...field}
          />
        )}
      />
      {errors.email && (
        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
      )}
    </div>
  </>
);

export default UserInfoFields;
