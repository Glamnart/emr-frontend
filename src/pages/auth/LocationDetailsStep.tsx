// src/pages/auth/LocationDetailsStep.tsx
import type { UseFormReturn } from "react-hook-form"
import type { SignupFormValues } from "@/lib/validations/signup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"


export function LocationDetailsStep({
  form,
}: {
  form: UseFormReturn<SignupFormValues>
}) {
  const { register, formState: { errors } } = form

  return (
    <>
      <Field label="Location Name" error={errors.locationName?.message}>
        <Input {...register("locationName")} className="w-full  px-4 py-3 placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="Location Address" error={errors.locationAddress?.message}>
        <Input {...register("locationAddress")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="State" error={errors.state?.message}>
        <Input {...register("state")} className="w-full  px-4 py-3 placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
    </>
  )
}

function Field({
  label,
  error,
  children,
}: {
  label: string
  error?: string
  children: React.ReactNode
}) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-sm">
        <Label>{label}</Label>
        <span className="text-xs text-muted-foreground">Required</span>
      </div>
      {children}
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}