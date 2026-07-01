import { z } from "zod"

export const settingsSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(2)
    .max(100),

  email: z
    .string()
    .trim()
    .email(),

  language: z.enum([
    "en",
    "es",
    "pt"
  ]),

  theme: z.enum([
    "light",
    "dark",
    "system"
  ]),

  timezone: z
    .string()
    .trim()
    .min(1),

  emailNotifications: z.boolean(),

  pushNotifications: z.boolean(),

  twoFactorAuthentication: z.boolean()
})

export type SettingsSchema = z.infer<typeof settingsSchema>