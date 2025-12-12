import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

// Import portfolio images
import portfolio1 from "@/assets/portfolio-1.jpg";
import portfolio2 from "@/assets/portfolio-2.jpg";
import portfolio3 from "@/assets/portfolio-3.jpg";
import portfolio4 from "@/assets/portfolio-4.jpg";
import portfolio5 from "@/assets/portfolio-5.jpg";
import portfolio6 from "@/assets/portfolio-6.jpg";
import portfolio7 from "@/assets/portfolio-7.jpg";
import portfolio8 from "@/assets/portfolio-8.jpg";
import portfolio9 from "@/assets/portfolio-9.jpg";
import portfolio10 from "@/assets/portfolio-10.jpg";

const PortfolioSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    skipSnaps: false,
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  // Portfolio images - you can replace these with your own
  const portfolioImages = [
    { id: 1, src: portfolio1, alt: "Proyecto de branding y packaging" },
    { id: 2, src: portfolio2, alt: "Diseño web moderno" },
    { id: 3, src: portfolio3, alt: "Identidad corporativa" },
    { id: 4, src: portfolio4, alt: "Diseño editorial" },
    { id: 5, src: portfolio5, alt: "Contenido para redes sociales" },
    { id: 6, src: portfolio6, alt: "Fotografía de moda" },
    { id: 7, src: portfolio7, alt: "Fotografía de interiores" },
    { id: 8, src: portfolio8, alt: "Dirección de arte" },
    { id: 9, src: portfolio9, alt: "Diseño de portada" },
    { id: 10, src: portfolio10, alt: "Diseño de packaging premium" },
  ];

  return (
    <section className="py-24 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6 mb-12">
        <h2 className="font-display text-3xl md:text-4xl font-medium text-foreground text-center tracking-tight">
          Portfolio
        </h2>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        {/* Carousel */}
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-6">
            {portfolioImages.map((image, index) => (
              <div 
                key={image.id} 
                className="flex-none w-[85%] md:w-[60%] lg:w-[45%]"
              >
                <div 
                  className={`aspect-[4/3] bg-card rounded-lg overflow-hidden shadow-sm transition-all duration-500 ${
                    selectedIndex === index 
                      ? 'scale-100 opacity-100' 
                      : 'scale-95 opacity-60'
                  }`}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            className="rounded-full w-12 h-12 border-border/60 hover:border-foreground/40 transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          
          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            disabled={!canScrollNext}
            className="rounded-full w-12 h-12 border-border/60 hover:border-foreground/40 transition-all"
            aria-label="Siguiente"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {portfolioImages.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                selectedIndex === index 
                  ? 'bg-foreground w-6' 
                  : 'bg-foreground/20 hover:bg-foreground/40'
              }`}
              aria-label={`Ir a imagen ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;