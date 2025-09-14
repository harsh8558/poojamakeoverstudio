import { Card, CardContent } from "@/components/ui/card"
import { Sparkles, Users, Award } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Pooja Makeover Studio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            With years of expertise in beauty and styling, we specialize in creating stunning looks that enhance your
            natural beauty and make every moment unforgettable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-primary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Expert Artistry</h3>
              <p className="text-muted-foreground">
                Professional makeup techniques and styling expertise to bring out your best features.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-secondary/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Personalized Service</h3>
              <p className="text-muted-foreground">
                Tailored beauty solutions that match your unique style and personality.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border-accent/20">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Premium Quality</h3>
              <p className="text-muted-foreground">
                Using only the finest products and techniques for lasting, beautiful results.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
