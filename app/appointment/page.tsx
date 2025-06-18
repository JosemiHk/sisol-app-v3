import { Sidebar } from "@/components/sidebar"
import { AppointmentTypeSelection } from "@/components/appointment-type-selection"

export default function Page() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <div className="flex-1">
        <AppointmentTypeSelection />
      </div>
    </div>
  )
}
