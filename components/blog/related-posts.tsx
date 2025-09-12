import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface BlogPost {
  slug: string
  title: string
  excerpt: string
  category: string
  date: string
  readTime: string
  content: string
}

interface RelatedPostsProps {
  posts: BlogPost[]
}

export function RelatedPosts({ posts }: RelatedPostsProps) {
  if (posts.length === 0) return null

  return (
    <section className="py-16 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl font-bold mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          Related Articles
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Card
              key={post.slug}
              className="group hover:shadow-xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2 border-2 hover:border-primary/20 animate-in fade-in slide-in-from-bottom-4"
              style={{ animationDelay: `${200 + index * 150}ms` }}
            >
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-primary/5 group-hover:scale-110 transition-transform duration-500"></div>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge
                    variant={
                      post.category === "Technology"
                        ? "secondary"
                        : post.category === "Business"
                          ? "outline"
                          : "default"
                    }
                    className="text-xs group-hover:scale-105 transition-transform duration-200"
                  >
                    {post.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{post.readTime}</span>
                </div>
                <CardTitle className="text-lg group-hover:text-accent transition-colors duration-300">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="hover:underline decoration-accent decoration-2 underline-offset-4"
                  >
                    {post.title}
                  </Link>
                </CardTitle>
                <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  variant="ghost"
                  size="sm"
                  asChild
                  className="group-hover:bg-accent/10 group-hover:text-accent transition-all duration-200"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read more <ArrowRight className="ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
