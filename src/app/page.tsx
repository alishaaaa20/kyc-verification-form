"use client";

import * as React from "react";
import { ChevronLeft } from "lucide-react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import PersonalDetails from "../components/KYC/PersonalDetails";
import Contact from "../components/KYC/Contact";
import DocumentDetails from "@/components/KYC/DocumentDetails";
import StepLabel from "@mui/material/StepLabel";

const steps = ["Personal Details", "Contact Details", "Document Details"];

export default function Home() {
  const [activeStep, setActiveStep] = React.useState<number>(0);
  const [completed, setCompleted] = React.useState<Record<number, boolean>>({});

  // Calculate total steps
  const totalSteps = () => steps.length;

  // Calculate completed steps
  const completedSteps = () => Object.keys(completed).length;

  // Check if current step is the last step
  const isLastStep = () => activeStep === totalSteps() - 1;

  // Check if all steps are completed
  const allStepsCompleted = () => completedSteps() === totalSteps();

  // Handle next step
  const handleNext = () => {
    const nextStep =
      isLastStep() && !allStepsCompleted()
        ? steps.findIndex((_, index) => !(index in completed))
        : activeStep + 1;
    setActiveStep(nextStep);
  };

  // Handle previous step
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // Handle step selection
  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  // Handle completing a step
  const handleComplete = () => {
    setCompleted((prevCompleted) => ({
      ...prevCompleted,
      [activeStep]: true,
    }));
    handleNext();
  };

  // Handle resetting the stepper
  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <main className="min-h-screen flex flex-col items-center p-20">
      <h1 className="flex items-center justify-center font-bold text-center mb-9">
        <ChevronLeft className="w-5 h-5 mr-8 text-blue-700" />
        <span className="mr-16">KYC Verification</span>
      </h1>

      <Box sx={{ width: "25%" }}>
        <Stepper nonLinear activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={index} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                <StepLabel>{label}</StepLabel>
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>

      {/* Render the content for the active step */}
      <div className="mt-8 w-full">
        {activeStep === 0 && <PersonalDetails />}
        {activeStep === 1 && <Contact />}
        {activeStep === 2 && <DocumentDetails />}
      </div>

      {/* Navigation buttons */}
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep !== steps.length - 1 ? (
          <Button onClick={handleNext} sx={{ mr: 1 }}>
            Next
          </Button>
        ) : (
          <Button onClick={handleComplete}>
            {completedSteps() === totalSteps() - 1 ? "Finish" : "Complete Step"}
          </Button>
        )}
      </Box>
    </main>
  );
}
