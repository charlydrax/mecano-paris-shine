import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import { motion } from "framer-motion";
import { Award, Users, Wrench, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: "15+", label: "Années d'expérience" },
  { icon: Users, value: "5000+", label: "Clients satisfaits" },
  { icon: Wrench, value: "12000+", label: "Véhicules réparés" },
  { icon: Award, value: "4.9/5", label: "Note Google" },
];

const About = () => (
  <>
    <Navbar />
    <main>
      <section className="gradient-hero py-20 md:py-28">
        <div className="section-container text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="font-heading text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4">À propos de Mecano</h1>
            <p className="text-primary-foreground/70 text-lg max-w-xl mx-auto">
              Un garage parisien moderne, fondé sur la confiance et la transparence.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="section-padding bg-background">
        <div className="section-container max-w-4xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6 mb-16">
            <h2 className="font-heading text-3xl font-bold text-foreground">Notre histoire</h2>
            <p className="text-muted-foreground leading-relaxed">
              Fondé en 2010 au cœur du 11e arrondissement de Paris, Mecano est né d'une frustration simple : pourquoi est-il si difficile de trouver un mécanicien honnête et transparent ? Notre fondateur, passionné d'automobile depuis l'enfance, a voulu créer un garage différent.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Aujourd'hui, notre équipe de 8 mécaniciens certifiés intervient sur toutes les marques, du véhicule citadin au SUV premium. Notre philosophie reste la même : un diagnostic honnête, des prix justes, et un travail de qualité.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Nous investissons continuellement dans les derniers équipements de diagnostic et formons notre équipe aux nouvelles technologies automobiles, y compris les véhicules hybrides et électriques.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center bg-card rounded-2xl p-6 card-shadow border border-border/50"
              >
                <s.icon className="w-8 h-8 text-secondary mx-auto mb-3" />
                <p className="font-heading text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground mt-1">{s.label}</p>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="space-y-6">
            <h2 className="font-heading text-3xl font-bold text-foreground">Notre équipe</h2>
            <p className="text-muted-foreground leading-relaxed">
              Nos 8 mécaniciens sont tous certifiés et formés en continu. Chacun apporte une expertise spécifique : diagnostic électronique, mécanique générale, pneumatiques, ou climatisation. Cette diversité nous permet d'intervenir efficacement sur tous types de véhicules et de pannes.
            </p>
          </motion.div>
        </div>
      </section>

      <CTASection title="Faites connaissance avec notre équipe" subtitle="Venez nous rendre visite au garage ou prenez rendez-vous en ligne." />
    </main>
    <Footer />
  </>
);

export default About;
