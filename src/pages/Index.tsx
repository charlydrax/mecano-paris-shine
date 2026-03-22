import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import PriceEstimator from "@/components/PriceEstimator";
import { Droplets, Disc, Circle, Search, Wind, CheckCircle, Clock, Award } from "lucide-react";
import { motion } from "framer-motion";

const servicesPreview = [
  { icon: Droplets, title: "Vidange", description: "Changement d'huile et filtres pour maintenir votre moteur en parfait état.", price: "79€" },
  { icon: Disc, title: "Freins", description: "Remplacement de plaquettes, disques et contrôle du système de freinage.", price: "120€" },
  { icon: Circle, title: "Pneus", description: "Montage, équilibrage et alignement pour une conduite sûre.", price: "200€" },
  { icon: Search, title: "Diagnostic", description: "Diagnostic électronique complet pour identifier tout problème.", price: "49€" },
  { icon: Wind, title: "Climatisation", description: "Recharge et entretien du système de climatisation.", price: "89€" },
];

const whyUs = [
  { icon: CheckCircle, title: "Tarifs transparents", desc: "Pas de surprise. Vous connaissez le prix avant l'intervention." },
  { icon: Clock, title: "Service rapide", desc: "Intervention en 24h pour la plupart des services courants." },
  { icon: Award, title: "Mécaniciens certifiés", desc: "Une équipe expérimentée et formée sur toutes les marques." },
];

const testimonials = [
  { name: "Marie L.", text: "Service impeccable ! Ma voiture était prête le jour même. Prix très correct et équipe sympa.", rating: 5, car: "Peugeot 308" },
  { name: "Thomas D.", text: "Enfin un garage transparent sur les prix. Je recommande à 100% pour toute réparation.", rating: 5, car: "Renault Clio" },
  { name: "Sophie M.", text: "Diagnostic rapide et précis. Ils m'ont évité une réparation inutile. Honnêteté appréciée.", rating: 5, car: "BMW Série 3" },
];

const Index = () => (
  <>
    <Navbar />
    <main>
      <HeroSection />

      {/* Services Preview */}
      <section className="section-padding bg-background" id="services">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Nos services</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Entretien et réparation toutes marques, avec des tarifs transparents.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesPreview.map((s, i) => (
              <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} price={s.price} delay={i * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Pourquoi choisir Mecano ?</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {whyUs.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center mx-auto mb-5">
                  <item.icon className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Estimator */}
      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Estimez votre budget</h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Sélectionnez vos besoins pour une estimation rapide.
            </p>
          </motion.div>
          <PriceEstimator />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/50">
        <div className="section-container">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">Ce que disent nos clients</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </main>
    <Footer />
  </>
);

export default Index;
