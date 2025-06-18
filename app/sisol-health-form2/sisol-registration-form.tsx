"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface FormData {
  nombres: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  sexo: string;
  domicilio: string;
}

export default function Component() {
  const [formData, setFormData] = useState<FormData>({
    nombres: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    sexo: "",
    domicilio: "",
  })

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-[#fffefc]">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-6">
        <div className="flex items-center">
          <span className="text-[#1a4a84] text-3xl font-bold">SISOL</span>
          <span className="text-[#00a39c] text-3xl font-bold ml-1">SALUD</span>
        </div>
        <div className="text-[#eb4335] font-semibold">📞 (01) 4671684</div>
      </header>

      <div className="max-w-4xl mx-auto px-8 py-8">
        <div className="flex gap-12">
          {/* Left Sidebar - Steps */}
          <div className="w-80">
            <div className="space-y-8">
              {/* Step 1 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a4a84] text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-[#1a4a84] text-xl font-semibold">Registro de DNI</h3>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-6 w-0.5 h-8 bg-[#1a4a84]"></div>

              {/* Step 2 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#1a4a84] text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-[#1a4a84] text-xl font-semibold">Datos Personales</h3>
                </div>
              </div>

              {/* Connecting line */}
              <div className="ml-6 w-0.5 h-8 bg-[#dddfe2]"></div>

              {/* Step 3 */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-[#1a4a84] text-[#1a4a84] flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-[#1a4a84] text-xl font-semibold">Seguridad</h3>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Form */}
          <div className="flex-1">
            <div className="text-center mb-8">
              <h1 className="text-[#1a4a84] text-3xl font-semibold">Ingrese sus datos</h1>
            </div>

            <div className="space-y-6">
              {/* Nombres */}
              <div>
                <Label htmlFor="nombres" className="text-[#000000] font-medium mb-2 block">
                  Nombres <span className="text-[#eb4335]">*</span>
                </Label>
                <Input
                  id="nombres"
                  placeholder="Ingrese sus nombres"
                  value={formData.nombres}
                  onChange={(e) => handleInputChange("nombres", e.target.value)}
                  className="h-14 rounded-full border-[#979797] px-6 text-[#565759] placeholder:text-[#979797]"
                />
              </div>

              {/* Apellido Paterno */}
              <div>
                <Label htmlFor="apellidoPaterno" className="text-[#000000] font-medium mb-2 block">
                  Apellido Paterno <span className="text-[#eb4335]">*</span>
                </Label>
                <Input
                  id="apellidoPaterno"
                  placeholder="Ingrese su primer apellido"
                  value={formData.apellidoPaterno}
                  onChange={(e) => handleInputChange("apellidoPaterno", e.target.value)}
                  className="h-14 rounded-full border-[#979797] px-6 text-[#565759] placeholder:text-[#979797]"
                />
              </div>

              {/* Apellido Materno */}
              <div>
                <Label htmlFor="apellidoMaterno" className="text-[#000000] font-medium mb-2 block">
                  Apellido Materno <span className="text-[#eb4335]">*</span>
                </Label>
                <Input
                  id="apellidoMaterno"
                  placeholder="Ingrese su segundo apellido"
                  value={formData.apellidoMaterno}
                  onChange={(e) => handleInputChange("apellidoMaterno", e.target.value)}
                  className="h-14 rounded-full border-[#979797] px-6 text-[#565759] placeholder:text-[#979797]"
                />
              </div>

              {/* Sexo */}
              <div>
                <Label htmlFor="sexo" className="text-[#000000] font-medium mb-2 block">
                  Sexo <span className="text-[#eb4335]">*</span>
                </Label>
                <Select value={formData.sexo} onValueChange={(value: string) => handleInputChange("sexo", value)}>
                  <SelectTrigger className="h-14 rounded-full border-[#979797] px-6 text-[#979797]">
                    <SelectValue placeholder="Seleccione su sexo" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="masculino">Masculino</SelectItem>
                    <SelectItem value="femenino">Femenino</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Domicilio */}
              <div>
                <Label htmlFor="domicilio" className="text-[#000000] font-medium mb-2 block">
                  Domicilio <span className="text-[#eb4335]">*</span>
                </Label>
                <Input
                  id="domicilio"
                  placeholder="Ingrese su dirección"
                  value={formData.domicilio}
                  onChange={(e) => handleInputChange("domicilio", e.target.value)}
                  className="h-14 rounded-full border-[#979797] px-6 text-[#565759] placeholder:text-[#979797]"
                />
              </div>

              {/* Required fields note */}
              <p className="text-[#565759] text-sm">
                Todos los campos marcados con <span className="text-[#eb4335]">*</span> son obligatorios
              </p>

              {/* Continue button */}
              <div className="flex justify-center pt-8">
                <Button className="bg-[#1a4a84] hover:bg-[#1a4a84]/90 text-white px-12 py-4 rounded-full text-lg font-semibold h-14">
                  CONTINUAR
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center py-8">
        <p className="text-[#979797] text-sm">Copyright © 2025 Sistema Metropolitano de la Solidaridad</p>
      </footer>
    </div>
  )
}
