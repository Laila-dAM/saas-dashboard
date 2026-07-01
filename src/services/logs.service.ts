import { apiGet } from "./api"

export type Log = {
  id: string
  action: string
  user: string
  time: string
}

export async function getLogs() {
  return apiGet<Log[]>("/logs")
}