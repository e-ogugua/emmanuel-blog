"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <div className="min-h-screen bg-background flex items-center justify-center p-4">
          <Card className="max-w-md w-full">
            <CardHeader className="text-center">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⚠️</span>
              </div>
              <CardTitle className="font-serif">Something went wrong</CardTitle>
              <CardDescription>
                We encountered an unexpected error. Don't worry, our team has been notified.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button onClick={reset} className="w-full">
                Try again
              </Button>
              <Button variant="outline" className="w-full bg-transparent" asChild>
                <a href="/">Go to homepage</a>
              </Button>
            </CardContent>
          </Card>
        </div>
      </body>
    </html>
  )
}
