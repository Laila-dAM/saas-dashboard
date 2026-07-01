import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const body = await req.json()

  const { email, password } = body

  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing credentials" },
      { status: 400 }
    )
  }

  if (email === "admin@example.com" && password === "123456") {
    return NextResponse.json({
      token: "fake-jwt-token",
      user: {
        id: "1",
        name: "Admin User",
        email
      }
    })
  }

  return NextResponse.json(
    { error: "Invalid credentials" },
    { status: 401 }
  )
}