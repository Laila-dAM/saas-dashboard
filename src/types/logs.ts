export type LogLevel = "info" | "warning" | "error"

export type Log = {
  id: string
  action: string
  user: string
  level: LogLevel
  message: string
  ip: string
  createdAt: string
}