import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import { BlogHeader } from "@/components/blog/blog-header"
import { blogPosts, BlogPost } from "@/lib/blog-data"

// Pagination settings
const POSTS_PER_PAGE = 6;

export const metadata = {
  title: "Stories & Insights - CEOWRITES",
  description: "Personal stories and insights on Technology, Business, and Faith by Emmanuel",
}

// Generate static params for pagination
export async function generateStaticParams() {
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  return Array.from({ length: totalPages }, (_, i) => ({
    page: (i + 1).toString(),
  }));
}

interface BlogCardProps {
  post: BlogPost;
  isFeatured?: boolean;
}

const BlogCard = ({ post, isFeatured = false }: BlogCardProps) => (
  <Card key={post.slug} className={`overflow-hidden ${isFeatured ? 'border-2 border-primary' : ''}`}>
    <div className="relative h-64">
      <Image
        src={post.imageUrl}
        alt={post.imageAlt}
        fill
        className="object-cover"
        sizes={isFeatured ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 100vw, 33vw'}
        priority={isFeatured}
      />
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <Badge variant="secondary" className="mb-2">
          {post.category}
        </Badge>
        <h3 className="text-lg font-semibold text-white">
          <Link href={`/blog/${post.slug}`} className="hover:underline">
            {post.title}
          </Link>
        </h3>
      </div>
    </div>
    <CardContent className="p-4">
      <p className="text-muted-foreground line-clamp-2">{post.excerpt}</p>
      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
        <span>{post.date}</span>
        <span>{post.readTime}</span>
      </div>
    </CardContent>
  </Card>
);

export default function BlogPage({ params }: { params: { page?: string } }) {
  const currentPage = Number(params?.page) || 1;
  const categories = ["All", "Technology", "Business", "Faith", "Personal Journey"]
  
  // Calculate posts to show for current page
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE;
  const endIndex = startIndex + POSTS_PER_PAGE;
  const currentPosts = blogPosts.slice(startIndex, endIndex);
  const totalPages = Math.ceil(blogPosts.length / POSTS_PER_PAGE);
  
  // Only show featured post on first page
  const featuredPost = currentPage === 1 ? blogPosts[0] : null;
  const displayPosts = currentPage === 1 ? currentPosts.slice(1) : currentPosts;

  return (
    <div className="min-h-screen bg-background">
      <BlogHeader />

      <section className="py-12 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6 text-balance animate-in fade-in slide-in-from-bottom-4 duration-1000">
              Stories & Insights
            </h1>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
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
          </div>

          {/* Featured Post (only on first page) */}
          {currentPage === 1 && featuredPost && (
            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6">Featured Story</h2>
              <div className="group hover:shadow-2xl transition-all duration-500 rounded-lg overflow-hidden">
                <BlogCard post={featuredPost} isFeatured />
              </div>
            </div>
          )}

          {/* Category Filter */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">Browse by Category</h2>
            <div className="flex flex-wrap gap-3 justify-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-400">
              {categories.map((category) => (
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

          {/* Blog Posts Grid */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold mb-6">
              {currentPage === 1 ? 'Latest Stories' : `Page ${currentPage}`}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayPosts.map((post) => (
                <div key={post.slug} className="group hover:shadow-2xl transition-all duration-300 rounded-lg overflow-hidden">
                  <BlogCard post={post} />
                </div>
              ))}
            </div>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center gap-2 mt-8">
              {currentPage > 1 && (
                <Link href={`/blog/page/${currentPage - 1}`} passHref>
                  <Button variant="outline">Previous</Button>
                </Link>
              )}
              
              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <Link key={page} href={`/blog/page/${page}`} passHref>
                  <Button
                    variant={page === currentPage ? 'default' : 'outline'}
                    className="min-w-[40px]"
                  >
                    {page}
                  </Button>
                </Link>
              ))}
              
              {currentPage < totalPages && (
                <Link href={`/blog/page/${currentPage + 1}`} passHref>
                  <Button variant="outline">Next</Button>
                </Link>
              )}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
