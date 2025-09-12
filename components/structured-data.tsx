interface StructuredDataProps {
  type: "article" | "website" | "person"
  data: any
}

export function StructuredData({ type, data }: StructuredDataProps) {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case "article":
        return {
          ...baseSchema,
          "@type": "Article",
          headline: data.title,
          description: data.excerpt,
          author: {
            "@type": "Person",
            name: "Emmanuel",
            url: "https://ceowrites.com/about",
          },
          publisher: {
            "@type": "Organization",
            name: "CEOWRITES",
            logo: {
              "@type": "ImageObject",
              url: "https://ceowrites.com/logo.png",
            },
          },
          datePublished: data.date,
          dateModified: data.date,
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ceowrites.com/blog/${data.slug}`,
          },
        }
      case "website":
        return {
          ...baseSchema,
          "@type": "WebSite",
          name: "CEOWRITES – Emmanuel's Blog",
          description: "Insights on Technology, Business, and Faith",
          url: "https://ceowrites.com",
          author: {
            "@type": "Person",
            name: "Emmanuel",
          },
        }
      case "person":
        return {
          ...baseSchema,
          "@type": "Person",
          name: "Emmanuel",
          jobTitle: "Tech Entrepreneur & Writer",
          description: "Tech entrepreneur and writer sharing insights on technology, business, and faith from Nigeria.",
          url: "https://ceowrites.com/about",
          sameAs: ["https://twitter.com/emmanuel", "https://linkedin.com/in/emmanuel", "https://github.com/emmanuel"],
        }
      default:
        return baseSchema
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateSchema()),
      }}
    />
  )
}
