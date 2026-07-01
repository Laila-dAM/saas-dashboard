import { NextResponse } from "next/server"

const analytics = {
  visits: 24320,
  signups: 1240,
  conversion: 4.8,
  revenue: 18540,
  traffic: [
    { day: "Mon", value: 1200 },
    { day: "Tue", value: 1800 },
    { day: "Wed", value: 1600 },
    { day: "Thu", value: 2200 },
    { day: "Fri", value: 3000 },
    { day: "Sat", value: 2500 },
    { day: "Sun", value: 2000 }
  ]
}

export async function GET() {
  return NextResponse.json(analytics)
}