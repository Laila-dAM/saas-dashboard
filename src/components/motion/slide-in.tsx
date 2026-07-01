import React from "react"
import { motion } from "framer-motion"
import { slideUp } from "@/lib/animations"

type SlideInProps = {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export function SlideIn({
  children,
  delay = 0,
  duration = 0.4,
  className
}: SlideInProps) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={slideUp}
      transition={{ delay, duration }}
      className={className}
    >
      {children}
    </motion.div>
  )
}