"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"

export default function RegisterPage() {
  const router = useRouter()
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  function handleRegister() {
    router.push("/dashboard")
  }

  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Create account</h1>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm"
      />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm"
      />

      <input
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        type="password"
        className="w-full px-3 py-2 bg-slate-950 border border-slate-800 rounded-md text-sm"
      />

      <button
        onClick={handleRegister}
        className="w-full px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-sm rounded-md"
      >
        Create account
      </button>
    </div>
  )
}