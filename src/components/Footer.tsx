import { Instagram, Mail } from "lucide-react";

const TikTokIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className="w-5 h-5"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const Footer = () => {
  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: Instagram,
    },
    {
      name: "TikTok",
      href: "https://tiktok.com",
      icon: TikTokIcon,
    },
    {
      name: "Email",
      href: "mailto:hello@thevisualfold.com",
      icon: Mail,
    },
  ];

  return (
    <footer className="py-16 md:py-20 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-8">
          {/* Social Links */}
          <div className="flex items-center gap-8">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                target={link.name !== "Email" ? "_blank" : undefined}
                rel={link.name !== "Email" ? "noopener noreferrer" : undefined}
                className="text-muted-foreground hover:text-foreground transition-colors duration-300 p-2 rounded-full hover:bg-accent/50"
                aria-label={link.name}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
          
          {/* Copyright */}
          <p className="font-body text-sm text-muted-foreground">
            © {new Date().getFullYear()} The Visual Fold. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
