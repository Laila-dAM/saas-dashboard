import { apiPost } from "./api"

type LoginResponse = {
  token: string
  user: {
    id: string
    name: string
    email: string
  }
}

export async function login(email: string, password: string) {
  return apiPost<LoginResponse>("/auth", { email, password })
}

export function logout() {
  localStorage.removeItem("token")
}

export function saveToken(token: string) {
  localStorage.setItem("token", token)
}

export function getToken() {
  return localStorage.getItem("token")
}