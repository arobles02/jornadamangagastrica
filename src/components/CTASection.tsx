import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/95 to-teal-dark text-primary-foreground">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold">
            Da el primer paso hacia tu transformación
          </h2>
          <p className="text-xl font-sans opacity-90 leading-relaxed">
            El turismo médico no debería sentirse caótico. Debería sentirse planeado,
            supervisado y seguro. Agenda tu consulta virtual hoy.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <a
              href="https://wa.me/16195695034?text=Hola%2C%20me%20interesa%20la%20Jornada%20de%20Manga%20G%C3%A1strica"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-primary-foreground text-primary font-sans font-bold text-lg px-8 py-4 rounded-full hover:bg-primary-foreground/90 transition-all hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp
            </a>
            <a
              href="tel:6643838390"
              className="inline-flex items-center gap-3 bg-primary-foreground/20 text-primary-foreground font-sans font-semibold text-lg px-8 py-4 rounded-full hover:bg-primary-foreground/30 transition-all border border-primary-foreground/30"
            >
              <Phone className="w-5 h-5" />
              Llamar: 664 383 8390
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-primary-foreground/80 font-sans pt-4">
            <MapPin className="w-5 h-5" />
            <span>Puebla, México · Hospitales certificados</span>
          </div>

          <p className="text-sm font-sans opacity-60 pt-8">
            © {new Date().getFullYear()} Serenity Surgery Planner · Especialistas en Puebla, México
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
