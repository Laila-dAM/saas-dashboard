import { Router } from "express"
import billing from "../db/billing.json"

const router = Router()

router.get("/", (_, res) => {
  res.json(billing)
})

router.get("/plans", (_, res) => {
  res.json(billing.plans)
})

router.get("/subscription", (_, res) => {
  res.json(billing.subscription)
})

router.get("/payments", (_, res) => {
  res.json(billing.paymentHistory)
})

router.post("/subscribe", (req, res) => {
  const { planId } = req.body

  if (!planId) {
    return res.status(400).json({
      error: "Plan ID is required"
    })
  }

  const plan = billing.plans.find((item) => item.id === planId)

  if (!plan) {
    return res.status(404).json({
      error: "Plan not found"
    })
  }

  return res.status(201).json({
    success: true,
    message: "Subscription created successfully",
    plan
  })
})

router.post("/cancel", (_, res) => {
  return res.json({
    success: true,
    message: "Subscription canceled successfully"
  })
})

export default router