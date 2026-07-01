"use client"

import { useState } from "react"

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  function handleSubmit() {
    setSent(true)
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Forgot password</h1>

      {!sent ? (
        <>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm"
          />

          <button
            onClick={handleSubmit}
            className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-md"
          >
            Send reset link
          </button>
        </>
      ) : (
        <p className="text-sm text-slate-400">
          If this email exists, a reset link has been sent.
        </p>
      )}
    </div>
  )
}