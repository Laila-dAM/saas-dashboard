import { NextResponse } from "next/server"

const users = [
  { id: "1", name: "John Doe", email: "john@example.com", status: "active" },
  { id: "2", name: "Jane Smith", email: "jane@example.com", status: "inactive" },
  { id: "3", name: "Alex Brown", email: "alex@example.com", status: "active" }
]

export async function GET() {
  return NextResponse.json(users)
}

export async function POST(req: Request) {
  const body = await req.json()

  if (!body.name || !body.email) {
    return NextResponse.json(
      { error: "Missing fields" },
      { status: 400 }
    )
  }

  const newUser = {
    id: String(users.length + 1),
    name: body.name,
    email: body.email,
    status: "active"
  }

  users.push(newUser)

  return NextResponse.json(newUser)
}