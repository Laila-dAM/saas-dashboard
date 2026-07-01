import { Router } from "express"
import logs from "../db/logs.json"

const router = Router()

router.get("/", (_, res) => {
  res.json(logs)
})

router.get("/:id", (req, res) => {
  const log = logs.find((item) => item.id === req.params.id)

  if (!log) {
    return res.status(404).json({
      error: "Log not found"
    })
  }

  res.json(log)
})

router.get("/level/:level", (req, res) => {
  const filteredLogs = logs.filter(
    (item) => item.level === req.params.level
  )

  res.json(filteredLogs)
})

router.get("/user/:user", (req, res) => {
  const filteredLogs = logs.filter(
    (item) => item.user === req.params.user
  )

  res.json(filteredLogs)
})

router.get("/action/:action", (req, res) => {
  const filteredLogs = logs.filter(
    (item) => item.action === req.params.action
  )

  res.json(filteredLogs)
})

export default router