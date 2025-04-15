"use client";
import React, { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { 
  Stethoscope, 
  Building2, 
  FlaskConical, 
  Pill, 
  Ambulance
} from "lucide-react";

const providerSchema = z.object({
  role: z.enum(["doctor", "hospital", "lab", "pharmaceutical", "ambulance"], {
    required_error: "Please select a provider role",
  }),
});

type ProviderSchemaType = z.infer<typeof providerSchema>;

interface ProviderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (role: "doctor" | "hospital" | "lab" | "pharmaceutical" | "ambulance") => void;
}

const ProviderModal: React.FC<ProviderModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [selectedRole, setSelectedRole] = useState<"doctor" | "hospital" | "lab" | "pharmaceutical" | "ambulance">("doctor");

  const roles = [
    { id: "doctor" as const, label: "Doctor", icon: Stethoscope },
    { id: "hospital" as const, label: "Hospital (Admin)", icon: Building2 },
    { id: "lab" as const, label: "Lab", icon: FlaskConical },
    { id: "pharmaceutical" as const, label: "Pharmaceutical", icon: Pill },
    { id: "ambulance" as const, label: "Ambulance", icon: Ambulance },
  ];

  const handleRoleSelect = (role: "doctor" | "hospital" | "lab" | "pharmaceutical" | "ambulance") => {
    setSelectedRole(role);
  };

  const handleSubmit = () => {
    onSubmit(selectedRole);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="bg-offer sm:max-w-md">
        <div className="px-6 py-4">
          <h2 className="text-2xl font-bold text-center text-orange-400 mb-6">
            Select Provider Role
          </h2>
          <div className="space-y-4">
            <div className="grid gap-3">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <button
                    key={role.id}
                    onClick={() => handleRoleSelect(role.id)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                      selectedRole === role.id
                        ? "bg-[#31addb] text-white shadow-md transform scale-[1.02]"
                        : "bg-gray-100 bg-opacity-20 text-white hover:bg-opacity-30"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-[15px] font-[590]">{role.label}</span>
                  </button>
                );
              })}
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-[#31addb] text-white rounded-lg hover:bg-[#00bbff] transition-colors duration-200"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProviderModal;
