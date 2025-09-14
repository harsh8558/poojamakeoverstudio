"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { Sparkles, Heart, Star } from "lucide-react"

export function HeroSection() {
  const [email, setEmail] = useState("")
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setIsSubscribed(true)
      setEmail("")
      setTimeout(() => setIsSubscribed(false), 3000)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/20 via-background to-secondary/20"
        style={{
          backgroundImage: `url('/elegant-beauty-salon-interior-with-soft-lighting-a.jpg')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      />

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 animate-float">
        <Sparkles className="w-8 h-8 text-primary opacity-60" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "1s" }}>
        <Heart className="w-6 h-6 text-secondary opacity-60" />
      </div>
      <div className="absolute bottom-40 left-20 animate-float" style={{ animationDelay: "2s" }}>
        <Star className="w-7 h-7 text-accent opacity-60" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            Redefining Beauty,
            <br />
            One Makeover at a Time
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-2xl mx-auto">
            Professional bridal makeup, hair styling, and skincare services. Your dream look awaits at Pooja Makeover
            Studio.
          </p>

          <Card className="inline-block p-6 bg-card/80 backdrop-blur-sm border-primary/20 shadow-xl">
            <div className="mb-4">
              <h2 className="text-2xl font-semibold text-primary mb-2">Coming Soon</h2>
              <p className="text-muted-foreground">
                {"We're putting the finishing touches on something beautiful. Be the first to know when we launch!"}
              </p>
            </div>

            <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border-primary/30 focus:border-primary"
                required
              />
              <Button
                type="submit"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 transition-all duration-300 hover:scale-105"
                disabled={isSubscribed}
              >
                {isSubscribed ? "Subscribed!" : "Notify Me"}
              </Button>
            </form>

            {isSubscribed && (
              <p className="text-sm text-primary mt-3 animate-fade-in-up">
                ✨ Thank you! {"We'll"} notify you when we launch.
              </p>
            )}
          </Card>
        </div>
      </div>
    </section>
  )
}
