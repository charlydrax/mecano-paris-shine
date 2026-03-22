import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import PriceEstimator from "@/components/PriceEstimator";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const pricingData = [
  { service: "Vidange (huile + filtres)", price: "À partir de 79€" },
  { service: "Plaquettes de frein (avant)", price: "À partir de 120€" },
  { service: "Disques + plaquettes (avant)", price: "À partir de 220€" },
  { service: "Changement pneus (x4)", price: "À partir de 200€" },
  { service: "Diagnostic électronique", price: "À partir de 49€" },
  { service: "Recharge climatisation", price: "À partir de 89€" },
  { service: "Kit de distribution", price: "À partir de 450€" },
  { service: "Remplacement batterie", price: "À partir de 150€" },
  { service: "Géométrie / parallélisme", price: "À partir de 69€" },
];

const Pricing = () => (
  <>
    <Navbar />
    <main>
      <section className="gradient-hero py-20 md:py-28">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Tarifs transparents</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Chez Mecano, pas de surprises. Consultez nos tarifs indicatifs.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden max-w-3xl mx-auto mb-16"
          >
            <div className="p-6 md:p-8 bg-primary">
              <h2 className="font-heading text-2xl font-bold text-primary-foreground">Grille tarifaire</h2>
              <p className="text-primary-foreground/70 text-sm mt-1">Prix indicatifs TTC, variables selon le véhicule</p>
            </div>
            <div className="divide-y divide-border">
              {pricingData.map((item) => (
                <div key={item.service} className="flex items-center justify-between px-6 md:px-8 py-4 hover:bg-muted/30 transition-colors">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-sm text-foreground">{item.service}</span>
                  </div>
                  <span className="text-sm font-semibold text-foreground whitespace-nowrap ml-4">{item.price}</span>
                </div>
              ))}
            </div>
            <div className="p-6 md:p-8 bg-muted/30">
              <p className="text-xs text-muted-foreground">
                * Les prix sont donnés à titre indicatif et peuvent varier selon le modèle, l'année et l'état du véhicule.
                Un devis précis vous sera remis avant toute intervention.
              </p>
            </div>
          </motion.div>

          <PriceEstimator />
        </div>
      </section>

      <CTASection title="Un doute sur le prix ?" subtitle="Contactez-nous pour un devis gratuit et sans engagement." />
    </main>
    <Footer />
  </>
);

export default Pricing;
