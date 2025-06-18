"use client"

import { ArrowLeft, ChevronRight, Home, Calendar, Clock, User, LogOut, Plus, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function MedicalDashboard() {
  const [currentPage, setCurrentPage] = useState("Home")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const appointmentTypes = [
    {
      title: "Cita presencial",
      description: "Agenda una cita con un especialista",
      icon: Calendar,
    },
    {
      title: "Cita virtual",
      description: "Agenda una cita con un especialista",
      icon: Calendar,
    },
    {
      title: "Chequeo médico",
      description: "Agenda una cita para tu chequeo",
      icon: Clock,
    },
  ]

  const sidebarItems = [
    { title: "Home", icon: Home, href: "/" },
    { title: "Solicitar cita", icon: Calendar, href: "/solicitar-cita" },
    { title: "Mis citas", icon: Clock, href: "/mis-citas" },
    { title: "Mi cuenta", icon: User, href: "/mi-cuenta" },
    { title: "Salir", icon: LogOut, href: "/salir" },
  ]

  const upcomingAppointments = [
    {
      doctor: "Dr. María González",
      specialty: "Cardiología",
      date: "15 Ene 2024",
      time: "10:00 AM",
      type: "Presencial",
    },
    {
      doctor: "Dr. Carlos Ruiz",
      specialty: "Medicina General",
      date: "18 Ene 2024",
      time: "2:30 PM",
      type: "Virtual",
    },
  ]

  const handleNavigation = (page: string) => {
    setCurrentPage(page)
    setSidebarOpen(false) // Close sidebar on mobile after navigation
  }

  const renderHomePage = () => (
    <div className="flex-1 p-4 sm:p-6 lg:p-8">
      <div className="max-w-6xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-6 lg:mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#1A4A84] mb-2">¡Bienvenido de vuelta!</h1>
          <p className="text-sm sm:text-base text-gray-600">Gestiona tus citas médicas de manera fácil y rápida</p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          <Card className="border-l-4 border-l-[#00A39C] hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00A39C]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Plus className="w-5 h-5 sm:w-6 sm:h-6 text-[#00A39C]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#1A4A84] text-sm sm:text-base">Nueva Cita</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Programa una cita</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#FCA700] hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#FCA700]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-[#FCA700]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#1A4A84] text-sm sm:text-base">Mis Citas</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Ver historial</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-l-4 border-l-[#1A4A84] hover:shadow-md transition-shadow cursor-pointer sm:col-span-2 lg:col-span-1">
            <CardContent className="p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#1A4A84]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-[#1A4A84]" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[#1A4A84] text-sm sm:text-base">Chequeo</h3>
                  <p className="text-xs sm:text-sm text-gray-600">Examen médico</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Appointments */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6 lg:gap-8">
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-[#1A4A84] flex items-center gap-2 text-lg sm:text-xl">
                <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                Próximas Citas
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 sm:space-y-4">
                {upcomingAppointments.map((appointment, index) => (
                  <div key={index} className="flex items-center justify-between p-3 sm:p-4 bg-gray-50 rounded-lg">
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-[#1A4A84] text-sm sm:text-base truncate">
                        {appointment.doctor}
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 truncate">{appointment.specialty}</p>
                      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 mt-2 text-xs sm:text-sm text-gray-500">
                        <span>{appointment.date}</span>
                        <span>{appointment.time}</span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs w-fit ${
                            appointment.type === "Virtual"
                              ? "bg-[#00A39C]/10 text-[#00A39C]"
                              : "bg-[#FCA700]/10 text-[#FCA700]"
                          }`}
                        >
                          {appointment.type}
                        </span>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" className="ml-2 flex-shrink-0">
                      <ChevronRight className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Health Summary */}
          <Card>
            <CardHeader className="pb-4">
              <CardTitle className="text-[#1A4A84] flex items-center gap-2 text-lg sm:text-xl">
                <User className="w-4 h-4 sm:w-5 sm:h-5" />
                Resumen de Salud
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <div className="space-y-3 sm:space-y-4">
                <div className="flex justify-between items-center p-3 sm:p-4 bg-green-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-green-800 text-sm sm:text-base">Última Consulta</h4>
                    <p className="text-xs sm:text-sm text-green-600">Hace 2 semanas</p>
                  </div>
                  <div className="w-3 h-3 bg-green-500 rounded-full flex-shrink-0"></div>
                </div>

                <div className="flex justify-between items-center p-3 sm:p-4 bg-blue-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-blue-800 text-sm sm:text-base">Próximo Chequeo</h4>
                    <p className="text-xs sm:text-sm text-blue-600">En 1 mes</p>
                  </div>
                  <div className="w-3 h-3 bg-blue-500 rounded-full flex-shrink-0"></div>
                </div>

                <div className="flex justify-between items-center p-3 sm:p-4 bg-orange-50 rounded-lg">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-semibold text-orange-800 text-sm sm:text-base">Recordatorios</h4>
                    <p className="text-xs sm:text-sm text-orange-600">2 pendientes</p>
                  </div>
                  <div className="w-3 h-3 bg-orange-500 rounded-full flex-shrink-0"></div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )

  const renderSolicitarCitaPage = () => (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center gap-3 text-sm text-gray-600">
          <Button variant="ghost" size="sm" className="p-1">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <span>/</span>
          <span className="truncate">Programa una cita</span>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 p-4 sm:p-6 lg:p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#1A4A84] mb-4">
            Programa una cita
            <br />
            virtual o presencial
          </h1>
          <p className="text-base sm:text-lg text-gray-600 mb-8 lg:mb-12">
            Selecciona el tipo de atención de tu preferencia.
          </p>

          {/* Appointment Type Cards */}
          <div className="space-y-4">
            {appointmentTypes.map((type, index) => (
              <Card
                key={index}
                className="border border-gray-200 hover:border-[#00A39C]/50 transition-colors cursor-pointer"
              >
                <CardContent className="p-4 sm:p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1 min-w-0">
                      <h3 className="text-lg sm:text-xl font-semibold text-[#1A4A84] mb-2">{type.title}</h3>
                      <p className="text-sm sm:text-base text-gray-600">{type.description}</p>
                    </div>
                    <div className="ml-4 sm:ml-6 flex-shrink-0">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#00A39C] rounded-full flex items-center justify-center">
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <Button variant="outline" size="sm" onClick={() => setSidebarOpen(!sidebarOpen)} className="bg-white shadow-md">
          {sidebarOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </Button>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setSidebarOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-300 ease-in-out
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
      >
        {/* Logo */}
        <div className="p-4 sm:p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#00A39C] rounded flex items-center justify-center">
              <div className="w-5 h-5 text-white font-bold text-lg">+</div>
            </div>
            <span className="text-xl sm:text-2xl font-bold text-gray-800">SISOL</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item) => (
              <li key={item.title}>
                <button
                  onClick={() => handleNavigation(item.title)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-colors text-left ${
                    currentPage === item.title
                      ? "bg-[#00A39C]/10 text-[#1A4A84] border-l-4 border-[#00A39C]"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <item.icon className="w-5 h-5 flex-shrink-0" />
                  <span className="truncate">{item.title}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0 pt-16 lg:pt-0">
        {currentPage === "Home" ? renderHomePage() : renderSolicitarCitaPage()}
      </div>
    </div>
  )
}
