// src/pages/auth/WizardProgress.tsx
interface WizardProgressProps {
  currentStep: number
  totalSteps: number
}

export function WizardProgress({ currentStep, totalSteps }: WizardProgressProps) {
  return (
    <div className="flex gap-2">
      {Array.from({ length: totalSteps }).map((_, i) => (
        <div
          key={i}
          className={`h-1.5 flex-1 rounded-full transition-colors ${
            i < currentStep ? "bg-[#0EA5E9]" : "bg-muted"
          }`}
        />
      ))}
    </div>
  )
}