export type BillingPlan = {
  id: string
  name: string
  price: number
  features: string[]
}

export type SubscriptionStatus = "active" | "canceled" | "past_due"

export type Subscription = {
  id: string
  userId: string
  planId: string
  status: SubscriptionStatus
  currentPeriodEnd: string
}