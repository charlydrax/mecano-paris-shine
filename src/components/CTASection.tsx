import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";
import { motion } from "framer-motion";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

const CTASection = ({
  title = "Besoin d'un mécanicien ?",
  subtitle = "Prenez rendez-vous en ligne ou appelez-nous. Devis gratuit et sans engagement.",
}: CTASectionProps) => (
  <section className="gradient-hero">
    <div className="section-container section-padding text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">{title}</h2>
        <p className="text-primary-foreground/70 text-lg mb-8 max-w-xl mx-auto">{subtitle}</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="xl" asChild>
            <Link to="/rendez-vous">Prendre rendez-vous</Link>
          </Button>
          <Button variant="hero-outline" size="xl" asChild>
            <a href="tel:+33123456789" className="gap-2">
              <Phone className="w-5 h-5" />
              01 23 45 67 89
            </a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default CTASection;
