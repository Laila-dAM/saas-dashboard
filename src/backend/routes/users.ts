import { Router } from "express"
import users from "../db/users.json"

const router = Router()

router.get("/", (_, res) => {
  res.json(users)
})

router.get("/:id", (req, res) => {
  const user = users.find((item) => item.id === req.params.id)

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    })
  }

  res.json(user)
})

router.post("/", (req, res) => {
  const { name, email, role } = req.body

  if (!name || !email) {
    return res.status(400).json({
      error: "Missing required fields"
    })
  }

  const newUser = {
    id: String(users.length + 1),
    name,
    email,
    status: "active",
    role: role ?? "User",
    createdAt: new Date().toISOString()
  }

  users.push(newUser)

  res.status(201).json(newUser)
})

router.put("/:id", (req, res) => {
  const user = users.find((item) => item.id === req.params.id)

  if (!user) {
    return res.status(404).json({
      error: "User not found"
    })
  }

  Object.assign(user, req.body)

  res.json(user)
})

router.delete("/:id", (req, res) => {
  const index = users.findIndex((item) => item.id === req.params.id)

  if (index === -1) {
    return res.status(404).json({
      error: "User not found"
    })
  }

  const deletedUser = users.splice(index, 1)[0]

  res.json(deletedUser)
})

export default router