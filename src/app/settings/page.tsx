"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [darkMode, setDarkMode] = useState(true)
  const [emailNotifications, setEmailNotifications] = useState(true)

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold">Settings</h1>
        <p className="text-sm text-slate-400">
          Manage your account preferences
        </p>
      </div>

      <div className="space-y-4">
        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Dark Mode</p>
            <p className="text-xs text-slate-400">Enable dark theme</p>
          </div>

          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-3 py-1 text-xs rounded-md bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            {darkMode ? "On" : "Off"}
          </button>
        </div>

        <div className="p-4 bg-slate-900 border border-slate-800 rounded-lg flex justify-between items-center">
          <div>
            <p className="text-sm font-medium">Email Notifications</p>
            <p className="text-xs text-slate-400">
              Receive updates by email
            </p>
          </div>

          <button
            onClick={() => setEmailNotifications(!emailNotifications)}
            className="px-3 py-1 text-xs rounded-md bg-indigo-600 hover:bg-indigo-500 text-white"
          >
            {emailNotifications ? "On" : "Off"}
          </button>
        </div>
      </div>
    </div>
  )
}