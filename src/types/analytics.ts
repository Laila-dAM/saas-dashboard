export type TrafficPoint = {
  day: string
  value: number
}

export type Analytics = {
  visits: number
  signups: number
  conversion: number
  revenue: number
  traffic: TrafficPoint[]
}