import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header Skeleton */}
      <header className="border-b bg-background/95 backdrop-blur sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Skeleton className="w-8 h-8 rounded-lg" />
            <div>
              <Skeleton className="h-4 w-20 mb-1" />
              <Skeleton className="h-3 w-16" />
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-6">
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-14" />
            <Skeleton className="h-4 w-10" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
      </header>

      {/* Hero Section Skeleton */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Skeleton className="h-16 w-full max-w-3xl mx-auto mb-6" />
          <Skeleton className="h-6 w-full max-w-2xl mx-auto mb-8" />
          <div className="max-w-md mx-auto mb-8">
            <div className="flex gap-2">
              <Skeleton className="h-10 flex-1" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <Skeleton className="h-12 w-16" />
            <Skeleton className="h-12 w-16" />
            <Skeleton className="h-12 w-16" />
          </div>
        </div>
      </section>

      {/* Cards Skeleton */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <Skeleton className="h-8 w-48 mx-auto mb-12" />
          <div className="grid md:grid-cols-3 gap-8">
            {Array.from({ length: 3 }).map((_, i) => (
              <Card key={i}>
                <CardHeader>
                  <Skeleton className="w-12 h-12 rounded-lg mb-4" />
                  <Skeleton className="h-6 w-32 mb-2" />
                  <Skeleton className="h-4 w-full mb-1" />
                  <Skeleton className="h-4 w-3/4" />
                </CardHeader>
                <CardContent>
                  <Skeleton className="h-4 w-24" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
