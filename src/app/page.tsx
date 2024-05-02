"use client";
import React from "react";
import { ChevronLeft } from "lucide-react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetails from "@/components/KYC/PersonalDetails";
import Contact from "@/components/KYC/Contact";
import DocumentDetails from "@/components/KYC/DocumentDetails";
import { useSearchParams } from "next/navigation";

const steps = ["Personal Details", "Contact Details", "Document Details"];

export default function Home() {
  const [activeStep, setActiveStep] = React.useState(0);
  const searchParams = useSearchParams();

  // use search params
  const firstName = searchParams.get("firstName") || "";
  const middleName = searchParams.get("middleName") || "";
  const lastName = searchParams.get("lastName") || "";
  const email = searchParams.get("email") || "";
  const phoneNumber = searchParams.get("phoneNumber") || "";

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-20">
      <h1 className="flex items-center justify-center font-bold text-center mb-9">
        <ChevronLeft className="w-5 h-5 mr-8 text-teal-700" />
        <span className="mr-16">KYC Verification</span>
      </h1>
      <Box sx={{ width: "40%" }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        <div className="mt-8">
          {activeStep === 0 && (
            <PersonalDetails
              firstName={firstName}
              middleName={middleName}
              lastName={lastName}
              email={email}
              phoneNumber={phoneNumber}
            />
          )}
          {activeStep === 1 && <Contact />}
          {activeStep === 2 && <DocumentDetails />}
        </div>

        {activeStep === steps.length ? (
          <React.Fragment>
            <Typography sx={{ mt: 2, mb: 1 }}>
              All steps completed - you're finished!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleReset}>Reset</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* Back button */}
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </main>
  );
}
