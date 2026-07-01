import { NextResponse } from "next/server"

const plans = [
  {
    id: "basic",
    name: "Basic",
    price: 9,
    features: ["Analytics", "Reports"]
  },
  {
    id: "pro",
    name: "Pro",
    price: 29,
    features: ["Everything in Basic", "API Access", "Priority Support"]
  },
  {
    id: "enterprise",
    name: "Enterprise",
    price: 99,
    features: ["All features", "Dedicated support", "Custom SLA"]
  }
]

export async function GET() {
  return NextResponse.json(plans)
}