import React from "react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type PricingCardProps = {
  title: string
  price: string
  description?: string
  features: string[]
  buttonText: string
  highlighted?: boolean
  onSelect?: () => void
}

export function PricingCard({
  title,
  price,
  description,
  features,
  buttonText,
  highlighted,
  onSelect
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "rounded-lg border p-6 flex flex-col gap-4",
        highlighted
          ? "border-violet-600 bg-slate-900"
          : "border-slate-800 bg-slate-950"
      )}
    >
      <div>
        <div className="text-sm text-slate-400">{title}</div>
        <div className="text-3xl font-bold text-white">{price}</div>
        {description && (
          <div className="text-sm text-slate-400 mt-1">
            {description}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-2 text-sm text-slate-300">
        {features.map((feature, index) => (
          <div key={index}>• {feature}</div>
        ))}
      </div>

      <div className="mt-auto">
        <Button onClick={onSelect} className="w-full">
          {buttonText}
        </Button>
      </div>
    </div>
  )
}