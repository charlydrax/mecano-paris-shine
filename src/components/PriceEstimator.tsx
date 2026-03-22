import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const services = [
  { id: "vidange", label: "Vidange", min: 79, max: 149 },
  { id: "freins", label: "Plaquettes de frein", min: 120, max: 250 },
  { id: "pneus", label: "Changement pneus (x4)", min: 200, max: 600 },
  { id: "diagnostic", label: "Diagnostic complet", min: 49, max: 89 },
  { id: "clim", label: "Recharge climatisation", min: 89, max: 150 },
  { id: "distribution", label: "Kit de distribution", min: 450, max: 900 },
];

const PriceEstimator = () => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (id: string) => {
    setSelected((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const total = services
    .filter((s) => selected.includes(s.id))
    .reduce((acc, s) => ({ min: acc.min + s.min, max: acc.max + s.max }), { min: 0, max: 0 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50 max-w-2xl mx-auto"
    >
      <h3 className="font-heading font-bold text-xl mb-2 text-foreground">Estimateur de prix</h3>
      <p className="text-muted-foreground text-sm mb-6">Sélectionnez les services pour obtenir une estimation.</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
        {services.map((s) => (
          <button
            key={s.id}
            onClick={() => toggle(s.id)}
            className={`text-left p-4 rounded-xl border-2 transition-all duration-200 ${
              selected.includes(s.id)
                ? "border-secondary bg-secondary/10"
                : "border-border hover:border-secondary/40"
            }`}
          >
            <p className="font-medium text-sm text-foreground">{s.label}</p>
            <p className="text-xs text-muted-foreground">{s.min}€ – {s.max}€</p>
          </button>
        ))}
      </div>

      {selected.length > 0 && (
        <div className="bg-muted rounded-xl p-5 mb-6">
          <p className="text-sm text-muted-foreground mb-1">Estimation totale</p>
          <p className="font-heading text-2xl font-bold text-foreground">
            {total.min}€ – {total.max}€
          </p>
          <p className="text-xs text-muted-foreground mt-1">*Prix indicatifs, devis exact sur place</p>
        </div>
      )}

      <Button variant="cta" size="lg" asChild className="w-full">
        <Link to="/rendez-vous">
          {selected.length > 0 ? "Demander un devis précis" : "Prendre rendez-vous"}
        </Link>
      </Button>
    </motion.div>
  );
};

export default PriceEstimator;
