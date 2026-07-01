import React from "react"

type Activity = {
  id: string
  message: string
  time: string
  type: "info" | "success" | "warning" | "error"
}

type ActivityFeedProps = {
  activities: Activity[]
}

export function ActivityFeed({ activities }: ActivityFeedProps) {
  return (
    <div className="rounded-lg border border-slate-800 bg-slate-900 p-4">
      <div className="text-sm font-medium text-white">Recent Activity</div>

      <div className="mt-4 space-y-3">
        {activities.length === 0 ? (
          <div className="text-sm text-slate-400">No recent activity</div>
        ) : (
          activities.map((activity) => (
            <div
              key={activity.id}
              className="flex items-start justify-between gap-4"
            >
              <div>
                <div className="text-sm text-slate-200">
                  {activity.message}
                </div>

                <div className="text-xs text-slate-500">
                  {activity.time}
                </div>
              </div>

              <span
                className={
                  "text-xs px-2 py-1 rounded-full " +
                  (activity.type === "success"
                    ? "bg-green-600/20 text-green-400"
                    : activity.type === "warning"
                    ? "bg-yellow-600/20 text-yellow-400"
                    : activity.type === "error"
                    ? "bg-red-600/20 text-red-400"
                    : "bg-blue-600/20 text-blue-400")
                }
              >
                {activity.type}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  )
}