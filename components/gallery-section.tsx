export function GallerySection() {
  const galleryImages = [
    {
      src: "/bridal-makeup-before-after-transformation.jpg",
      alt: "Bridal Makeup Transformation",
      title: "Bridal Elegance",
    },
    {
      src: "/hair-styling-elegant-updo-wedding.jpg",
      alt: "Hair Styling",
      title: "Hair Artistry",
    },
    {
      src: "/skincare-facial-glowing-skin.jpg",
      alt: "Skincare Treatment",
      title: "Glowing Skin",
    },
    {
      src: "/party-makeup-glamorous-look.jpg",
      alt: "Party Makeup",
      title: "Glamour Look",
    },
    {
      src: "/traditional-indian-bridal-makeup.jpg",
      alt: "Traditional Bridal Look",
      title: "Traditional Beauty",
    },
    {
      src: "/modern-hair-color-styling.jpg",
      alt: "Hair Color & Style",
      title: "Modern Styling",
    },
  ]

  return (
    <section id="gallery" className="py-20 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Our Work</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Take a glimpse at some of our beautiful transformations and artistic creations.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-[3/4] hover:shadow-xl transition-all duration-500"
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                <h3 className="font-semibold text-lg">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
