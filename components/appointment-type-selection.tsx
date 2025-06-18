"use client"

import { useState } from "react"
import { ArrowLeft, ChevronRight, Search, Calendar, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ProgressIndicator } from "./progress-indicator"

interface AppointmentOption {
  id: string
  title: string
  description: string
}

interface Doctor {
  id: string
  name: string
  specialty: string
  nextAvailable: string
}

interface TimeSlot {
  id: string
  time: string
  available: boolean
}

const appointmentTypes: AppointmentOption[] = [
  {
    id: "presencial",
    title: "Cita presencial",
    description: "Agenda una cita con un especialista",
  },
  {
    id: "chequeo",
    title: "Chequeo médico",
    description: "Agenda una cita para tu chequeo",
  },
]

const appointmentFor: AppointmentOption[] = [
  {
    id: "me",
    title: "Para mí",
    description: "",
  },
  {
    id: "family",
    title: "Para un familiar",
    description: "",
  },
]

const appointmentMethods: AppointmentOption[] = [
  {
    id: "specialty",
    title: "Búsqueda por especialidad",
    description: "Si deseas ver la lista de especialistas",
  },
  {
    id: "doctor",
    title: "Búsqueda por médico",
    description: "Si conoces el nombre de tu doctor",
  },
]

const doctors: Doctor[] = [
  {
    id: "1",
    name: "Chang Gomez De Carcamo, Anita Milagros",
    specialty: "Otorrinolaringología",
    nextAvailable: "Cita 24/03/2025 - 16:00hs",
  },
  {
    id: "2",
    name: "Daga Figueroa, Flor Faustina",
    specialty: "Otorrinolaringología",
    nextAvailable: "Cita 26/03/2025 - 16:30hs",
  },
  {
    id: "3",
    name: "Bazan Porras, Lucia Beatriz",
    specialty: "Otorrinolaringología",
    nextAvailable: "Cita 28/03/2025 - 08:00hs",
  },
]

const timeSlots: TimeSlot[] = [
  { id: "1", time: "16:00", available: true },
  { id: "2", time: "16:40", available: true },
  { id: "3", time: "18:00", available: true },
  { id: "4", time: "18:40", available: true },
]

export function AppointmentTypeSelection() {
  const [currentStep, setCurrentStep] = useState<
    "type" | "for" | "method" | "specialty" | "center" | "doctor" | "datetime" | "confirm"
  >("type")
  const [selectedType, setSelectedType] = useState<string>("")
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null)
  const [selectedTime, setSelectedTime] = useState<string>("")

  const handleTypeSelection = (typeId: string) => {
    setSelectedType(typeId)
    setCurrentStep("for")
  }

  const handleForSelection = (forId: string) => {
    setCurrentStep("method")
  }

  const handleMethodSelection = (methodId: string) => {
    if (methodId === "specialty") {
      setCurrentStep("specialty")
    }
  }

  const handleSpecialtyNext = () => {
    setCurrentStep("center")
  }

  const handleCenterNext = () => {
    setCurrentStep("doctor")
  }

  const handleDoctorSelection = (doctor: Doctor) => {
    setSelectedDoctor(doctor)
    setCurrentStep("datetime")
  }

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time)
  }

  const handleDateTimeNext = () => {
    setCurrentStep("confirm")
  }

  const handleBackClick = () => {
    if (currentStep === "for") {
      setCurrentStep("type")
    } else if (currentStep === "method") {
      setCurrentStep("for")
    } else if (currentStep === "specialty") {
      setCurrentStep("method")
    } else if (currentStep === "center") {
      setCurrentStep("specialty")
    } else if (currentStep === "doctor") {
      setCurrentStep("center")
    } else if (currentStep === "datetime") {
      setCurrentStep("doctor")
    } else if (currentStep === "confirm") {
      setCurrentStep("datetime")
    }
  }

  const renderStepOne = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="text-slate-600">
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <span className="text-slate-600">/</span>
        <span className="text-slate-800 font-medium">Programa una cita</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Programa una cita virtual o presencial</h1>
          <p className="text-slate-600 text-lg">Selecciona el tipo de atención de tu preferencia.</p>
        </div>

        <div className="space-y-4">
          {appointmentTypes.map((option) => (
            <Card
              key={option.id}
              className="p-6 cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
              onClick={() => handleTypeSelection(option.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{option.title}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStepTwo = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-8">
        <Button variant="ghost" size="icon" className="text-slate-600" onClick={handleBackClick}>
          <ArrowLeft className="w-5 h-5" />
        </Button>
        <span className="text-slate-600">/</span>
        <span className="text-slate-800 font-medium">Selecciona a quien programar la cita</span>
      </div>

      <div className="space-y-6">
        <div>
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Selecciona a quien programar la cita</h1>
          <p className="text-slate-600 text-lg">Escoge si la cita es para ti o para un familiar.</p>
        </div>

        <div className="space-y-4">
          {appointmentFor.map((option) => (
            <Card
              key={option.id}
              className="p-6 cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
              onClick={() => handleForSelection(option.id)}
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">{option.title}</h3>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStepThree = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span className="text-slate-800">¿Cómo deseas agendar?</span>
      </div>

      <div className="space-y-6">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">¿Cómo deseas agendar?</h1>
          <p className="text-slate-600 text-lg">Busca disponibilidad</p>
        </div>

        <div className="space-y-4 max-w-2xl mx-auto">
          {appointmentMethods.map((option) => (
            <Card
              key={option.id}
              className="p-6 cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
              onClick={() => handleMethodSelection(option.id)}
            >
              <div className="flex items-center justify-between">
                <div className="text-left">
                  <h3 className="text-xl font-semibold text-slate-900 mb-1">{option.title}</h3>
                  <p className="text-slate-600">{option.description}</p>
                </div>
                <div className="w-10 h-10 bg-emerald-500 rounded-full flex items-center justify-center">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )

  const renderStepFour = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span>¿Cómo deseas agendar?</span>
        <span>/</span>
        <span className="text-slate-800">Sacar tu cita</span>
      </div>

      <ProgressIndicator currentStep={1} />

      <div className="space-y-8 max-w-2xl mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">¿Qué especialidad necesitas?</h1>
        </div>

        <div className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Ingresa la especialidad"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-[#00A39C] focus:border-[#00A39C]"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          </div>

          <Button
            className="w-full py-3 text-lg bg-[#00A39C] text-white hover:bg-[#00A39C]/90"
            onClick={handleSpecialtyNext}
          >
            SIGUIENTE PASO
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-slate-600 mb-2">¿No sabes qué especialidad necesitas?</p>
          <Button variant="link" className="text-[#00A39C] font-medium">
            VE UN MÉDICO INTERNISTA
          </Button>
        </div>
      </div>
    </div>
  )

  const renderStepFive = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span>¿Cómo deseas agendar?</span>
        <span>/</span>
        <span className="text-slate-800">Sacar tu cita</span>
      </div>

      <ProgressIndicator currentStep={2} />

      <div className="space-y-8 max-w-2xl mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-8">¿Dónde deseas atenderte?</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-left text-sm font-medium text-slate-700 mb-2">Lugar de atención</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Busca o selecciona aquí el nombre del centro"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-[#00A39C] focus:border-[#00A39C]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <Button
            className="w-full py-3 text-lg bg-[#00A39C] text-white hover:bg-[#00A39C]/90"
            onClick={handleCenterNext}
          >
            SIGUIENTE PASO
          </Button>
        </div>

        <div className="pt-8">
          <p className="text-slate-600 mb-2">¿No sabes qué especialidad necesitas?</p>
          <Button variant="link" className="text-[#00A39C] font-medium">
            VE UN MÉDICO INTERNISTA
          </Button>
        </div>
      </div>
    </div>
  )

  const renderStepSix = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span>¿Cómo deseas agendar?</span>
        <span>/</span>
        <span className="text-slate-800">Sacar tu cita</span>
      </div>

      <ProgressIndicator currentStep={3} />

      <div className="space-y-8 max-w-2xl mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-slate-900 mb-8">¿Con quién deseas atenderte?</h1>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-left text-sm font-medium text-slate-700 mb-2">Búsqueda de doctor</label>
            <div className="relative">
              <input
                type="text"
                placeholder="Ingresa nombre del médico"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-[#00A39C] focus:border-[#00A39C]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            </div>
          </div>

          <div>
            <h3 className="text-left text-sm font-medium text-slate-700 mb-4">Médicos disponibles más cercanos:</h3>
            <div className="space-y-3">
              {doctors.map((doctor) => (
                <Card
                  key={doctor.id}
                  className="p-4 cursor-pointer hover:shadow-md transition-shadow border border-gray-200"
                  onClick={() => handleDoctorSelection(doctor)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                        <User className="w-5 h-5 text-gray-500" />
                      </div>
                      <div className="text-left">
                        <p className="text-xs text-gray-500">{doctor.specialty}</p>
                        <p className="font-semibold text-slate-900">{doctor.name}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-sm text-blue-500">{doctor.nextAvailable}</span>
                      <div className="w-8 h-8 bg-emerald-500 rounded-full flex items-center justify-center">
                        <ChevronRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <Button className="w-full py-3 text-lg bg-gray-200 text-gray-500 cursor-not-allowed" disabled>
            SIGUIENTE PASO
          </Button>
        </div>
      </div>
    </div>
  )

  const renderStepSeven = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span>¿Cómo deseas agendar?</span>
        <span>/</span>
        <span className="text-slate-800">Sacar tu cita</span>
      </div>

      <ProgressIndicator currentStep={4} />

      <div className="space-y-8 max-w-2xl mx-auto">
        {selectedDoctor && (
          <div className="flex items-center gap-3 bg-gray-50 p-4 rounded-lg">
            <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
              <User className="w-5 h-5 text-gray-500" />
            </div>
            <div className="text-left">
              <p className="text-xs text-gray-500">{selectedDoctor.specialty}</p>
              <p className="font-semibold text-slate-900">{selectedDoctor.name}</p>
            </div>
          </div>
        )}

        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Fecha y hora</h2>

          <div className="flex gap-2 mb-6">
            <Button variant="default" className="bg-[#1A4A84] text-white">
              Esta semana
            </Button>
            <Button variant="outline">Este mes</Button>
            <Button variant="outline">Próximo mes</Button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-2 text-slate-700">
              <Calendar className="w-4 h-4" />
              <span className="font-medium">Sábado</span>
              <span className="text-sm text-gray-500">24/05/2025</span>
            </div>

            <div className="space-y-3">
              {timeSlots.map((slot) => (
                <label key={slot.id} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="radio"
                    name="timeSlot"
                    value={slot.time}
                    onChange={(e) => handleTimeSelection(e.target.value)}
                    className="w-4 h-4 text-[#00A39C] focus:ring-[#00A39C]"
                  />
                  <span className="text-slate-700">{slot.time}</span>
                </label>
              ))}
            </div>
          </div>

          <Button
            className="w-full py-3 text-lg bg-[#00A39C] text-white hover:bg-[#00A39C]/90 mt-8"
            onClick={handleDateTimeNext}
            disabled={!selectedTime}
          >
            SIGUIENTE PASO
          </Button>
        </div>
      </div>
    </div>
  )

  const renderStepEight = () => (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-8 text-sm text-slate-500">
        <span>🏠</span>
        <span>/</span>
        <span>Programa una cita</span>
        <span>/</span>
        <span>¿Para quién es esta cita?</span>
        <span>/</span>
        <span>¿Cómo deseas agendar?</span>
        <span>/</span>
        <span className="text-slate-800">Sacar tu cita</span>
      </div>

      <ProgressIndicator currentStep={5} />

      <div className="space-y-8 max-w-2xl mx-auto text-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 mb-2">¡Ya casi terminas!</h1>
          <p className="text-slate-600">Revisa y confirma</p>
        </div>

        <Card className="p-6 text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="bg-blue-100 text-blue-600 px-2 py-1 rounded text-sm">📍 Presencial</span>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-gray-500" />
                <span className="font-medium">Sábado</span>
                <span>24/05/2025 16:40hs</span>
              </div>

              <div className="text-sm text-gray-600">
                <p>Centro Clínico La Molina - Otorrinolaringología</p>
                <p className="font-medium">Dr(a). Chang Gomez De Carcamo, Anita Milagros</p>
                <p>Av. Raúl Ferrero 1256, frente al CC. Molina Plaza</p>
              </div>

              <div className="pt-2 border-t">
                <p className="text-sm text-gray-600">Paciente</p>
                <p className="font-medium">Jose Miguel Perea Valdivia</p>
              </div>
            </div>
          </div>
        </Card>

        <div className="flex gap-4">
          <Button variant="outline" className="flex-1 py-3 text-lg" onClick={handleBackClick}>
            CANCELAR
          </Button>
          <Button className="flex-1 py-3 text-lg bg-[#00A39C] text-white hover:bg-[#00A39C]/90">
            CONFIRMAR MI CITA
          </Button>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="flex">
        <div className="flex-1 p-8 max-w-4xl mx-auto">
          {currentStep === "type" && renderStepOne()}
          {currentStep === "for" && renderStepTwo()}
          {currentStep === "method" && renderStepThree()}
          {currentStep === "specialty" && renderStepFour()}
          {currentStep === "center" && renderStepFive()}
          {currentStep === "doctor" && renderStepSix()}
          {currentStep === "datetime" && renderStepSeven()}
          {currentStep === "confirm" && renderStepEight()}
        </div>
      </div>
    </div>
  )
}
