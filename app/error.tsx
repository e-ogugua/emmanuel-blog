"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { useEffect } from "react"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <Card className="max-w-md w-full text-center shadow-lg">
        <CardHeader>
          <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="text-3xl">⚠️</span>
          </div>
          <CardTitle className="text-2xl font-serif">Something went wrong</CardTitle>
          <CardDescription>An unexpected error occurred. Please try again or return to the homepage.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button onClick={reset} className="hover:scale-105 transition-transform duration-200">
              🔄 Try Again
            </Button>
            <Button
              variant="outline"
              className="hover:scale-105 transition-transform duration-200 bg-transparent"
              asChild
            >
              <Link href="/">🏠 Go Home</Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
