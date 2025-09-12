"use client"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function BlogHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
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
              <p className="text-sm text-muted-foreground font-medium">Emmanuel's Blog</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/blog/category/technology"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              Technology
            </Link>
            <Link
              href="/blog/category/business"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              Business
            </Link>
            <Link
              href="/blog/category/faith"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              Faith
            </Link>
            <Link
              href="/about"
              className="text-muted-foreground hover:text-primary transition-all duration-200 hover:scale-105 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-200 hover:after:w-full"
            >
              About
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden hover:scale-110 transition-all duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5 rotate-90 transition-transform duration-200" />
            ) : (
              <Menu className="h-5 w-5 hover:rotate-90 transition-transform duration-200" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t animate-in slide-in-from-top-2 duration-300">
            <div className="flex flex-col space-y-3 pt-4">
              <Link
                href="/"
                className="text-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/blog/category/technology"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Technology
              </Link>
              <Link
                href="/blog/category/business"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Business
              </Link>
              <Link
                href="/blog/category/faith"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Faith
              </Link>
              <Link
                href="/about"
                className="text-muted-foreground hover:text-primary transition-all duration-200 hover:translate-x-2 py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
