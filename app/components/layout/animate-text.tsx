"use client"

import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface AnimatedWordsProps {
  text: string
  delay?: number
  className?: string
}

export function AnimatedWords({
  text,
  delay = 0,
  className,
}: AnimatedWordsProps) {
  const [show, setShow] = useState(false)
  const words = text.split(" ")

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className={cn(
            "inline-block transition-all duration-700 ease-out",
            show
              ? "opacity-100 blur-0 translate-y-0"
              : "opacity-0 blur-md translate-y-2"
          )}
          style={{
            transitionDelay: `${i * 200}ms`,
          }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  )
}
