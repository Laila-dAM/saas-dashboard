import React from "react"
import { motion } from "framer-motion"
import { fadeIn } from "@/lib/animations"

type FadeInProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.4,
  className
}: FadeInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeIn}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}