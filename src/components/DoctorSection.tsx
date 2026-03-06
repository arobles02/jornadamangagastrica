import { motion } from "framer-motion";
import drImg from "@/assets/dr-serrano.jpg";
import { Award, GraduationCap, MapPin } from "lucide-react";

const DoctorSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-5xl mx-auto">
          {/* Doctor photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-shrink-0"
          >
            <div className="relative">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                <img
                  src={drImg}
                  alt="Dr. Edgar Serrano García"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-2 -right-2 bg-primary text-primary-foreground rounded-full p-3 shadow-lg">
                <Award className="w-6 h-6" />
              </div>
            </div>
          </motion.div>

          {/* Doctor info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 space-y-4"
          >
            <h2 className="text-4xl font-display font-bold text-foreground">
              Dr. Edgar Serrano García
            </h2>
            <p className="text-xl text-primary font-sans font-semibold">
              Cirujano Bariatra Certificado
            </p>

            <div className="space-y-3 text-muted-foreground font-sans">
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Cédula Profesional: 8476729 · Especialidad: 11665362</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Certificado por el Consejo Mexicano de Cirugía General</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Especialización en Cirugía Bariátrica y Metabólica — UNAM</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0" />
                <span>Opera en Puebla y Tijuana, México</span>
              </div>
            </div>

            <p className="text-foreground font-sans leading-relaxed pt-2">
              El Dr. Serrano es un cirujano certificado con amplia trayectoria en cirugía bariátrica y
              metabólica. Graduado de la Universidad Autónoma de Yucatán, es reconocido por su habilidad
              quirúrgica y dedicación a la mejora continua. Realiza manga gástrica, bypass gástrico y
              cirugía de revisión con los más altos estándares de seguridad.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;
