export const PERMISSIONS = {
  DASHBOARD_VIEW: "dashboard:view",
  USERS_VIEW: "users:view",
  USERS_CREATE: "users:create",
  USERS_UPDATE: "users:update",
  USERS_DELETE: "users:delete",

  ANALYTICS_VIEW: "analytics:view",

  BILLING_VIEW: "billing:view",
  BILLING_MANAGE: "billing:manage",

  LOGS_VIEW: "logs:view",

  SETTINGS_VIEW: "settings:view",
  SETTINGS_UPDATE: "settings:update",

  PROFILE_VIEW: "profile:view",
  PROFILE_UPDATE: "profile:update",

  ADMIN_ACCESS: "admin:access"
} as const

export type Permission =
  (typeof PERMISSIONS)[keyof typeof PERMISSIONS]

export const ROLE_PERMISSIONS = {
  admin: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_UPDATE,
    PERMISSIONS.USERS_DELETE,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.BILLING_VIEW,
    PERMISSIONS.BILLING_MANAGE,
    PERMISSIONS.LOGS_VIEW,
    PERMISSIONS.SETTINGS_VIEW,
    PERMISSIONS.SETTINGS_UPDATE,
    PERMISSIONS.PROFILE_VIEW,
    PERMISSIONS.PROFILE_UPDATE,
    PERMISSIONS.ADMIN_ACCESS
  ],

  manager: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.USERS_CREATE,
    PERMISSIONS.USERS_UPDATE,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.BILLING_VIEW,
    PERMISSIONS.LOGS_VIEW,
    PERMISSIONS.SETTINGS_VIEW,
    PERMISSIONS.PROFILE_VIEW,
    PERMISSIONS.PROFILE_UPDATE
  ],

  analyst: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.USERS_VIEW,
    PERMISSIONS.ANALYTICS_VIEW,
    PERMISSIONS.LOGS_VIEW,
    PERMISSIONS.PROFILE_VIEW,
    PERMISSIONS.PROFILE_UPDATE
  ],

  user: [
    PERMISSIONS.DASHBOARD_VIEW,
    PERMISSIONS.PROFILE_VIEW,
    PERMISSIONS.PROFILE_UPDATE
  ]
} as const

export type UserRole = keyof typeof ROLE_PERMISSIONS

export function hasPermission(
  role: UserRole,
  permission: Permission
): boolean {
  return ROLE_PERMISSIONS[role].includes(permission)
}

export function hasAnyPermission(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.some(permission =>
    ROLE_PERMISSIONS[role].includes(permission)
  )
}

export function hasAllPermissions(
  role: UserRole,
  permissions: Permission[]
): boolean {
  return permissions.every(permission =>
    ROLE_PERMISSIONS[role].includes(permission)
  )
}

export function getPermissions(
  role: UserRole
): readonly Permission[] {
  return ROLE_PERMISSIONS[role]
}