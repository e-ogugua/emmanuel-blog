import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight, Mail } from "lucide-react"

export function NewsletterSignup() {
  return (
    <section id="newsletter" className="py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2 hover:shadow-xl hover:shadow-secondary/20 transition-all duration-500 hover:-translate-y-1 hover:border-secondary/30 group animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-secondary/30 transition-all duration-300">
              <Mail className="h-8 w-8 text-secondary group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <CardTitle className="text-2xl md:text-3xl group-hover:text-secondary transition-colors duration-300">
              Stay Updated
            </CardTitle>
            <CardDescription className="text-lg">
              Get weekly insights on technology, business, and faith delivered straight to your inbox.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="max-w-md mx-auto">
              <div className="flex gap-2 mb-4">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 focus:ring-2 focus:ring-secondary/20 transition-all duration-200 hover:border-secondary/50"
                />
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:scale-105 transition-all duration-200 group/btn">
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </div>
              <p className="text-sm text-muted-foreground text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Join 1,000+ readers. No spam, unsubscribe anytime.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
