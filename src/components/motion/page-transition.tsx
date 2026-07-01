import React from "react"
import { AnimatePresence, motion } from "framer-motion"

type PageTransitionProps = {
  children: React.ReactNode
  routeKey: string
}

const variants = {
  initial: {
    opacity: 0,
    y: 16
  },
  animate: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -16
  }
}

export function PageTransition({
  children,
  routeKey
}: PageTransitionProps) {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={routeKey}
        variants={variants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{
          duration: 0.35,
          ease: "easeOut"
        }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}