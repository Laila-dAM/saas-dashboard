import { NextRequest, NextResponse } from "next/server"

const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password"
]

const AUTH_ROUTES = [
  "/login",
  "/register",
  "/forgot-password",
  "/reset-password"
]

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon.ico") ||
    pathname.includes(".")
  ) {
    return NextResponse.next()
  }

  const token =
    request.cookies.get("token")?.value ??
    request.cookies.get("auth-token")?.value

  const isPublicRoute = PUBLIC_ROUTES.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  )

  const isAuthRoute = AUTH_ROUTES.some(route =>
    pathname === route || pathname.startsWith(`${route}/`)
  )

  if (!token && !isPublicRoute) {
    return NextResponse.redirect(new URL("/login", request.url))
  }

  if (token && isAuthRoute) {
    return NextResponse.redirect(new URL("/dashboard", request.url))
  }

  const response = NextResponse.next()

  response.headers.set("X-Frame-Options", "DENY")
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set(
    "Referrer-Policy",
    "strict-origin-when-cross-origin"
  )

  return response
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"]
}