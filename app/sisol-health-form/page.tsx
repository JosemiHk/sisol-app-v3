"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar } from "lucide-react"
import { useRouter } from 'next/navigation'


export default function SisolHealthForm() {
   const router = useRouter()

  const handleContinue = () => {
    // Aquí puedes agregar validaciones antes de navegar
    router.push('/sisol-health-form2')
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4">
      {/* Header */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold">
              <span className="text-blue-600">SISOL</span>
              <span className="text-teal-500">SALUD</span>
            </div>
          </div>
          <div className="text-red-500 font-medium">📞 (01) 4671684</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-semibold text-blue-700 text-center mb-8">Ingrese sus datos</h1>

        <div className="flex gap-12">
          {/* Left Side - Stepper */}
          <div className="w-64 space-y-8">
            {/* Step 1: Active */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <h2 className="text-xl font-semibold text-blue-700">Registro de DNI</h2>
            </div>

            {/* Step 2: Inactive */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-gray-300 text-gray-400 rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <h2 className="text-xl font-semibold text-gray-400">Datos Personales</h2>
            </div>

            {/* Step 3: Inactive */}
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 w-10 h-10 border-2 border-gray-300 text-gray-400 rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <h2 className="text-xl font-semibold text-gray-400">Seguridad</h2>
            </div>
          </div>

          {/* Right Side - Form Content */}
          <div className="flex-1 max-w-lg">
            <div className="space-y-6">
              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Tipo de documento</Label>
                <Select defaultValue="dni">
                  <SelectTrigger className="w-full h-12 rounded-full border-gray-300">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="dni">DNI</SelectItem>
                    <SelectItem value="passport">Pasaporte</SelectItem>
                    <SelectItem value="ce">Carné de Extranjería</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Documento</Label>
                <Input placeholder="Ingrese su número de documento" className="h-12 rounded-full border-gray-300" />
              </div>

              <div>
                <Label className="text-sm font-medium text-gray-700 mb-2 block">Fecha de nacimiento</Label>
                <div className="relative">
                  <Input placeholder="Seleccione el día/mes/año" className="h-12 rounded-full border-gray-300 pr-12" />
                  <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                </div>
              </div>

              {/* Checkboxes */}
              <div className="space-y-3 pt-4">
                <div className="flex items-start space-x-3">
                  <Checkbox id="terms" className="mt-1" />
                  <Label htmlFor="terms" className="text-sm text-gray-700 leading-relaxed">
                    Acepto <span className="text-teal-600 underline cursor-pointer">Términos y Condiciones</span> y{" "}
                    <span className="text-teal-600 underline cursor-pointer">la Política de Privacidad.</span>
                  </Label>
                </div>

                <div className="flex items-start space-x-3">
                  <Checkbox id="marketing" className="mt-1" />
                  <Label htmlFor="marketing" className="text-sm text-gray-700 leading-relaxed">
                    Acepto recibir{" "}
                    <span className="text-teal-600 underline cursor-pointer">publicidad y novedades.</span>{" "}
                    <span className="text-gray-500">(Opcional)</span>
                  </Label>
                </div>
              </div>

              {/* Continue Button */}
                <div className="flex justify-center pt-6">
                  <Button 
                    onClick={handleContinue}
                    className="bg-[#1a4a84] hover:bg-[#1a4a84]/90 text-white px-12 py-4 rounded-full text-lg font-semibold h-14"
                  >
                  CONTINUAR
                </Button>
                </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-gray-400 text-sm">
          Copyright © 2025 Sistema Metropolitano de la Solidaridad
        </div>
      </div>
    </div>
  )
}
