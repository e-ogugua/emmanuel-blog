import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { SEOJsonLd } from "@/components/seo-json-ld"
import Link from "next/link"
import Image from "next/image"
import { blogPosts } from "@/lib/blog-data"

export default function HomePage() {
  const latestPosts = blogPosts.slice(0, 6)
  const featuredPost = latestPosts[0]
  const recentPosts = latestPosts.slice(1, 7)
  const olderPosts = blogPosts.slice(7)

  return (
    <>
      <SEOJsonLd type="website" data={{}} />
      <SEOJsonLd type="person" data={{}} />
      <SEOJsonLd type="organization" data={{}} />

      <div className="min-h-screen bg-background">
        <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-6 flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-all duration-200 group">
              <div className="w-16 h-16 relative group-hover:scale-110 transition-transform duration-200 bg-background rounded-lg p-1.5 border border-muted/20 shadow-sm">
                <Image
                  src="/eoguguaLogo.png"
                  alt="CEOWRITES Logo"
                  fill
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 64px, 64px"
                  priority
                />
              </div>
              <div>
                <h1 className="font-bold text-2xl md:text-3xl bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
                  CEOWRITES
                </h1>
                <p className="text-sm text-muted-foreground font-medium flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  Enugu, Nigeria
                </p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-foreground hover:text-primary transition-colors font-medium">
                Home
              </Link>
              <Link
                href="/blog/category/technology"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Technology
              </Link>
              <Link
                href="/blog/category/business"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Business
              </Link>
              <Link href="/blog/category/faith" className="text-muted-foreground hover:text-primary transition-colors">
                Faith
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
            </nav>
          </div>
        </header>

        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
                Hello, I'm Emmanuel
              </h1>
              <p className="story-text text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                Welcome to my corner of the internet where I share stories about building technology, growing
                businesses, and living with purpose. I'm on a mission to create{" "}
                <span className="warm-accent">10,000 apps</span> while staying grounded in faith and community.
              </p>

              <div className="max-w-lg mx-auto mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                <h3 className="font-serif text-xl mb-4">Join the Journey</h3>
                <div className="flex gap-3">
                  <Input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 border-2 focus:border-primary"
                  />
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 hover:scale-105 transition-all duration-200 px-6">
                    Subscribe
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-3 font-sans">
                  Weekly stories and insights. No spam, just authentic sharing.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-12 mb-16">
              {/* Featured Story */}
              <div className="lg:col-span-2">
                <Card className="group hover:shadow-xl transition-all duration-500 border-0 shadow-lg overflow-hidden">
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <img 
                      src={featuredPost.imageUrl || '/blog-images/placeholder.jpg'} 
                      alt={featuredPost.imageAlt || featuredPost.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <Badge className="mb-3 bg-primary text-primary-foreground">Featured Story</Badge>
                    </div>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <Badge variant="outline" className="text-xs font-medium">
                        {featuredPost.category}
                      </Badge>
                      <span className="text-sm text-muted-foreground">{featuredPost.readTime}</span>
                    </div>
                    <CardTitle className="text-3xl font-serif font-bold mb-4 group-hover:text-primary transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>{featuredPost.title}</Link>
                    </CardTitle>
                    <CardDescription className="text-lg leading-relaxed font-sans">
                      {featuredPost.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-muted-foreground font-medium">{featuredPost.date}</span>
                      <Button variant="ghost" className="text-primary hover:text-primary/80 font-medium" asChild>
                        <Link href={`/blog/${featuredPost.slug}`}>
                          Read the full story
                          <span className="ml-2 group-hover:translate-x-1 transition-transform inline-block">→</span>
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Sidebar Stories */}
              <div className="space-y-8">
                <div>
                  <h3 className="font-serif text-2xl font-bold mb-6">Recent Stories</h3>
                  <div className="space-y-6">
                    {recentPosts.map((post) => (
                      <Card
                        key={post.slug}
                        className="group hover:shadow-lg transition-all duration-300 border-0 shadow-sm"
                      >
                        <div className="aspect-video relative overflow-hidden">
                          <img 
                            src={post.imageUrl || '/blog-images/placeholder.jpg'} 
                            alt={post.imageAlt || post.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />
                        </div>
                        <CardHeader className="p-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="secondary" className="text-xs">
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

                <Card className="bg-muted/50 border-0">
                  <CardHeader className="p-6">
                    <CardTitle className="font-serif text-xl">About Emmanuel</CardTitle>
                    <CardDescription className="story-text">
                      Tech entrepreneur, faith-driven builder, and storyteller sharing the journey of creating
                      meaningful technology while staying rooted in purpose.
                    </CardDescription>
                    <Button variant="outline" className="mt-4 w-full bg-transparent" asChild>
                      <Link href="/about">Learn more about me</Link>
                    </Button>
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
                Dive deeper into my thoughts on technology, business, and faith
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {olderPosts.map((post) => (
                <Card
                  key={post.slug}
                  className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 shadow-md overflow-hidden"
                >
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/20 via-accent/10 to-secondary/20" />
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
                        className="text-xs"
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
                      <span className="text-sm text-muted-foreground">{post.date}</span>
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

            <div className="text-center">
              <Button
                size="lg"
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                asChild
              >
                <Link href="/blog">
                  Explore all stories
                  <span className="ml-2">→</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <footer className="bg-primary text-primary-foreground py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-primary-foreground rounded-full flex items-center justify-center">
                    <span className="text-primary font-bold text-lg font-serif">E</span>
                  </div>
                  <div>
                    <h3 className="font-serif font-bold text-2xl">CEOWRITES</h3>
                    <p className="text-sm opacity-80 font-sans">Emmanuel's Stories & Insights</p>
                  </div>
                </div>
                <p className="story-text opacity-90 mb-6 max-w-md">
                  Thank you for joining me on this journey of building technology, growing businesses, and living with
                  purpose. Every story shared here comes from the heart.
                </p>
                <div className="flex space-x-6">
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110 duration-200 font-medium"
                  >
                    Twitter
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110 duration-200 font-medium"
                  >
                    LinkedIn
                  </a>
                  <a
                    href="#"
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors hover:scale-110 duration-200 font-medium"
                  >
                    GitHub
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Categories</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/blog/category/technology"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/business"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/faith"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Faith
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog/category/personal-journey"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Personal Journey
                    </Link>
                  </li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold mb-4">Connect</h4>
                <ul className="space-y-2 text-sm">
                  <li>
                    <Link
                      href="/about"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <a
                      href="mailto:emmanuel@ceowrites.com"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Contact
                    </a>
                  </li>
                  <li>
                    <a
                      href="#newsletter"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      Newsletter
                    </a>
                  </li>
                  <li>
                    <Link
                      href="/rss.xml"
                      className="opacity-80 hover:opacity-100 transition-opacity hover:translate-x-1 duration-200 inline-block"
                    >
                      RSS Feed
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
              <p className="font-sans opacity-80">
                &copy; 2024 CEOWRITES. Made with ❤️ and purpose.
                <span className="block mt-1 text-sm">Powered by stories, faith, and endless curiosity.</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
