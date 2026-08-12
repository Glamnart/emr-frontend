// src/pages/auth/AccountDetailsStep.tsx
import type { UseFormReturn } from "react-hook-form"
import type { SignupFormValues } from "@/lib/validations/signup"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function AccountDetailsStep({
  form,
}: {
  form: UseFormReturn<SignupFormValues>
}) {
  const { register, formState: { errors } } = form

  return (
    <>
      <Field label="Hospital Name" error={errors.hospitalName?.message} >
        <Input {...register("hospitalName")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="Hospital email" error={errors.hospitalEmail?.message}>
        <Input type="email" {...register("hospitalEmail")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="Create password" error={errors.password?.message}>
        <Input type="password" {...register("password")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="Confirm password" error={errors.confirmPassword?.message}>
        <Input type="password" {...register("confirmPassword")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
      </Field>
      <Field label="Phone Number" error={errors.phone?.message}>
        <Input type="tel" {...register("phone")} className="w-full  px-4 py-3  placeholder-slate-500 rounded-lg border  outline-none transition-all duration-200 focus:border-[#647596] "/>
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