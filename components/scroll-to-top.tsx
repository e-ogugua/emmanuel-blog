"use client"

import { Button } from "@/components/ui/button"
import { ArrowUp } from "lucide-react"
import { useEffect, useState } from "react"

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  if (!isVisible) {
    return null
  }

  return (
    <Button
      className="fixed bottom-8 right-8 z-50 rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      size="icon"
      onClick={scrollToTop}
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-4 w-4" />
    </Button>
  )
}
