import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { blogPosts } from "@/lib/blog-data"

export const metadata = {
  title: "Stories & Insights - CEOWRITES",
  description: "Personal stories and insights on Technology, Business, and Faith by Emmanuel",
}

export default function BlogPage() {
  const categories = ["All", "Technology", "Business", "Faith", "Personal Journey"]
  const featuredPost = blogPosts[0]
  const recentPosts = blogPosts.slice(1, 7)
  const olderPosts = blogPosts.slice(7)

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
            Stories & Insights
          </h1>
          <p className="story-text text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            Welcome to my collection of thoughts, experiences, and lessons learned on the journey of building
            technology, growing businesses, and living with purpose. Each story here is a piece of my heart shared with
            you.
          </p>

          <div className="max-w-md mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
            <div className="flex gap-3">
              <Input placeholder="Search stories..." className="flex-1 border-2 focus:border-primary" />
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Search</Button>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
            {categories.map((category, index) => (
              <Button
                key={category}
                variant={category === "All" ? "default" : "outline"}
                size="sm"
                className="font-medium hover:scale-105 transition-all duration-200"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Featured Story - Large */}
            <div className="lg:col-span-2">
              <Card className="group hover:shadow-2xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                <div className="aspect-[16/9] relative overflow-hidden">
                  <Image
                    src={featuredPost.imageUrl}
                    alt={featuredPost.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute top-6 left-6 z-10">
                    <Badge className="bg-primary text-primary-foreground font-medium">Featured Story</Badge>
                  </div>
                </div>
                <CardHeader className="p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <Badge variant="outline" className="font-medium">
                      {featuredPost.category}
                    </Badge>
                    <span className="text-sm text-muted-foreground">📅 {featuredPost.date}</span>
                    <span className="text-sm text-muted-foreground">⏱️ {featuredPost.readTime}</span>
                  </div>
                  <CardTitle className="text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                  </CardTitle>
                  <CardDescription className="story-text mb-6">{featuredPost.excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                        <span className="text-primary-foreground font-bold font-serif">E</span>
                      </div>
                      <div>
                        <p className="font-medium">Emmanuel</p>
                        <p className="text-sm text-muted-foreground">Storyteller & Builder</p>
                      </div>
                    </div>
                    <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium" asChild>
                      <Link href={`/blog/${featuredPost.slug}`}>
                        Read the story
                        <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </Card>
            </div>

            {/* Sidebar - Recent Stories */}
            <div className="space-y-8">
              <div>
                <h3 className="font-serif text-2xl font-bold mb-6">Recent Stories</h3>
                <div className="space-y-6">
                  {recentPosts.slice(0, 3).map((post) => (
                    <Card
                      key={post.slug}
                      className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                    >
                      <div className="aspect-[4/3] relative overflow-hidden bg-muted/30">
                        <Image
                          src={post.imageUrl || "/blog-images/placeholder.svg"}
                          alt={post.imageAlt || post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "/blog-images/placeholder.svg";
                          }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      </div>
                      <CardHeader className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Badge variant="secondary" className="text-xs font-medium">
                            {post.category}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{post.readTime}</span>
                        </div>
                        <CardTitle className="text-lg font-serif font-bold group-hover:text-primary transition-colors leading-snug">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed">
                          {post.excerpt.substring(0, 100)}...
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Newsletter Signup in Sidebar */}
              <Card className="bg-muted/50 border-0">
                <CardHeader className="p-6">
                  <CardTitle className="font-serif text-xl">Join the Journey</CardTitle>
                  <CardDescription className="story-text mb-4">
                    Get weekly stories and insights delivered to your inbox. Real thoughts, no fluff.
                  </CardDescription>
                  <div className="space-y-3">
                    <Input placeholder="Your email address" className="border-2 focus:border-primary" />
                    <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Subscribe</Button>
                  </div>
                  <p className="text-xs text-muted-foreground mt-2">No spam, ever. Unsubscribe anytime.</p>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">More Stories</h2>
            <p className="story-text text-muted-foreground max-w-2xl mx-auto">
              Dive deeper into my thoughts and experiences
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {recentPosts.slice(3).map((post) => (
              <Card
                key={post.slug}
                className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm flex flex-col h-full"
              >
                <div className="aspect-[4/3] relative overflow-hidden bg-muted/30">
                  <Image
                    src={post.imageUrl || "/blog-images/placeholder.svg"}
                    alt={post.imageAlt || post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.onerror = null;
                      target.src = "/blog-images/placeholder.svg";
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>
                <CardHeader className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge
                      variant={
                        post.category === "Technology"
                          ? "default"
                          : post.category === "Business"
                            ? "secondary"
                            : "outline"
                      }
                      className="text-xs font-medium"
                    >
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl font-serif font-bold group-hover:text-primary transition-colors leading-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <CardDescription className="leading-relaxed">{post.excerpt.substring(0, 120)}...</CardDescription>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">📅 {post.date}</span>
                    <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80" asChild>
                      <Link href={`/blog/${post.slug}`}>
                        Read
                        <span className="ml-1 group-hover:translate-x-1 transition-transform inline-block">→</span>
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {olderPosts.length > 0 && (
            <div>
              <h3 className="text-2xl font-serif font-bold mb-8">From the Archives</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {olderPosts.slice(0, 6).map((post) => (
                  <Card
                    key={post.slug}
                    className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm flex flex-row h-full"
                  >
                    <div className="w-1/3 relative">
                      <Image
                        src={post.imageUrl || "/blog-images/placeholder.svg"}
                        alt={post.imageAlt || post.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.onerror = null;
                          target.src = "/blog-images/placeholder.svg";
                        }}
                      />
                    </div>
                    <div className="w-2/3">
                    <CardHeader className="p-4">
                      <div className="flex items-center gap-2 mb-3">
                        <Badge variant="outline" className="text-xs">
                          {post.category}
                        </Badge>
                        <span className="text-xs text-muted-foreground">{post.date}</span>
                      </div>
                      <CardTitle className="text-lg font-serif font-bold group-hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </CardTitle>
                      <CardDescription className="text-sm">{post.excerpt.substring(0, 100)}...</CardDescription>
                    </CardHeader>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              className="hover:scale-105 hover:shadow-lg transition-all duration-300 hover:bg-primary hover:text-primary-foreground bg-transparent"
            >
              Explore All Stories
              <span className="ml-2">→</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
