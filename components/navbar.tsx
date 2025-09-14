import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <Image src="/images/logo.png" alt="Pooja Makeover Studio" width={50} height={50} className="rounded-lg" />
          <div>
            <h1 className="text-xl font-bold text-foreground">Pooja Makeover Studio</h1>
            <p className="text-sm text-muted-foreground">Beauty Redefined</p>
          </div>
        </div>
        <Button
          variant="outline"
          className="hidden md:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 bg-transparent"
        >
          Get Notified
        </Button>
      </div>
    </nav>
  )
}
