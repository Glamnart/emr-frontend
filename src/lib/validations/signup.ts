import { z } from "zod"

const accountDetailsShape = {
  hospitalName: z.string().min(2, "Hospital name is required"),
  hospitalEmail: z.string().email("Enter a valid email"),
  password: z.string().min(8, "At least 8 characters"),
  confirmPassword: z.string(),
  phone: z.string().min(7, "Enter a valid phone number"),
}

const locationDetailsShape = {
  locationName: z.string().min(2, "Location name is required"),
  locationAddress: z.string().min(5, "Address is required"),
  state: z.string().min(2, "State is required"),
}

export const signupSchema = z
  .object({ ...accountDetailsShape, ...locationDetailsShape })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  })

export type SignupFormValues = z.infer<typeof signupSchema>

// This is the important part for the wizard: which fields belong to which step,
// so we know what to validate before letting someone click "Next".
export const STEP_FIELDS = {
  1: Object.keys(accountDetailsShape) as (keyof SignupFormValues)[],
  2: Object.keys(locationDetailsShape) as (keyof SignupFormValues)[],
} as const

export const TOTAL_STEPS = Object.keys(STEP_FIELDS).length