import { Bell } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function NotificationBell() {
  return (
    <div className="relative">
      <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Bell className="w-5 h-5 text-gray-600 dark:text-gray-400" />
      </button>
      <Badge className="absolute -top-1 -right-1 w-5 h-5 p-0 flex items-center justify-center bg-red-500 hover:bg-red-500 text-white text-xs">
        3
      </Badge>
    </div>
  )
}