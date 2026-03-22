import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Mail } from "lucide-react";
import { motion } from "framer-motion";

const contactInfo = [
  { icon: Phone, label: "Téléphone", value: "01 23 45 67 89", href: "tel:+33123456789" },
  { icon: Mail, label: "Email", value: "contact@mecano-paris.fr", href: "mailto:contact@mecano-paris.fr" },
  { icon: MapPin, label: "Adresse", value: "42 Rue de la Mécanique, 75011 Paris", href: "https://maps.google.com" },
  { icon: Clock, label: "Horaires", value: "Lun–Ven : 8h–19h | Sam : 9h–17h", href: undefined },
];

const Contact = () => (
  <>
    <Navbar />
    <main>
      <section className="gradient-hero py-20 md:py-28">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">Contactez-nous</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Une question ? Besoin d'un devis ? N'hésitez pas à nous contacter.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-card rounded-2xl p-6 card-shadow border border-border/50 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <p className="font-heading font-semibold text-foreground mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm text-muted-foreground hover:text-secondary transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm text-muted-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Map placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-muted rounded-2xl h-80 flex items-center justify-center border border-border/50 mb-8"
          >
            <div className="text-center">
              <MapPin className="w-12 h-12 text-muted-foreground/40 mx-auto mb-3" />
              <p className="text-muted-foreground font-medium">42 Rue de la Mécanique, 75011 Paris</p>
              <Button variant="cta" size="sm" className="mt-4" asChild>
                <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer">
                  Voir sur Google Maps
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
    <Footer />
  </>
);

export default Contact;
