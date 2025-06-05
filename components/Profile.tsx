import { User } from "lucide-react"

export function Profile() {
  return (
    <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-sidebar-accent transition-colors">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
        <User className="w-4 h-4 text-white" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-sidebar-foreground truncate">John Doe</p>
        <p className="text-xs text-sidebar-foreground/70 truncate">john@example.com</p>
      </div>
    </div>
  )
}