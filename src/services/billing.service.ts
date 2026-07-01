import { apiGet } from "./api"

export type Plan = {
  id: string
  name: string
  price: number
  features: string[]
}

export async function getBillingPlans() {
  return apiGet<Plan[]>("/billing")
}