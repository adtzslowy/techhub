"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedFadeUpProps {
  children: React.ReactNode
  delay?: number
  className?: string
}

export function AnimatedFadeUp({
  children,
  delay = 0,
  className,
}: AnimatedFadeUpProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(t)
  }, [delay])

  return (
    <div
      className={cn(
        "transition-all duration-700 ease-out",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-3",
        className
      )}
    >
      {children}
    </div>
  )
}
