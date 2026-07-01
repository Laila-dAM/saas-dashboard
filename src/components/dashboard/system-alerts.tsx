import React from "react"

type Alert = {
  id: string
  title: string
  message: string
  type: "info" | "success" | "warning" | "error"
}

type SystemAlertsProps = {
  alerts: Alert[]
}

export function SystemAlerts({ alerts }: SystemAlertsProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="text-sm font-medium text-white">System Alerts</div>

      <div className="mt-4 space-y-3">
        {alerts.length === 0 ? (
          <div className="text-sm text-slate-400">No alerts</div>
        ) : (
          alerts.map((alert) => (
            <div
              key={alert.id}
              className="rounded-md border border-slate-800 p-3"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm font-medium text-white">
                  {alert.title}
                </div>

                <span
                  className={
                    "text-xs px-2 py-1 rounded-full " +
                    (alert.type === "success"
                      ? "bg-green-600/20 text-green-400"
                      : alert.type === "warning"
                      ? "bg-yellow-600/20 text-yellow-400"
                      : alert.type === "error"
                      ? "bg-red-600/20 text-red-400"
                      : "bg-blue-600/20 text-blue-400")
                  }
                >
                  {alert.type}
                </span>
              </div>

              <div className="mt-1 text-xs text-slate-400">
                {alert.message}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}