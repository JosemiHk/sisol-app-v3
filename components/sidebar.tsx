import { Home, Calendar, Clock, User, LogOut } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Sidebar() {
  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen flex flex-col">
      {/* Logo */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00A39C] rounded flex items-center justify-center">
            <div className="w-6 h-6 border-2 border-white rounded-sm relative">
              <div className="absolute inset-1 border border-white"></div>
            </div>
          </div>
          <span className="text-2xl font-bold text-slate-800">SISOL</span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <div className="space-y-2">
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:bg-slate-100">
            <Home className="w-5 h-5 mr-3" />
            Home
          </Button>
          <Button variant="ghost" className="w-full justify-start text-[#00A39C] bg-[#00A39C]/10 hover:bg-[#00A39C]/20">
            <Calendar className="w-5 h-5 mr-3" />
            Agendar citas
          </Button>
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:bg-slate-100">
            <Clock className="w-5 h-5 mr-3" />
            Historial de citas
          </Button>
          <Button variant="ghost" className="w-full justify-start text-slate-400 hover:bg-slate-100">
            <User className="w-5 h-5 mr-3" />
            Mi cuenta
          </Button>
        </div>
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-gray-200">
        <Button variant="ghost" className="w-full justify-start text-red-600 hover:bg-red-50">
          <LogOut className="w-5 h-5 mr-3" />
          Cerrar sesión
        </Button>
      </div>
    </div>
  )
}
