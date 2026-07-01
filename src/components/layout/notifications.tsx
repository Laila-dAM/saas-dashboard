import React from "react"
import { Badge } from "@/components/ui/badge"

type Notification = {
  id: string
  title: string
  message: string
  time: string
  type: "info" | "success" | "warning" | "error"
  read?: boolean
}

type NotificationsProps = {
  notifications: Notification[]
  onOpen?: (id: string) => void
}

export function Notifications({
  notifications,
  onOpen
}: NotificationsProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="text-sm font-medium text-white">
        Notifications
      </div>

      <div className="mt-4 space-y-3">
        {notifications.length === 0 ? (
          <div className="text-sm text-slate-400">
            No notifications
          </div>
        ) : (
          notifications.map((notification) => (
            <div
              key={notification.id}
              onClick={() => onOpen?.(notification.id)}
              className={
                "cursor-pointer rounded-md border p-3 transition " +
                (notification.read
                  ? "border-slate-800 bg-slate-950"
                  : "border-slate-700 bg-slate-900")
              }
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">
                  {notification.title}
                </div>

                <Badge
                  variant={
                    notification.type === "success"
                      ? "success"
                      : notification.type === "warning"
                      ? "warning"
                      : notification.type === "error"
                      ? "danger"
                      : "info"
                  }
                >
                  {notification.type}
                </Badge>
              </div>

              <div className="mt-1 text-xs text-slate-400">
                {notification.message}
              </div>

              <div className="mt-2 text-[10px] text-slate-500">
                {notification.time}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}