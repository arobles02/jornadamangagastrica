import { motion } from "framer-motion";
import { MessageCircle, Instagram, Facebook, Calendar, Music } from "lucide-react";
import { useState } from "react";

const FloatingButtons = () => {
  const [open, setOpen] = useState(false);

  const links = [
    {
      icon: Calendar,
      label: "Agendar Valoración",
      href: "https://calendar.app.google/6qLbKZjmkZA3nQ238",
      bg: "bg-accent",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/serenity.surgery.planner/",
      bg: "bg-gradient-to-br from-pink-500 to-purple-600",
    },
    {
      icon: Facebook,
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61570160084370&mibextid=ZbWKwL",
      bg: "bg-blue-600",
    },
    {
      icon: Music,
      label: "TikTok",
      href: "https://www.tiktok.com/@serenity.surgery.planner?_t=ZM-8sKKuBOpEww&_r=1",
      bg: "bg-foreground",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expandable menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="flex flex-col gap-3 mb-2"
        >
          {links.map((link, i) => (
            <motion.a
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.05 }}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`${link.bg} text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}
              title={link.label}
            >
              <link.icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      )}

      {/* Toggle button */}
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full bg-muted text-foreground flex items-center justify-center shadow-md hover:scale-105 transition-transform text-lg"
        title="Redes sociales"
      >
        {open ? "✕" : "＋"}
      </button>

      {/* WhatsApp main button */}
      <a
        href="https://api.whatsapp.com/send/?phone=16195695034"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
        title="WhatsApp"
      >
        <MessageCircle className="w-7 h-7" />
      </a>
    </div>
  );
};

export default FloatingButtons;
