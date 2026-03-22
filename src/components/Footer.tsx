import { Link } from "react-router-dom";
import { Wrench, Phone, MapPin, Clock } from "lucide-react";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="section-container py-12 md:py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2 font-heading font-bold text-xl mb-4">
            <Wrench className="w-6 h-6 text-secondary" />
            Mecano
          </Link>
          <p className="text-primary-foreground/70 text-sm leading-relaxed">
            Votre garage de confiance à Paris. Réparation et entretien toutes marques depuis 2010.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {[
              { label: "Accueil", path: "/" },
              { label: "Services", path: "/services" },
              { label: "Tarifs", path: "/tarifs" },
              { label: "Rendez-vous", path: "/rendez-vous" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-secondary transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Services</h4>
          <ul className="space-y-2 text-sm text-primary-foreground/70">
            {["Vidange", "Freins", "Pneus", "Diagnostic", "Climatisation"].map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/70">
            <li className="flex items-start gap-2">
              <Phone className="w-4 h-4 mt-0.5 text-secondary" />
              <a href="tel:+33123456789" className="hover:text-secondary transition-colors">01 23 45 67 89</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary" />
              <span>42 Rue de la Mécanique, 75011 Paris</span>
            </li>
            <li className="flex items-start gap-2">
              <Clock className="w-4 h-4 mt-0.5 text-secondary" />
              <span>Lun–Ven : 8h–19h<br />Sam : 9h–17h</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-12 pt-8 border-t border-primary-foreground/10 text-center text-sm text-primary-foreground/50">
        © {new Date().getFullYear()} Mecano. Tous droits réservés. | Garage automobile Paris
      </div>
    </div>
  </footer>
);

export default Footer;
