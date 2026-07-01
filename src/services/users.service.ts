import { apiGet, apiPost } from "./api"

export type User = {
  id: string
  name: string
  email: string
  status: string
}

export async function getUsers() {
  return apiGet<User[]>("/users")
}

export async function createUser(data: { name: string; email: string }) {
  return apiPost<User>("/users", data)
}

export async function getUserById(id: string) {
  const users = await apiGet<User[]>("/users")
  return users.find((u) => u.id === id)
}