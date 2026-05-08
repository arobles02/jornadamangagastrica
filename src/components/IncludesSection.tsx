import { motion } from "framer-motion";
import { Hospital, Syringe, Apple, Brain, HeartPulse, CalendarCheck, Pill, Stethoscope } from "lucide-react";

const includes = [
  {
    icon: Hospital,
    title: "Hospitalización incluida",
    text: "1 noche de hospitalización en clínica certificada de Puebla, todo incluido.",
  },
  {
    icon: Syringe,
    title: "Anestesia y quirófano",
    text: "Anestesiólogo certificado, quirófano y equipo de enfermería para tu manga gástrica todo incluido en Puebla.",
  },
  {
    icon: Stethoscope,
    title: "Cirujano bariatra certificado",
    text: "Honorarios del bariatra certificado y todo el equipo médico incluidos en el paquete bariátrico.",
  },
  {
    icon: Pill,
    title: "Medicamentos e insumos",
    text: "Insumos quirúrgicos y medicamentos necesarios durante tu cirugía bariátrica en Puebla.",
  },
  {
    icon: Apple,
    title: "Nutrióloga antes y después",
    text: "Valoración y seguimiento con nutrióloga especializada en pacientes de manga gástrica.",
  },
  {
    icon: Brain,
    title: "Valoración psicológica",
    text: "Acompañamiento psicológico prequirúrgico para una jornada bariátrica segura y consciente.",
  },
  {
    icon: HeartPulse,
    title: "Medicina Interna y EKG",
    text: "Valoración por Medicina Interna con electrocardiograma para garantizar tu seguridad.",
  },
  {
    icon: CalendarCheck,
    title: "Seguimiento post-operatorio",
    text: "Seguimiento médico y nutricional incluido para asegurar tu pérdida de peso a largo plazo.",
  },
];

const IncludesSection = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
            ¿Qué incluye el paquete de Manga Gástrica Todo Incluido en Puebla?
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            Hospitalización, anestesia, nutrióloga, psicología y seguimiento — un paquete bariátrico todo incluido para una experiencia segura y completa.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {includes.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 bg-card p-6 rounded-xl shadow-sm border border-border hover:shadow-md transition-shadow"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground font-sans font-semibold mb-1">{item.title}</h3>
                <p className="text-muted-foreground font-sans text-sm leading-relaxed">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default IncludesSection;
