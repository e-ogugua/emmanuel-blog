import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Lora } from "next/font/google"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"
import { Suspense } from "react"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  preload: true,
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ceowrites-emmanuel-blog-hub.vercel.app'),
  title: {
    default: "CEOWRITES – Emmanuel's Blog",
    template: "%s | CEOWRITES",
  },
  description:
    "Insights on Technology, Business, and Faith by Emmanuel - Tech entrepreneur sharing wisdom on building apps, growing businesses, and living with purpose.",
  keywords: [
    "technology",
    "business",
    "faith",
    "entrepreneurship",
    "app development",
    "startup",
    "Nigeria",
    "Emmanuel",
    "African tech",
    "Christian entrepreneur",
    "software development",
    "mobile apps",
    "blockchain",
    "AI",
    "digital transformation",
  ],
  authors: [{ name: "Emmanuel", url: "https://ceowrites.com/about" }],
  creator: "Emmanuel",
  publisher: "CEOWRITES",
  openGraph: {
    title: "CEOWRITES – Emmanuel's Blog",
    description:
      "Insights on Technology, Business, and Faith by Emmanuel - Tech entrepreneur sharing wisdom on building apps, growing businesses, and living with purpose.",
    url: "https://ceowrites.com",
    siteName: "CEOWRITES",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://ceowrites.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CEOWRITES – Emmanuel's Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CEOWRITES – Emmanuel's Blog",
    description: "Insights on Technology, Business, and Faith by Emmanuel",
    creator: "@emmanuel",
    images: ["https://ceowrites.com/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ceowrites.com",
    types: {
      "application/rss+xml": [{ url: "https://ceowrites.com/rss.xml", title: "CEOWRITES RSS Feed" }],
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  other: {
    "theme-color": "#059669",
    "color-scheme": "light dark",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "format-detection": "telephone=no",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${inter.variable} ${lora.variable} ${GeistMono.variable} font-sans antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
            {children}
            <ScrollToTop />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
