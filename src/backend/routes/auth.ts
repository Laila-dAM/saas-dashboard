import { Router } from "express"

const router = Router()

router.post("/", (req, res) => {
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

router.post("/logout", (_, res) => {
  res.json({
    success: true
  })
})

router.get("/me", (_, res) => {
  res.json({
    id: "1",
    name: "Admin User",
    email: "admin@example.com",
    role: "Administrator"
  })
})

export default router