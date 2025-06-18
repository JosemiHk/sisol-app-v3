"use client"

import { useState } from "react"
import { useRouter } from "next/navigation" // <-- Agrega esta línea
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Eye, EyeOff } from "lucide-react"

export default function Component() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const router = useRouter() // <-- Agrega esta línea


  return (
    <div className="min-h-screen bg-[#fffefc] flex flex-col">
      {/* Header */}
      <header className="flex justify-between items-center p-6 bg-white">
        <div className="flex items-center">
          <div className="text-2xl font-bold">
            <span className="text-[#1a4a84]">SISOL</span>
            <span className="text-[#00a39c]">SALUD</span>
          </div>
        </div>
        <div className="text-[#eb4335] font-medium">📞 (01) 4671684</div>
      </header>

      <div className="flex-1 flex">
        {/* Left Sidebar - Steps */}
        <div className="w-80 bg-white p-8">
          <div className="space-y-8">
            {/* Step 1 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1a4a84] text-white rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a4a84] text-xl font-semibold">Registro de DNI</h3>
                <div className="w-1 h-16 bg-[#1a4a84] ml-5 mt-2"></div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1a4a84] text-white rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a4a84] text-xl font-semibold">Datos Personales</h3>
                <div className="w-1 h-16 bg-[#1a4a84] ml-5 mt-2"></div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex items-start space-x-4">
              <div className="w-12 h-12 bg-[#1a4a84] text-white rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <div className="flex-1">
                <h3 className="text-[#1a4a84] text-xl font-semibold">Seguridad</h3>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8 flex flex-col items-center justify-center">
          <div className="w-full max-w-md space-y-6">
            <h2 className="text-[#1a4a84] text-2xl font-semibold text-center mb-8">Ingrese sus datos</h2>

            <div className="space-y-6">
              {/* Email Field */}
              <div>
                <label className="block text-[#565759] text-sm font-medium mb-2">Correo electrónico *</label>
                <Input
                  type="email"
                  placeholder="Ingrese su correo electrónico"
                  className="w-full h-12 rounded-full border-[#979797] px-4 text-[#565759] placeholder:text-[#979797]"
                />
              </div>

              {/* Phone Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#565759] text-sm font-medium mb-2">Código de País *</label>
                  <Select defaultValue="peru">
                    <SelectTrigger className="h-12 rounded-full border-[#979797] px-4">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="peru">Perú (+51)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-[#565759] text-sm font-medium mb-2">Número de celular *</label>
                  <Input
                    type="tel"
                    placeholder="Ingrese su celular"
                    className="h-12 rounded-full border-[#979797] px-4 text-[#565759] placeholder:text-[#979797]"
                  />
                </div>
              </div>

              {/* Password Field */}
              <div>
                <label className="block text-[#565759] text-sm font-medium mb-2">Cree su contraseña*</label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Ingrese su contraseña SISOL"
                    className="w-full h-12 rounded-full border-[#979797] px-4 pr-12 text-[#565759] placeholder:text-[#979797]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#979797]"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Confirm Password Field */}
              <div>
                <label className="block text-[#565759] text-sm font-medium mb-2">Verifique su contraseña*</label>
                <div className="relative">
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Verifique su contraseña SISOL"
                    className="w-full h-12 rounded-full border-[#979797] px-4 pr-12 text-[#565759] placeholder:text-[#979797]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#979797]"
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {/* Required Fields Note */}
              <p className="text-[#565759] text-sm text-center">Todos los campos marcados con * son obligatorios</p>

              {/* Submit Button */}
              <Button
                className="w-full h-12 bg-[#1a4a84] hover:bg-[#1a4a84]/90 text-white rounded-full font-semibold text-lg"
                onClick={() => router.push("/login")} // <-- Cambia aquí
              >
                CONFIRMAR
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-white p-4 text-center">
        <p className="text-[#979797] text-sm">Copyright © 2025 Sistema Metropolitano de la Solidaridad</p>
      </footer>
    </div>
  )
}
