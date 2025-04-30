import React from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ProfilePicture from "./ProfilePicture";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BLOOD_GROUPS = [
  "A+",
  "A-",
  "B+",
  "B-",
  "O+",
  "O-",
  "AB+",
  "AB-",
] as const;

interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

interface EmergencyContact {
  name: string;
  relationship: string;
  phoneNumber: string;
  email: string;
}

interface FamilyMember {
  name: string;
  relationship: string;
  phoneNumber: string;
}

interface ProfileData {
  profilePicture: string;
  firstName: string;
  lastName: string;
  email: string;
  phoneNumbers: string[];
  dateOfBirth: string;
  bloodGroup: string;
  currentAddress: Address;
  permanentAddress: Address;
  emergencyContact: EmergencyContact;
  familyMembers: FamilyMember[];
}

interface Placeholders {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  dateOfBirth: string;
  bloodGroup: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phoneNumber: string;
    email: string;
  };
  familyMember: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
}

interface PatientProfileCardProps {
  data: ProfileData;
  placeholders: Placeholders;
  isEditing: boolean;
  onImageChange: (file: File) => void;
  onChange: (data: ProfileData) => void;
}

export const PatientProfileCard: React.FC<PatientProfileCardProps> = ({
  data,
  placeholders,
  isEditing,
  onImageChange,
  onChange,
}) => {
  const handleInputChange = (field: keyof ProfileData, value: any) => {
    onChange({
      ...data,
      [field]: value,
    });
  };

  const handlePhoneNumberChange = (index: number, value: string) => {
    const newPhoneNumbers = [...data.phoneNumbers];
    newPhoneNumbers[index] = value;
    handleInputChange("phoneNumbers", newPhoneNumbers);
  };

  const handleAddPhoneNumber = () => {
    handleInputChange("phoneNumbers", [...data.phoneNumbers, "+91 "]);
  };

  const handleAddressChange = (
    type: "currentAddress" | "permanentAddress",
    field: keyof Address,
    value: string
  ) => {
    handleInputChange(type, {
      ...data[type],
      [field]: value,
    });
  };

  const handleEmergencyContactChange = (
    field: keyof EmergencyContact,
    value: string
  ) => {
    handleInputChange("emergencyContact", {
      ...data.emergencyContact,
      [field]: value,
    });
  };

  const handleFamilyMemberChange = (
    index: number,
    field: keyof FamilyMember,
    value: string
  ) => {
    const newFamilyMembers = [...data.familyMembers];
    newFamilyMembers[index] = {
      ...newFamilyMembers[index],
      [field]: value,
    };
    handleInputChange("familyMembers", newFamilyMembers);
  };

  const handleAddFamilyMember = () => {
    handleInputChange("familyMembers", [
      ...data.familyMembers,
      { name: "", relationship: "", phoneNumber: "+91 " },
    ]);
  };

  return (
    <Card className="bg-white dark:bg-gray-800 p-6 shadow-lg space-y-6">
      <ProfilePicture
        defaultImage={data.profilePicture}
        onImageChange={onImageChange}
        isEditing={isEditing}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Input
          value={data.firstName}
          onChange={(e) => handleInputChange("firstName", e.target.value)}
          placeholder={placeholders.firstName}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Input
          value={data.lastName}
          onChange={(e) => handleInputChange("lastName", e.target.value)}
          placeholder={placeholders.lastName}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Input
          value={data.email}
          type="email"
          onChange={(e) => handleInputChange("email", e.target.value)}
          placeholder={placeholders.email}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Input
          value={data.dateOfBirth}
          type="date"
          onChange={(e) => handleInputChange("dateOfBirth", e.target.value)}
          placeholder={placeholders.dateOfBirth}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Select
          value={data.bloodGroup}
          onValueChange={(value) => handleInputChange("bloodGroup", value)}
          disabled={!isEditing}
        >
          <SelectTrigger className="bg-gray-50 dark:bg-gray-700">
            <SelectValue placeholder={placeholders.bloodGroup} />
          </SelectTrigger>
          <SelectContent>
            {BLOOD_GROUPS.map((group) => (
              <SelectItem key={group} value={group}>
                {group}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Phone Numbers Section */}
      <div className="space-y-4">
        <label className="text-sm font-medium">Phone Numbers</label>
        {data.phoneNumbers.map((phone, index) => (
          <div key={index} className="flex gap-2">
            <Input
              value={phone}
              onChange={(e) => handlePhoneNumberChange(index, e.target.value)}
              placeholder={placeholders.phoneNumber}
              disabled={!isEditing}
              className="bg-gray-50 dark:bg-gray-700"
            />
            {isEditing && index === data.phoneNumbers.length - 1 && (
              <Button
                size="icon"
                variant="outline"
                onClick={handleAddPhoneNumber}
                type="button"
              >
                <Plus className="h-4 w-4" />
              </Button>
            )}
          </div>
        ))}
      </div>

      {/* Update AddressSection props */}
      <AddressSection
        title="Current Address"
        address={data.currentAddress}
        isEditing={isEditing}
        onChange={(field, value) =>
          handleAddressChange("currentAddress", field, value)
        }
        placeholders={placeholders.address}
      />

      <AddressSection
        title="Permanent Address"
        address={data.permanentAddress}
        isEditing={isEditing}
        onChange={(field, value) =>
          handleAddressChange("permanentAddress", field, value)
        }
        placeholders={placeholders.address}
      />

      {/* Update EmergencyContactSection */}
      <EmergencyContactSection
        contact={data.emergencyContact}
        isEditing={isEditing}
        onChange={handleEmergencyContactChange}
        placeholders={placeholders.emergencyContact}
      />

      <FamilyMembersSection
        members={data.familyMembers}
        isEditing={isEditing}
        onChange={handleFamilyMemberChange}
        onAdd={handleAddFamilyMember}
        placeholders={placeholders.familyMember}
      />
    </Card>
  );
};

const AddressSection: React.FC<{
  title: string;
  address: Address;
  isEditing: boolean;
  onChange: (field: keyof Address, value: string) => void;
  placeholders: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    country: string;
  };
}> = ({ title, address, isEditing, onChange, placeholders }) => (
  <div className="space-y-4">
    <h3 className="font-semibold">{title}</h3>
    <div className="space-y-2">
      <Input
        value={address.street}
        placeholder={placeholders.street}
        readOnly={!isEditing}
        className="bg-gray-50 dark:bg-gray-700"
        onChange={(e) => onChange("street", e.target.value)}
      />
      <div className="grid grid-cols-2 gap-2">
        <Input
          value={address.city}
          placeholder={placeholders.city}
          readOnly={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
          onChange={(e) => onChange("city", e.target.value)}
        />
        <Input
          value={address.state}
          placeholder={placeholders.state}
          readOnly={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
          onChange={(e) => onChange("state", e.target.value)}
        />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Input
          value={address.zipCode}
          placeholder={placeholders.zipCode}
          readOnly={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
          onChange={(e) => onChange("zipCode", e.target.value)}
        />
        <Input
          value={address.country}
          placeholder={placeholders.country}
          readOnly={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
          onChange={(e) => onChange("country", e.target.value)}
        />
      </div>
    </div>
  </div>
);

const EmergencyContactSection: React.FC<{
  contact: EmergencyContact;
  isEditing: boolean;
  onChange: (field: keyof EmergencyContact, value: string) => void;
  placeholders: {
    name: string;
    relationship: string;
    phoneNumber: string;
    email: string;
  };
}> = ({ contact, isEditing, onChange, placeholders }) => (
  <div className="space-y-4">
    <h3 className="font-semibold">Emergency Contact</h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Input
        value={contact.name}
        placeholder={placeholders.name}
        readOnly={!isEditing}
        className="bg-gray-50 dark:bg-gray-700"
        onChange={(e) => onChange("name", e.target.value)}
      />
      <Input
        value={contact.relationship}
        placeholder={placeholders.relationship}
        readOnly={!isEditing}
        className="bg-gray-50 dark:bg-gray-700"
        onChange={(e) => onChange("relationship", e.target.value)}
      />
      <Input
        value={contact.phoneNumber}
        placeholder={placeholders.phoneNumber}
        readOnly={!isEditing}
        className="bg-gray-50 dark:bg-gray-700"
        onChange={(e) => onChange("phoneNumber", e.target.value)}
      />
      <Input
        value={contact.email}
        placeholder={placeholders.email}
        readOnly={!isEditing}
        className="bg-gray-50 dark:bg-gray-700"
        onChange={(e) => onChange("email", e.target.value)}
      />
    </div>
  </div>
);

const FamilyMembersSection: React.FC<{
  members: FamilyMember[];
  isEditing: boolean;
  onChange: (index: number, field: keyof FamilyMember, value: string) => void;
  onAdd: () => void;
  placeholders: {
    name: string;
    relationship: string;
    phoneNumber: string;
  };
}> = ({ members, isEditing, onChange, onAdd, placeholders }) => (
  <div className="space-y-4">
    <h3 className="font-semibold">Family Members</h3>
    {members.map((member, index) => (
      <div key={index} className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Input
          value={member.name}
          onChange={(e) => onChange(index, "name", e.target.value)}
          placeholder={placeholders.name}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Input
          value={member.relationship}
          onChange={(e) => onChange(index, "relationship", e.target.value)}
          placeholder={placeholders.relationship}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
        <Input
          value={member.phoneNumber}
          onChange={(e) => onChange(index, "phoneNumber", e.target.value)}
          placeholder={placeholders.phoneNumber}
          disabled={!isEditing}
          className="bg-gray-50 dark:bg-gray-700"
        />
      </div>
    ))}
    {isEditing && (
      <Button
        variant="outline"
        className="w-full"
        onClick={onAdd}
        type="button"
      >
        <Plus className="h-4 w-4 mr-2" /> Add Family Member
      </Button>
    )}
  </div>
);
