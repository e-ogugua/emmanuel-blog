import { blogPosts } from "@/lib/blog-data"

export async function GET() {
  const baseUrl = "https://ceowrites.com"

  const rssItems = blogPosts
    .slice(0, 20) // Latest 20 posts
    .map((post) => {
      return `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${baseUrl}/blog/${post.slug}</link>
      <guid isPermaLink="true">${baseUrl}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <category><![CDATA[${post.category}]]></category>
      <author>emmanuel@ceowrites.com (Emmanuel)</author>
    </item>`
    })
    .join("")

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>CEOWRITES – Emmanuel's Blog</title>
    <description>Insights on Technology, Business, and Faith by Emmanuel - Tech entrepreneur sharing wisdom on building apps, growing businesses, and living with purpose.</description>
    <link>${baseUrl}</link>
    <language>en-us</language>
    <managingEditor>emmanuel@ceowrites.com (Emmanuel)</managingEditor>
    <webMaster>emmanuel@ceowrites.com (Emmanuel)</webMaster>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/favicon.ico</url>
      <title>CEOWRITES – Emmanuel's Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${rssItems}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
    },
  })
}
