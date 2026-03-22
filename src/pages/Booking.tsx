import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { CheckCircle, Calendar } from "lucide-react";

const serviceOptions = [
  "Vidange",
  "Freins",
  "Pneus",
  "Diagnostic",
  "Climatisation",
  "Distribution",
  "Autre",
];

const Booking = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    date: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const update = (field: string, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  if (submitted) {
    return (
      <>
        <Navbar />
        <main className="section-padding bg-background">
          <div className="section-container text-center max-w-lg mx-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h1 className="font-heading text-3xl font-bold text-foreground mb-4">Demande envoyée !</h1>
              <p className="text-muted-foreground">
                Merci {form.name}. Nous vous recontacterons rapidement pour confirmer votre rendez-vous.
              </p>
            </motion.div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main>
        <section className="gradient-hero py-20 md:py-28">
          <div className="section-container text-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">
                Prendre rendez-vous
              </h1>
              <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
                Remplissez le formulaire et nous vous recontactons sous 2h.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="section-padding bg-background">
          <div className="section-container max-w-xl mx-auto">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              onSubmit={handleSubmit}
              className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50 space-y-5"
            >
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Nom complet</label>
                <Input
                  required
                  placeholder="Jean Dupont"
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Téléphone</label>
                <Input
                  required
                  type="tel"
                  placeholder="06 12 34 56 78"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Modèle du véhicule</label>
                <Input
                  required
                  placeholder="Ex: Peugeot 308, 2019"
                  value={form.car}
                  onChange={(e) => update("car", e.target.value)}
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Service souhaité</label>
                <select
                  required
                  value={form.service}
                  onChange={(e) => update("service", e.target.value)}
                  className="w-full h-10 rounded-lg border border-input bg-background px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                >
                  <option value="">Sélectionnez un service</option>
                  {serviceOptions.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Date souhaitée</label>
                <Input
                  required
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                />
              </div>
              <Button variant="cta" size="lg" type="submit" className="w-full gap-2">
                <Calendar className="w-5 h-5" />
                Confirmer le rendez-vous
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                En soumettant ce formulaire, vous acceptez d'être recontacté par notre équipe.
              </p>
            </motion.form>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Booking;
