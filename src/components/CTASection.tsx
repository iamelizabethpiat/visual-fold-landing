import { Button } from "@/components/ui/button";
import { Calendar } from "lucide-react";

const CTASection = () => {
  const handleScheduleClick = () => {
    // Replace with your actual Google Calendar/Meet scheduling link
    window.open('https://calendar.google.com', '_blank');
  };

  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 text-center">
        <h2 
          className="font-display text-4xl md:text-5xl lg:text-6xl font-medium text-cta-blue mb-12 tracking-tight"
        >
          ¿Creamos juntos?
        </h2>
        
        <Button 
          variant="cta" 
          size="lg"
          onClick={handleScheduleClick}
          className="group h-14 px-10"
        >
          <Calendar className="w-4 h-4 mr-2 transition-transform group-hover:scale-110" />
          Agendar reunión
        </Button>
      </div>
    </section>
  );
};

export default CTASection;
