"use client";

import { useState } from "react";
import PersonalDetails from "../components/KYC/PersonalDetails";
import ContactDetails from "../components/KYC/Contact";
import DocumentDetails from "../components/KYC/DocumentDetails";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen flex flex-col items-center p-20">
      <h1 className="flex text-xl font-bold mb-10 items-center">
        <ChevronLeft className="w-5 h-5 mr-9" />
        KYC verification
      </h1>

      {/* Steps */}
      <div className="flex justify-center mb-10">
        <div
          className={`flex flex-col items-center ${
            currentStep === 1 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current text-lg">
            1
          </div>
          <span className="text-sm mt-1">Personal Details</span>
        </div>

        <div className="w-12 h-1 bg-gray-400 mx-4"></div>

        <div
          className={`flex flex-col items-center ${
            currentStep === 2 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current text-lg">
            2
          </div>
          <span className="text-sm mt-1">Contact Details</span>
        </div>

        {/* Horizontal line */}
        <div className="w-12 h-1 bg-gray-400 mx-4"></div>

        {/* Step 3 */}
        <div
          className={`flex flex-col items-center ${
            currentStep === 3 ? "text-blue-600" : "text-gray-400"
          }`}
        >
          <div className="flex items-center justify-center w-8 h-8 rounded-full border-2 border-current text-lg">
            3
          </div>
          <span className="text-sm mt-1">Document Details</span>
        </div>
      </div>

      {/* Render the corresponding step content */}
      {currentStep === 1 && <PersonalDetails />}
      {currentStep === 2 && <ContactDetails />}
      {currentStep === 3 && <DocumentDetails />}
    </main>
  );
}
