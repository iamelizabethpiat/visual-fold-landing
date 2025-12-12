import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Send, Check } from "lucide-react";

const emailSchema = z.object({
  email: z
    .string()
    .min(1, { message: "El email es requerido" })
    .email({ message: "Por favor, introduce un email válido" }),
});

type EmailFormData = z.infer<typeof emailSchema>;

const EmailSection = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<EmailFormData>({
    resolver: zodResolver(emailSchema),
  });

  const onSubmit = async (data: EmailFormData) => {
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    setIsSubmitted(true);
    toast({
      title: "¡Gracias por contactarnos!",
      description: "Nos pondremos en contacto contigo pronto.",
    });
    
    setTimeout(() => {
      setIsSubmitted(false);
      reset();
    }, 3000);
  };

  return (
    <section className="py-32 md:py-40 bg-background">
      <div className="container mx-auto px-6 max-w-2xl text-center">
        <p className="font-body text-lg md:text-xl text-foreground/80 leading-relaxed mb-12">
          Necesitas que tu marca refleje y conecte. Deja tu correo electrónico y yo me pongo en contacto contigo.
        </p>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <div className="flex-1 max-w-md">
              <Input
                type="email"
                placeholder="tu@email.com"
                {...register("email")}
                className={`text-center sm:text-left ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                disabled={isSubmitting || isSubmitted}
              />
              {errors.email && (
                <p className="text-sm text-destructive mt-2 text-left">
                  {errors.email.message}
                </p>
              )}
            </div>
            
            <Button
              type="submit"
              variant="default"
              size="lg"
              disabled={isSubmitting || isSubmitted}
              className="bg-deep-charcoal text-warm-white hover:bg-foreground/90 tracking-wide uppercase text-xs font-medium min-w-[140px]"
            >
              {isSubmitted ? (
                <>
                  <Check className="w-4 h-4 mr-2" />
                  Enviado
                </>
              ) : isSubmitting ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Enviando
                </span>
              ) : (
                <>
                  <Send className="w-4 h-4 mr-2" />
                  Enviar
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EmailSection;
