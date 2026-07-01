import React from "react"
import { motion } from "framer-motion"
import { scaleIn } from "@/lib/animations"

type ScaleInProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function ScaleIn({
  children,
  delay = 0,
  duration = 0.4,
  className
}: ScaleInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={scaleIn}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}