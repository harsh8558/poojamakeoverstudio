import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail, Instagram, Facebook, MessageCircle } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Ready to transform your look? Contact us to book your appointment or learn more about our services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-primary/20">
              <CardContent className="flex items-center space-x-4 pt-0">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">Coming Soon - Premium Location</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-secondary/20">
              <CardContent className="flex items-center space-x-4 pt-0">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground">+91 XXXXX XXXXX</p>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-lg transition-all duration-300 border-accent/20">
              <CardContent className="flex items-center space-x-4 pt-0">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground">info@poojamakeoverstudio.com</p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Map Placeholder & Social */}
          <div className="space-y-8">
            <Card className="p-6 h-64 bg-muted/30 border-dashed border-2 border-border flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground">Interactive Map Coming Soon</p>
              </div>
            </Card>

            <Card className="p-6">
              <CardContent className="pt-0">
                <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300 bg-transparent"
                  >
                    <Instagram className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all duration-300 bg-transparent"
                  >
                    <Facebook className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="hover:bg-accent hover:text-accent-foreground hover:border-accent transition-all duration-300 bg-transparent"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground mt-4">Stay updated with our latest work and beauty tips!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
