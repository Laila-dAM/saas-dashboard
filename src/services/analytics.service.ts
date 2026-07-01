import { apiGet } from "./api"

export type Analytics = {
  visits: number
  signups: number
  conversion: number
  revenue: number
  traffic: {
    day: string
    value: number
  }[]
}

export async function getAnalytics() {
  return apiGet<Analytics>("/analytics")
}