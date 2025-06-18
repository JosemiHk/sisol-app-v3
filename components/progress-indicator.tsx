interface ProgressStep {
  id: number
  label: string
  completed: boolean
  current: boolean
}

interface ProgressIndicatorProps {
  currentStep: number
}

export function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
  const steps: ProgressStep[] = [
    { id: 1, label: "Especialidad", completed: currentStep > 1, current: currentStep === 1 },
    { id: 2, label: "Centro médico", completed: currentStep > 2, current: currentStep === 2 },
    { id: 3, label: "Médico", completed: currentStep > 3, current: currentStep === 3 },
    { id: 4, label: "Fecha y Hora", completed: currentStep > 4, current: currentStep === 4 },
    { id: 5, label: "Confirmar", completed: currentStep > 5, current: currentStep === 5 },
  ]

  return (
    <div className="flex items-center justify-center mb-12">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className="flex flex-col items-center">
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                step.current
                  ? "bg-[#00A39C] text-white"
                  : step.completed
                    ? "bg-[#00A39C] text-white"
                    : "bg-gray-200 text-gray-500"
              }`}
            >
              {step.id}
            </div>
            <span className={`mt-2 text-sm ${step.current ? "text-[#00A39C] font-medium" : "text-gray-500"}`}>
              {step.label}
            </span>
          </div>
          {index < steps.length - 1 && (
            <div className={`w-16 h-0.5 mx-4 mt-[-20px] ${step.completed ? "bg-[#00A39C]" : "bg-gray-200"}`} />
          )}
        </div>
      ))}
    </div>
  )
}
