import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  price?: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, price, delay = 0 }: ServiceCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
    className="bg-card rounded-2xl p-6 md:p-8 card-shadow border border-border/50 hover:elevated-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col"
  >
    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-5">
      <Icon className="w-6 h-6 text-secondary" />
    </div>
    <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">{description}</p>
    {price && (
      <p className="text-sm font-semibold text-foreground mb-4">
        À partir de <span className="text-secondary">{price}</span>
      </p>
    )}
    <Button variant="cta" size="sm" asChild className="w-full">
      <Link to="/rendez-vous">Demander un devis</Link>
    </Button>
  </motion.div>
);

export default ServiceCard;
