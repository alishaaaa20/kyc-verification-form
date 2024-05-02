"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function PersonalDetails() {
  return (
    <div className="flex flex-col items-center ">
      <h3 className="mb-6 text-xl pr-20 font-bold">Personal Details</h3>
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
          type="tel"
          id="phoneNumber"
          placeholder="Enter your phone number"
        />
      </div>
    </div>
  );
}
