import { Router } from "express"
import analytics from "../db/analytics.json"

const router = Router()

router.get("/", (_, res) => {
  res.json(analytics)
})

router.get("/summary", (_, res) => {
  res.json(analytics.summary)
})

router.get("/traffic", (_, res) => {
  res.json(analytics.traffic)
})

router.get("/revenue", (_, res) => {
  res.json(analytics.revenueHistory)
})

router.get("/growth", (_, res) => {
  res.json(analytics.userGrowth)
})

router.get("/devices", (_, res) => {
  res.json(analytics.deviceDistribution)
})

export default router