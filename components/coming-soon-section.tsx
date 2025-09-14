"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Instagram, Phone, MapPin } from "lucide-react"
import Image from "next/image"

export function ComingSoonSection() {
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubmitted(true)
      setEmail("")
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background flex items-center justify-center p-4">
      <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="relative w-48 h-48 md:w-64 md:h-64 animate-float">
            <Image src="/images/logo.png" alt="Pooja Makeover Studio" fill className="object-contain" priority />
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-primary leading-tight">
            Coming Soon
          </h1>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-heading font-medium text-foreground">Pooja Makeover Studio</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Your premier destination for bridal makeup, hair styling, and beauty transformations. We're crafting
              something beautiful just for you.
            </p>
          </div>

          {/* Services Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 mb-12">
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💄</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Bridal Makeup</h3>
              <p className="text-muted-foreground text-sm">Professional bridal makeup for your special day</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Hair Styling</h3>
              <p className="text-muted-foreground text-sm">Expert hair styling and treatments</p>
            </div>

            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 hover:border-primary/30 transition-all duration-300">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-heading font-semibold text-lg mb-2">Skincare</h3>
              <p className="text-muted-foreground text-sm">Rejuvenating skincare and beauty treatments</p>
            </div>
          </div>

          {/* Email Subscription */}
          <div className="bg-card/30 backdrop-blur-sm rounded-2xl p-8 border border-border/50 max-w-md mx-auto">
            <h3 className="font-heading font-semibold text-xl mb-4">Get Notified</h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know when we launch and receive exclusive offers.
            </p>

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-background/50 border-border/50 focus:border-primary"
                    required
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6">
                    <Mail className="w-4 h-4 mr-2" />
                    Notify Me
                  </Button>
                </div>
              </form>
            ) : (
              <div className="text-center py-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-green-600 text-xl">✓</span>
                </div>
                <p className="text-green-600 font-medium">Thank you! We'll notify you soon.</p>
              </div>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-wrap justify-center gap-6 mt-12 text-muted-foreground">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span className="text-sm">info@poojamakeoverstudio.com</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm">Mumbai, India</span>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/50 hover:border-primary/50 bg-transparent"
            >
              <Instagram className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="rounded-full border-border/50 hover:border-primary/50 bg-transparent"
            >
              <Mail className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 pt-8 border-t border-border/30">
          <p className="text-muted-foreground text-sm">© 2024 Pooja Makeover Studio. All rights reserved.</p>
        </div>
      </div>
    </div>
  )
}
