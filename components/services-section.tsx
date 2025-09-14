import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Crown, Scissors, Sparkles } from "lucide-react"

export function ServicesSection() {
  const services = [
    {
      icon: Crown,
      title: "Bridal Makeup",
      description:
        "Complete bridal transformation with traditional and contemporary looks that make your special day unforgettable.",
      image: "/beautiful-bridal-makeup-elegant-bride.jpg",
      color: "primary",
    },
    {
      icon: Scissors,
      title: "Hair Styling",
      description:
        "Professional hair styling services including cuts, colors, treatments, and special occasion styling.",
      image: "/professional-hair-styling-salon-elegant.jpg",
      color: "secondary",
    },
    {
      icon: Sparkles,
      title: "Skincare",
      description: "Rejuvenating skincare treatments and facials to give you that natural, healthy glow.",
      image: "/skincare-facial-treatment-spa-relaxing.jpg",
      color: "accent",
    },
  ]

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Discover our range of professional beauty services designed to enhance your natural beauty.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="overflow-hidden hover:shadow-xl transition-all duration-500 hover:-translate-y-3 group border-border/50"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div
                  className={`absolute top-4 left-4 w-12 h-12 bg-${service.color}/90 rounded-full flex items-center justify-center`}
                >
                  <service.icon className="w-6 h-6 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-pretty">{service.description}</p>
                <Button
                  variant="outline"
                  className={`w-full border-${service.color} text-${service.color} hover:bg-${service.color} hover:text-white transition-all duration-300`}
                >
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
