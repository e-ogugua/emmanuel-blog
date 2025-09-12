import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { BlogHeader } from "@/components/blog/blog-header"
import { blogPosts } from "@/lib/blog-data"

interface CategoryPageProps {
  params: {
    category: string
  }
}

const categoryMap: Record<string, string> = {
  technology: "Technology",
  business: "Business",
  faith: "Faith",
  "personal-journey": "Personal Journey",
}

export async function generateStaticParams() {
  return Object.keys(categoryMap).map((category) => ({
    category,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps) {
  const categoryName = categoryMap[params.category]

  if (!categoryName) {
    return {
      title: "Category Not Found - CEOWRITES",
    }
  }

  return {
    title: `${categoryName} Articles - CEOWRITES`,
    description: `Read Emmanuel's insights on ${categoryName.toLowerCase()}. Practical advice and personal experiences from a tech entrepreneur.`,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryName = categoryMap[params.category]

  if (!categoryName) {
    notFound()
  }

  const categoryPosts = blogPosts.filter((post) => post.category.toLowerCase().replace(" ", "-") === params.category)

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-8">
            <Link href="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>

          {/* Category Header */}
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              {categoryName}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">{categoryName} Articles</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {categoryName === "Technology" &&
                "Exploring app development, AI, cybersecurity, and the latest in tech innovation."}
              {categoryName === "Business" &&
                "Insights on entrepreneurship, startups, and building sustainable businesses in Africa."}
              {categoryName === "Faith" && "Balancing spiritual growth with professional ambitions and daily life."}
              {categoryName === "Personal Journey" &&
                "Personal reflections, lessons learned, and stories from my entrepreneurial journey."}
            </p>
          </div>

          {/* Posts Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryPosts.map((post) => (
              <Card key={post.slug} className="group hover:shadow-lg transition-all duration-300">
                <div className="aspect-video bg-gradient-to-br from-primary/10 to-primary/5 rounded-t-lg"></div>
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
                      className="text-xs"
                    >
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg group-hover:text-accent transition-colors">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{post.date}</span>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read more <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {categoryPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground">No articles found in this category yet.</p>
              <Button variant="outline" asChild className="mt-4 bg-transparent">
                <Link href="/blog">Browse All Articles</Link>
              </Button>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}
