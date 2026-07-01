import express from "express"
import cors from "cors"

import users from "./db/users.json"
import analytics from "./db/analytics.json"
import billing from "./db/billing.json"
import logs from "./db/logs.json"
import notifications from "./db/notifications.json"

const app = express()

app.use(cors())
app.use(express.json())

app.get("/", (_, res) => {
  res.json({
    name: "SaaS Dashboard Mock API",
    version: "1.0.0",
    status: "online"
  })
})

app.post("/api/auth", (req, res) => {
  const { email, password } = req.body

  if (!email || !password) {
    return res.status(400).json({
      error: "Missing credentials"
    })
  }

  if (email === "admin@example.com" && password === "123456") {
    return res.json({
      token: "fake-jwt-token",
      user: {
        id: "1",
        name: "Admin User",
        email
      }
    })
  }

  return res.status(401).json({
    error: "Invalid credentials"
  })
})

app.get("/api/users", (_, res) => {
  res.json(users)
})

app.get("/api/analytics", (_, res) => {
  res.json(analytics)
})

app.get("/api/billing", (_, res) => {
  res.json(billing)
})

app.get("/api/logs", (_, res) => {
  res.json(logs)
})

app.get("/api/notifications", (_, res) => {
  res.json(notifications)
})

const PORT = process.env.PORT || 4000

app.listen(PORT, () => {
  console.log(`Mock API running on http://localhost:${PORT}`)
})