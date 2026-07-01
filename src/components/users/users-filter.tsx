import React from "react"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"

type UsersFilterProps = {
  search: string
  role: string
  status: string
  onSearchChange: (value: string) => void
  onRoleChange: (value: string) => void
  onStatusChange: (value: string) => void
}

export function UsersFilter({
  search,
  role,
  status,
  onSearchChange,
  onRoleChange,
  onStatusChange
}: UsersFilterProps) {
  return (
    <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
      <Input
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
        placeholder="Search users"
        className="md:max-w-sm"
      />

      <div className="flex gap-3">
        <Select value={role} onChange={(e) => onRoleChange(e.target.value)}>
          <option value="">All roles</option>
          <option value="Administrator">Administrator</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Support">Support</option>
          <option value="Marketing">Marketing</option>
          <option value="User">User</option>
        </Select>

        <Select value={status} onChange={(e) => onStatusChange(e.target.value)}>
          <option value="">All status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>
      </div>
    </div>
  )
}