import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { BlogHeader } from "@/components/blog/blog-header"
import { NewsletterSignup } from "@/components/blog/newsletter-signup"
import { SEOJsonLd } from "@/components/seo-json-ld"
import Image from "next/image"

export const metadata = {
  title: "About Emmanuel - CEOWRITES",
  description:
    "Learn about Emmanuel, tech entrepreneur and writer sharing insights on technology, business, and faith from Nigeria.",
  keywords: [
    "Emmanuel",
    "tech entrepreneur",
    "Nigeria",
    "software developer",
    "Christian business",
    "EmmanuelOS",
    "CEOTR Ltd",
    "PoshPOULE Farms",
  ],
  openGraph: {
    title: "About Emmanuel - CEOWRITES",
    description:
      "Learn about Emmanuel, tech entrepreneur and writer sharing insights on technology, business, and faith from Nigeria.",
    type: "profile",
    images: [
      {
        url: "/CEO.png",
        width: 1200,
        height: 1200,
        alt: "Emmanuel - Tech Entrepreneur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Emmanuel - CEOWRITES",
    description: "Tech entrepreneur and writer sharing insights on technology, business, and faith from Nigeria.",
    images: ["/CEO.png"],
  },
}

export default function AboutPage() {
  return (
    <>
      <SEOJsonLd type="person" data={{}} />

      <div className="min-h-screen bg-background">
        <BlogHeader />
        
        {/* Profile Picture Section */}
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col items-center text-center mb-12">
            <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-primary/20 relative">
              <Image 
                src="/CEO.png" 
                alt="Emmanuel" 
                fill
                className="object-cover"
                sizes="192px"
                priority
              />
            </div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-background via-muted/20 to-background">
          <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Hi, I'm Emmanuel</h1>
              <p className="story-text text-muted-foreground max-w-2xl mx-auto mb-6">
                Tech entrepreneur, writer, and farmer based in Enugu, Nigeria, on a mission to build 10,000 apps while sharing insights on
                technology, business, and faith.
              </p>
              <div className="flex justify-center space-x-4 mb-8">
                <a href="https://github.com/e-ogugua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">GitHub</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.699 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/emmanuelogugua" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://twitter.com/emmachuka" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">X (Twitter)</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
                  </svg>
                </a>
                <a href="mailto:e.ogugua.dev@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <span className="sr-only">Email</span>
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </a>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💻</span>
                  </div>
                  <CardTitle className="text-lg font-serif">Tech Entrepreneur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground">Based in Enugu, Nigeria</p>
                  <p className="text-sm text-muted-foreground">Building EmmanuelOS and working toward 10,000 apps</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">💼</span>
                  </div>
                  <CardTitle className="text-lg font-serif">Business Owner</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">Founder of CEOTR Ltd and PoshPOULE Farms</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <span className="text-2xl">❤️</span>
                  </div>
                  <CardTitle className="text-lg font-serif">Faith-Driven</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Integrating spiritual values with professional pursuits
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-8 text-center">My Story</h2>
            <div className="prose prose-lg max-w-none">
              <div className="space-y-6 text-foreground">
                <p className="story-text leading-relaxed text-pretty">
                  My journey began in Nigeria, where I discovered the power of technology to solve real-world problems.
                  What started as curiosity about how software works evolved into a passion for building applications
                  that make a meaningful difference in people's lives.
                </p>

                <p className="story-text leading-relaxed text-pretty">
                  The idea of building 10,000 apps isn't just about the number—it's about creating a comprehensive
                  ecosystem of tools that address every conceivable need in our digital world. Each app I build brings
                  me closer to understanding what people really need from technology.
                </p>

                <p className="story-text leading-relaxed text-pretty">
                  Beyond technology, I'm deeply involved in agriculture through PoshPOULE Farms, where we focus on
                  organic farming practices. This experience has taught me valuable lessons about patience,
                  sustainability, and the importance of building systems that can thrive over time—lessons that directly
                  influence how I approach software development.
                </p>

                <p className="story-text leading-relaxed text-pretty">
                  My faith plays a central role in everything I do. It guides my approach to business ethics, influences
                  the types of problems I choose to solve, and reminds me that technology should serve humanity, not the
                  other way around.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Current Projects */}
        <section className="py-16 px-4 bg-muted/30">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-serif font-bold mb-12 text-center">Current Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif">
                    <span className="text-2xl">🖥️</span>
                    EmmanuelOS
                  </CardTitle>
                  <CardDescription>
                    The operating system that will power my ecosystem of 10,000 applications
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    A unified platform that seamlessly integrates all applications, creating a cohesive user experience
                    across every digital tool you'll ever need.
                  </p>
                  <Badge variant="secondary">In Development</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif">
                    <span className="text-2xl">🏢</span>
                    CEOTR Ltd
                  </CardTitle>
                  <CardDescription>Technology solutions for businesses across Nigeria</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Building custom ERP systems, web applications, and digital solutions that help businesses operate
                    more efficiently and serve their customers better.
                  </p>
                  <Badge variant="outline">Active</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif">
                    <span className="text-2xl">🌱</span>
                    PoshPOULE Farms
                  </CardTitle>
                  <CardDescription>Organic farming with sustainable practices</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Demonstrating that agriculture and technology can work together to create sustainable, profitable
                    farming operations that benefit both farmers and consumers.
                  </p>
                  <Badge variant="default">Growing</Badge>
                </CardContent>
              </Card>

              <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 font-serif">
                    <span className="text-2xl">🚀</span>
                    10,000 Apps Journey
                  </CardTitle>
                  <CardDescription>Building a comprehensive ecosystem of applications</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                    Each application addresses specific needs while contributing to a larger vision of democratizing
                    technology and making powerful tools accessible to everyone.
                  </p>
                  <Badge variant="secondary">Ongoing</Badge>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-serif font-bold mb-8">Let's Connect</h2>
            <p className="story-text text-muted-foreground mb-8 max-w-2xl mx-auto">
              I'm always interested in connecting with fellow entrepreneurs, developers, and anyone passionate about
              using technology to make a positive impact.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <Button
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                asChild
              >
                <a href="mailto:emmanuel@ceowrites.com">📧 Email Me</a>
              </Button>
              <Button
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                asChild
              >
                <a href="https://twitter.com/emmachuka" target="_blank" rel="noopener noreferrer">
                  🐦 Twitter
                </a>
              </Button>
              <Button
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                asChild
              >
                <a href="https://linkedin.com/in/emmanuelogugua" target="_blank" rel="noopener noreferrer">
                  💼 LinkedIn
                </a>
              </Button>
              <Button
                variant="outline"
                className="hover:scale-105 transition-transform duration-200 bg-transparent"
                asChild
              >
                <a href="https://github.com/e-ogugua" target="_blank" rel="noopener noreferrer">
                  💻 GitHub
                </a>
              </Button>
            </div>

            <div className="flex items-center justify-center gap-2 text-muted-foreground">
              <span className="text-lg">📍</span>
              <span>Based in Nigeria</span>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </>
  )
}
