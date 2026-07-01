import React, { useState } from "react"
import { Modal } from "@/components/ui/modal"
import { Input } from "@/components/ui/input"
import { Select } from "@/components/ui/select"
import { Button } from "@/components/ui/button"

type User = {
  id?: string
  name: string
  email: string
  role: string
  status: "active" | "inactive"
}

type UserModalProps = {
  open: boolean
  onClose: () => void
  onSave: (user: User) => void
  initialData?: User
}

export function UserModal({
  open,
  onClose,
  onSave,
  initialData
}: UserModalProps) {
  const [name, setName] = useState(initialData?.name || "")
  const [email, setEmail] = useState(initialData?.email || "")
  const [role, setRole] = useState(initialData?.role || "User")
  const [status, setStatus] = useState<User["status"]>(
    initialData?.status || "active"
  )

  function handleSubmit() {
    onSave({
      id: initialData?.id,
      name,
      email,
      role,
      status
    })
    onClose()
  }

  return (
    <Modal open={open} onClose={onClose} title="User">
      <div className="flex flex-col gap-3">
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />

        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />

        <Select value={role} onChange={(e) => setRole(e.target.value)}>
          <option value="Administrator">Administrator</option>
          <option value="Manager">Manager</option>
          <option value="Developer">Developer</option>
          <option value="Designer">Designer</option>
          <option value="Support">Support</option>
          <option value="Marketing">Marketing</option>
          <option value="User">User</option>
        </Select>

        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as User["status"])}
        >
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </Select>

        <div className="flex justify-end gap-2 mt-2">
          <Button variant="ghost" onClick={onClose}>
            Cancel
          </Button>

          <Button onClick={handleSubmit}>
            Save
          </Button>
        </div>
      </div>
    </Modal>
  )
}