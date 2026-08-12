// src/pages/auth/SignUp.tsx
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  signupSchema,
  STEP_FIELDS,
  TOTAL_STEPS,
  type SignupFormValues,
} from "@/lib/validations/signup";
import { AccountDetailsStep } from "./AccountDetailsStep";
import { LocationDetailsStep } from "./LocationDetailsStep";
import { WizardProgress } from "./WizardProgress";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import staffbadge from "@/assets/staffBadge.png";

export default function Signup() {
  const [step, setStep] = useState(1);

  const form = useForm<SignupFormValues>({
    resolver: zodResolver(signupSchema),
    mode: "onBlur",
    defaultValues: {
      hospitalName: "",
      hospitalEmail: "",
      password: "",
      confirmPassword: "",
      phone: "",
      locationName: "",
      locationAddress: "",
      state: "",
    },
  });

  async function handleNext() {
    const fieldsForThisStep = STEP_FIELDS[step as keyof typeof STEP_FIELDS];
    const isStepValid = await form.trigger(fieldsForThisStep);
    if (!isStepValid) return; // errors now show under the relevant fields

    if (step < TOTAL_STEPS) {
      setStep((s) => s + 1);
    } else {
      await handleSubmit(form.getValues());
    }
  }

  function handleBack() {
    setStep((s) => Math.max(1, s - 1));
  }

  async function handleSubmit(values: SignupFormValues) {
    // TODO: POST to your FastAPI /auth/register endpoint
    console.log("submitting", values);
  }

  return (
    <div className="flex min-h-screen">
      {/* left marketing panel — static, matches your mockup, no form logic needed here */}
      <div className="auth-left-panel relative hidden w-1/2 flex-col justify-between overflow-hidden px-10 py-12 md:flex">
        {/* decorative dots — purely visual, matches the scattered dot pattern in the mockup */}
        <div className="pointer-events-none absolute inset-0">
          <span className="absolute left-[8%] top-[55%] h-1.5 w-1.5 rounded-full bg-sky-300/40" />
          <span className="absolute left-[38%] top-[62%] h-1 w-1 rounded-full bg-sky-300/30" />
          <span className="absolute left-[30%] top-[80%] h-1 w-1 rounded-full bg-sky-300/30" />
        </div>

        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-sky-500 text-white text-sm font-bold">
            +
          </div>
          <div>
            <p className="text-sm font-semibold text-white">
              St. Jude Clinical OS
            </p>
            <p className="text-[10px] uppercase tracking-wide text-slate-400">
              Enterprise Health System
            </p>
          </div>
        </div>

        <div className="flex flex-col">
          <span className="text-[11px] font-bold text-sky-400 uppercase tracking-wide">
            New account
          </span>
          <h1 className="mt-2 text-3xl font-bold text-white">
            Set up your staff workspace
          </h1>
          <p className="mt-3 max-w-sm text-sm text-slate-400">
            Your account is provisioned by IT and scoped to your role. This
            takes about a minute.
          </p>

          <ul className="mt-6 space-y-4">
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                ✓
              </span>
              <div>
                <h5 className="text-sm font-semibold text-white">
                  Facility-linked access
                </h5>
                <span className="text-xs text-slate-400">
                  Verified against Main Campus directory
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                ✓
              </span>
              <div>
                <h5 className="text-sm font-semibold text-white">
                  Role-based permissions
                </h5>
                <span className="text-xs text-slate-400">
                  Charts, queues, and tools scoped to what you need
                </span>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-sky-500/20 text-sky-400">
                ✓
              </span>
              <div>
                <h5 className="text-sm font-semibold text-white">
                  MFA required at first sign-in
                </h5>
                <span className="text-xs text-slate-400">
                  You'll set this up right after registration
                </span>
              </div>
            </li>
          </ul>

          <div className="relative mt-10 flex justify-center">
            <img src={staffbadge} alt="Staff ID badge" className="w-56" />
          </div>
        </div>

        <p className="text-[10px] text-slate-500">HIPAA · NDPB compliant</p>
      </div>

      <div className=" auth-right-panel flex w-full flex-col justify-center px-10 md:w-1/2">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="">
          <WizardProgress currentStep={step} totalSteps={TOTAL_STEPS} />
          <span className="text-[11px] font-bold  text-[#0284C7] text-left uppercase mt-2">
            clinician portal
          </span>

          <h1 className="mt-4 text-[25px] font-semibold">
            {" "}
            Create your account{" "}
          </h1>
          <p className="font-[400] text-[13px] mt-2">
            Use the email on file with HR. It has already reserved your access.
          </p>

          <div className="flex gap-4  justify-center mt-2">
            <button
              type="button"
              className="flex items-center justify-center w-[140px] px-4 py-2.5 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors text-[11px]"
            >
              <svg
                className="w-2 h-2 mr-2.5 text-[#1e293b]"
                fill="currentColor"
                viewBox="0 0 384 512"
                aria-hidden="true"
              >
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-96.2 20.7-22 0-59-22.9-98.3-20.7-54.3 2.8-103 32-130.8 82.2-56.1 101.4-23 258.5 31 336.5 26.6 38.6 57.5 80.9 99 82.7 39.8 1.8 55.4-22.5 103-22.5 47.6 0 61.2 22.5 103.8 21.6 42.6-.8 69.8-39.5 95.8-78.2 30.6-45.7 43.1-89.9 43.9-92.3-3.6-1.8-87.1-33.3-87.5-121.5zM245.5 86.8C265 62.5 277 29.8 273.5 0c-26.2 1.1-60.6 17.6-80.9 42-16.1 19.3-30.8 53-26.5 81.3 29.6 2.3 60.1-12.2 79.4-36.5z" />
              </svg>
              <span className="text-[11px] font-bold text-[#1e293b]">
                Apple
              </span>
            </button>
            <button
              type="button"
              className="flex items-center justify-center w-[140px] px-4 py-2.5 bg-white rounded-md shadow-sm hover:bg-gray-50 transition-colors text-[11px]"
            >
              <svg
                className="w-4 h-4 mr-2.5"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                />
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                />
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                />
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                />
              </svg>
              <span className="text-[11px] font-bold text-[#1e293b]">
                Google
              </span>
            </button>
          </div>

          <div className="flex items-center w-full mt-4">
            <div className="flex-grow border-t border-slate-500/50"></div>

            <span className="px-3 text-sm font-medium text-slate-300">
              or continue with email
            </span>

            <div className="flex-grow border-t border-slate-500/50"></div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="mt-6 space-y-4">
            {step === 1 && <AccountDetailsStep form={form} />}
            {step === 2 && <LocationDetailsStep form={form} />}

            <div className="mt-6 flex justify-between">
              {step > 1 && (
                <button
                  type="button"
                  onClick={handleBack}
                  className="text-sm text-muted-foreground"
                >
                  Back
                </button>
              )}
              <Button
                type="button"
                onClick={handleNext}
                className="ml-auto bg-[#0EA5E9] px-[80px] py-[20px] rounded-sm hover:bg-[#0676A8] text-[16px] font-bold"
              >
                {step < TOTAL_STEPS ? "Next →" : "Finish"}
              </Button>
            </div>
            <div className="flex gap-4  justify-center m-4 ">
              <p className="text-sm font-light text-[#64748B]">
                Already have an account?{" "}
                <span className="text-[#0284C7]">Sign in</span>{" "}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
