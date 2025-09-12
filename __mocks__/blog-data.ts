export const blogPosts = [
  {
    id: '1',
    title: 'Test Blog Post',
    excerpt: 'This is a test blog post',
    content: '# Test Blog Post\n\nThis is a test blog post content.',
    date: '2023-01-01',
    slug: 'test-blog-post',
    category: 'Technology',
    readTime: '5 min read',
    image: '/blog-images/technology/test.jpg',
    author: {
      name: 'Test Author',
      role: 'Software Engineer',
      image: '/test-author.jpg'
    }
  }
];

export function getBlogPostBySlug(slug: string) {
  return blogPosts.find(post => post.slug === slug) || null;
}

export function getBlogPostsByCategory(category: string) {
  return blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
}

export function getAllBlogPosts() {
  return [...blogPosts];
}
