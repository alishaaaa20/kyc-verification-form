import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface PersonalDetailsProps {
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

export default function PersonalDetails({
  firstName,
  middleName,
  lastName,
  email,
  phoneNumber,
}: PersonalDetailsProps) {
  return (
    <div className="flex flex-col items-center">
      <h3 className="mb-6 text-xl pr-20 font-bold ">Personal Details</h3>
      <div className="grid max-w-sm gap-2.5">
        <Label
          className="text-left font-semibold text-md text-gray-600"
          htmlFor="firstName"
        >
          First name
        </Label>
        <Input
          className="font-normal"
          type="text"
          id="firstName"
          defaultValue={firstName}
          placeholder="Enter your first name"
        />
        <Label
          className="text-left font-semibold text-md text-gray-600"
          htmlFor="middleName"
        >
          Middle name
        </Label>
        <Input
          className="font-normal"
          type="text"
          id="middleName"
          defaultValue={middleName}
          placeholder="Enter your middle name"
        />
        <Label
          className="text-left font-semibold text-md text-gray-600"
          htmlFor="lastName"
        >
          Last name
        </Label>
        <Input
          className="font-normal"
          type="text"
          id="lastName"
          defaultValue={lastName}
          placeholder="Enter your last name"
        />
        <Label
          className="text-left font-semibold text-md text-gray-600"
          htmlFor="email"
        >
          Email
        </Label>
        <Input
          className="font-normal"
          type="email"
          id="email"
          defaultValue={email}
          placeholder="Enter your email"
        />
        <Label
          className="text-left font-semibold text-md text-gray-600"
          htmlFor="phoneNumber"
        >
          Phone Number
        </Label>
        <Input
          className="font-normal"
          type="number"
          id="phoneNumber"
          defaultValue={phoneNumber}
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
