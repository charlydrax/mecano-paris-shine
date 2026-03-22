import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import ServiceCard from "@/components/ServiceCard";
import { Droplets, Disc, Circle, Search, Wind, Settings } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { icon: Droplets, title: "Vidange", description: "Changement d'huile moteur, filtre à huile, filtre à air et filtre d'habitacle. Nous utilisons des huiles de qualité adaptées à votre véhicule.", price: "79€" },
  { icon: Disc, title: "Freins", description: "Remplacement des plaquettes et disques de frein, purge du liquide de frein. Contrôle complet du système de freinage.", price: "120€" },
  { icon: Circle, title: "Pneus", description: "Montage, démontage, équilibrage et géométrie. Large choix de marques pour tous budgets.", price: "200€" },
  { icon: Search, title: "Diagnostic électronique", description: "Lecture des codes défauts, analyse complète des systèmes électroniques de votre véhicule avec outils professionnels.", price: "49€" },
  { icon: Wind, title: "Climatisation", description: "Recharge de gaz, contrôle d'étanchéité, nettoyage du circuit. Retrouvez un habitacle frais en toute saison.", price: "89€" },
  { icon: Settings, title: "Kit de distribution", description: "Remplacement de la courroie de distribution, galets et pompe à eau. Intervention essentielle pour la longévité du moteur.", price: "450€" },
];

const Services = () => (
  <>
    <Navbar />
    <main>
      <section className="gradient-hero py-20 md:py-28">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Nos services</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Entretien et réparation automobile toutes marques à Paris.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <ServiceCard key={s.title} {...s} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default Services;
