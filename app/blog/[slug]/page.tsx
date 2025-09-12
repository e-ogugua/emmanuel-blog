import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { blogPosts } from "@/lib/blog-data"
import { BlogContent } from "@/components/blog/blog-content"
import { RelatedPosts } from "@/components/blog/related-posts"
import { NewsletterSignup } from "@/components/blog/newsletter-signup"
import { StructuredData } from "@/components/structured-data"

interface BlogPostPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    return {
      title: "Story Not Found - CEOWRITES",
    }
  }

  return {
    title: `${post.title}`,
    description: post.excerpt,
    keywords: [post.category, "Emmanuel", "CEOWRITES", "technology", "business", "faith"],
    authors: [{ name: "Emmanuel", url: "https://ceowrites.com/about" }],
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: new Date(post.date).toISOString(),
      modifiedTime: new Date(post.date).toISOString(),
      authors: ["Emmanuel"],
      section: post.category,
      tags: [post.category],
      images: [
        {
          url: `https://ceowrites.com/blog/${post.slug}/og-image.jpg`,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      creator: "@emmanuel",
      images: [`https://ceowrites.com/blog/${post.slug}/og-image.jpg`],
    },
    alternates: {
      canonical: `https://ceowrites.com/blog/${post.slug}`,
    },
  }
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = blogPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== post.slug && p.category === post.category).slice(0, 3)

  return (
    <>
      <StructuredData type="article" data={post} />

      <div className="min-h-screen bg-background">
        <BlogHeader />

        <article className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            {/* Back Button */}
            <Button
              variant="ghost"
              asChild
              className="mb-8 hover:scale-105 hover:bg-muted/50 transition-all duration-200 group"
            >
              <Link href="/blog">
                <span className="mr-2 group-hover:-translate-x-1 transition-transform inline-block">←</span>
                Back to Stories
              </Link>
            </Button>

            <div className="mb-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="flex items-center gap-3 mb-6">
                <Badge
                  variant={
                    post.category === "Technology" ? "default" : post.category === "Business" ? "secondary" : "outline"
                  }
                  className="font-medium"
                >
                  {post.category}
                </Badge>
                <span className="text-sm text-muted-foreground">📅 {post.date}</span>
                <span className="text-sm text-muted-foreground">⏱️ {post.readTime}</span>
              </div>

              {/* Featured Image */}
              <div className="mb-10 rounded-xl overflow-hidden shadow-lg animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                <div className="relative w-full h-96 md:h-[500px]">
                <Image
                  src={post.imageUrl || "/blog-images/placeholder.svg"}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = "/blog-images/placeholder.svg";
                  }}
                />
              </div>
              </div>

              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
                {post.title}
              </h1>

              <p className="story-text text-muted-foreground mb-8 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
                <div className="flex items-center gap-4 group">
                  <div className="w-16 h-16 bg-primary rounded-full overflow-hidden flex items-center justify-center group-hover:scale-110 transition-transform duration-200 ring-2 ring-primary/20">
                    <Image
                      src="/CEO.png"
                      alt="Emmanuel"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-serif font-bold text-lg">Emmanuel</p>
                    <p className="text-sm text-muted-foreground">Tech Entrepreneur & Storyteller</p>
                    <p className="text-xs text-muted-foreground flex items-center gap-1">
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      Enugu, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 hover:bg-primary hover:text-primary-foreground transition-all duration-200 bg-transparent"
                  >
                    📤 Share
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 hover:bg-red-500 hover:text-white transition-all duration-200 bg-transparent"
                  >
                    ❤️ Like
                  </Button>
                </div>
              </div>
            </div>

            <div className="animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
              <BlogContent content={post.content} />
            </div>

            <div className="border-t pt-8 mt-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-600">
              <div className="text-center">
                <p className="story-text text-muted-foreground mb-6">
                  Thank you for reading this story. If it resonated with you, I'd love to hear your thoughts.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 hover:bg-red-500 hover:text-white transition-all duration-200 bg-transparent"
                  >
                    ❤️ 42 Likes
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 hover:bg-blue-500 hover:text-white transition-all duration-200 bg-transparent"
                  >
                    💬 12 Comments
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    className="hover:scale-105 hover:bg-green-500 hover:text-white transition-all duration-200 bg-transparent"
                  >
                    📤 Share Story
                  </Button>
                </div>
              </div>
            </div>

            <div className="bg-muted/50 rounded-xl p-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-foreground font-bold font-serif">E</span>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-lg mb-2">A note from Emmanuel</h3>
                  <p className="story-text text-muted-foreground mb-4">
                    I hope this story added value to your day. I'm always learning and growing, and I love connecting
                    with fellow builders, dreamers, and believers. Feel free to reach out if you'd like to continue the
                    conversation.
                  </p>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/about">Learn more about me</Link>
                    </Button>
                    <Button variant="outline" size="sm">
                      📧 Get in touch
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Newsletter Signup */}
        <NewsletterSignup />

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </div>
    </>
  )
}
