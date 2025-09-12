interface SEOJsonLdProps {
  type: "website" | "article" | "person" | "organization"
  data: any
}

export function SEOJsonLd({ type, data }: SEOJsonLdProps) {
  const getStructuredData = () => {
    const baseData = {
      "@context": "https://schema.org",
    }

    switch (type) {
      case "website":
        return {
          ...baseData,
          "@type": "WebSite",
          name: "CEOWRITES",
          alternateName: "Emmanuel's Blog",
          url: "https://ceowrites.com",
          description: "Insights on Technology, Business, and Faith by Emmanuel",
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
          potentialAction: {
            "@type": "SearchAction",
            target: "https://ceowrites.com/blog?search={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }

      case "article":
        return {
          ...baseData,
          "@type": "BlogPosting",
          headline: data.title,
          description: data.excerpt,
          image: `https://ceowrites.com/blog/${data.slug}/og-image.jpg`,
          datePublished: new Date(data.date).toISOString(),
          dateModified: new Date(data.date).toISOString(),
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
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": `https://ceowrites.com/blog/${data.slug}`,
          },
          articleSection: data.category,
          keywords: data.category,
          wordCount: data.content?.length || 0,
          timeRequired: data.readTime,
        }

      case "person":
        return {
          ...baseData,
          "@type": "Person",
          name: "Emmanuel",
          alternateName: "Emmanuel CEO",
          description:
            "Tech entrepreneur, software developer, and Christian business leader sharing insights on technology, business, and faith.",
          url: "https://ceowrites.com/about",
          image: "https://ceowrites.com/emmanuel-photo.jpg",
          sameAs: ["https://twitter.com/emmanuel", "https://linkedin.com/in/emmanuel", "https://github.com/emmanuel"],
          jobTitle: "Tech Entrepreneur & Software Developer",
          worksFor: {
            "@type": "Organization",
            name: "CEOWRITES",
          },
          knowsAbout: [
            "Software Development",
            "Entrepreneurship",
            "Mobile App Development",
            "Blockchain Technology",
            "Artificial Intelligence",
            "Christian Business Ethics",
          ],
        }

      case "organization":
        return {
          ...baseData,
          "@type": "Organization",
          name: "CEOWRITES",
          alternateName: "Emmanuel's Blog",
          url: "https://ceowrites.com",
          logo: "https://ceowrites.com/logo.png",
          description: "Technology blog and business insights by Emmanuel",
          founder: {
            "@type": "Person",
            name: "Emmanuel",
          },
          sameAs: ["https://twitter.com/ceowrites", "https://linkedin.com/company/ceowrites"],
        }

      default:
        return baseData
    }
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(getStructuredData()),
      }}
    />
  )
}
