import { Heart } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Pooja Makeover Studio</h3>
          <p className="text-muted-foreground mb-6 max-w-md mx-auto">
            Redefining beauty, one makeover at a time. Your journey to stunning looks begins here.
          </p>

          <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-primary fill-current" />
            <span>for beautiful transformations</span>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">© 2024 Pooja Makeover Studio. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
