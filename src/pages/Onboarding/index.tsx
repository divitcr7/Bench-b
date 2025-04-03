import { Meta, OnboardingMain } from "./../../components";

export default function Onboarding() {
  const metadata = {
    title: "Onboarding || Benchmark - Insurance",
    description: "Benchmark - Insurance",
  };
  return (
    <>
      {/* meta information */}
      <Meta meta={metadata} />

      {/* multi-step form */}
      <OnboardingMain/>
    </>
  );
}
