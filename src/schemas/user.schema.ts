import { z } from "zod"

export const createUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2)
    .max(100),

  email: z
    .string()
    .trim()
    .email(),

  role: z.enum([
    "Administrator",
    "Manager",
    "Developer",
    "Support",
    "Designer",
    "Marketing",
    "User"
  ]),

  status: z.enum([
    "active",
    "inactive"
  ])
})

export const updateUserSchema = createUserSchema.partial()

export type CreateUserSchema = z.infer<typeof createUserSchema>

export type UpdateUserSchema = z.infer<typeof updateUserSchema>