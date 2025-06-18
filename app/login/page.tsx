"use client"

import { useState } from "react"
import { useRouter } from "next/navigation" // <-- Agrega esta línea
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Eye, EyeOff } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
export default function Component() {
  const [showPassword, setShowPassword] = useState(false)

  const router = useRouter() // <-- Agrega esta línea

  const handleContinue = () => {
    // Aquí puedes agregar validaciones antes de navegar
    router.push("/dashboard") // <-- Cambia aquí a la ruta de tu dashboard
  }


  return (
    <div className="min-h-screen flex">
      {/* Left side - Medical image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <Image src="/doctor-taking-blood-sample-old-patient-hospital-man-doing-checkup-examination-clinic-senior-sitting-chair_575670-1318.avif" alt="Doctor and patient" fill className="object-cover" />
      </div>

      {/* Right side - Login form */}
      <div className="w-full lg:w-1/2 flex flex-col bg-[#fffefc]">
        {/* Header with phone */}
        <div className="flex justify-end p-4">
          <span className="text-[#eb4335] font-medium">📞 (01) 4671684</span>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col justify-center px-8 lg:px-16 max-w-md mx-auto w-full">
          {/* Logo */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold">
              <span className="text-[#1a4a84]">SISOL</span>
              <span className="text-[#00a39c]">SALUD</span>
            </h1>
          </div>

          {/* Login page indicator */}
          <div className="w-full mb-6 bg-[##fffefc] text-black rounded-full py-3 text-center font-medium">
            Bienvenido de nuevo, por favor inicia sesión
          </div>

          {/* Registration link */}
          <div className="text-center mb-8">
            <span className="text-[#565759]">Si todavía no tienes una cuenta </span>
            <Link href="/sisol-health-form" className="text-[#00a39c] font-medium">
               ¡Regístrate aquí!
            </Link>
          </div>

          {/* Form */}
          <div className="space-y-6">
            {/* Document type */}
            <div>
              <Label htmlFor="document-type" className="text-[#565759] font-medium">
                Tipo de documento
              </Label>
              <Select defaultValue="dni">
                <SelectTrigger className="w-full mt-2 border-[#d8e2ee] rounded-full py-6">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="dni">DNI</SelectItem>
                  <SelectItem value="passport">Pasaporte</SelectItem>
                  <SelectItem value="ce">Carné de Extranjería</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Document number */}
            <div>
              <Label htmlFor="document-number" className="text-[#565759] font-medium">
                Número de documento
              </Label>
              <Input
                id="document-number"
                placeholder="Ingrese su número de documento"
                className="w-full mt-2 border-[#d8e2ee] rounded-full py-6 px-4"
              />
            </div>

            {/* Password */}
            <div>
              <Label htmlFor="password" className="text-[#565759] font-medium">
                Contraseña
              </Label>
              <div className="relative mt-2">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Ingrese su contraseña SISOL"
                  className="w-full border-[#d8e2ee] rounded-full py-6 px-4 pr-12"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-[#565759]"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Remember me and forgot password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox id="remember" />
                <Label htmlFor="remember" className="text-[#565759] text-sm">
                  Recordarme
                </Label>
              </div>
              <a href="#" className="text-[#00a39c] text-sm font-medium">
                ¿Olvidaste tu contraseña?
              </a>
            </div>

            {/* Login button */}
            <Button className="w-full bg-[#1a4a84] hover:bg-[#1a4a84]/90 text-white rounded-full py-6 text-lg font-medium"
              onClick={handleContinue} // <-- Cambia aquí

            >
              INICIAR SESIÓN
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center p-8">
          <p className="text-[#979797] text-sm">Copyright © 2025 Sistema Metropolitano de la Solidaridad</p>
        </div>
      </div>
    </div>
  )
}
