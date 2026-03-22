import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Star, ShieldCheck, FileText } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/hero-garage.jpg";

const trustItems = [
  { icon: Star, label: "4.9/5 sur Google", sublabel: "250+ avis" },
  { icon: ShieldCheck, label: "Toutes marques", sublabel: "Certifié" },
  { icon: FileText, label: "Devis gratuit", sublabel: "Sans engagement" },
];

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImage} alt="Garage Mecano Paris - mécanicien professionnel" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-primary/80" />
    </div>

    <div className="relative section-container w-full py-20 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-2xl"
      >
        <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
          Votre mécanicien de{" "}
          <span className="text-secondary">confiance</span>{" "}
          à Paris
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 max-w-lg leading-relaxed">
          Service rapide, tarifs transparents, toutes marques. Prenez rendez-vous en ligne ou appelez-nous directement.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 mb-12">
          <Button variant="hero" size="xl" asChild>
            <Link to="/rendez-vous">Prendre rendez-vous</Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="tel:+33123456789" className="gap-2">
              <Phone className="w-5 h-5" />
              Appeler maintenant
            </a>
          </Button>
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-wrap gap-6"
        >
          {trustItems.map((item) => (
            <div key={item.label} className="flex items-center gap-3 bg-primary-foreground/10 backdrop-blur-sm rounded-xl px-4 py-3">
              <item.icon className="w-5 h-5 text-secondary" />
              <div>
                <p className="text-sm font-semibold text-primary-foreground">{item.label}</p>
                <p className="text-xs text-primary-foreground/60">{item.sublabel}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
