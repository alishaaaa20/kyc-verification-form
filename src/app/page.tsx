import PersonalDetails from "../components/KYC/PersonalDetails";
import { ChevronLeft } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center p-20">
      <h1 className="flex items-center justify-center font-bold text-center mb-9">
        <ChevronLeft className="w-5 h-5 mr-9" />
        <span>KYC verification</span>
      </h1>
      <PersonalDetails className="mt-0" />
    </main>
  );
}
