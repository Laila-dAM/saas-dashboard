import React, { useState } from "react"
import { cn } from "@/lib/utils"

type SwitchProps = {
  checked?: boolean
  onChange?: (value: boolean) => void
  disabled?: boolean
  className?: string
}

export function Switch({
  checked = false,
  onChange,
  disabled,
  className
}: SwitchProps) {
  const [internal, setInternal] = useState(checked)

  const isControlled = typeof onChange === "function"
  const value = isControlled ? checked : internal

  function toggle() {
    if (disabled) return

    if (isControlled) {
      onChange?.(!checked)
    } else {
      setInternal(!internal)
    }
  }

  return (
    <button
      type="button"
      onClick={toggle}
      disabled={disabled}
      className={cn(
        "relative inline-flex h-6 w-11 items-center rounded-full transition-colors",
        value ? "bg-violet-600" : "bg-slate-700",
        disabled && "opacity-50 cursor-not-allowed",
        className
      )}
    >
      <span
        className={cn(
          "inline-block h-4 w-4 transform rounded-full bg-white transition-transform",
          value ? "translate-x-6" : "translate-x-1"
        )}
      />
    </button>
  )
}