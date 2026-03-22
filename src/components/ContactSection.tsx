import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="section-padding bg-secondary">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Get in Touch</p>
        <h2 className="heading-display text-foreground mb-10">Contact</h2>

        <div className="space-y-6">
          <div className="flex items-center justify-center gap-3 text-foreground">
            <MapPin size={18} className="text-accent" />
            <span>Toronto, Ontario, Canada</span>
          </div>

          <div>
            <p className="font-bold text-foreground mb-1">Brett A. Proud</p>
            <p className="text-muted-foreground text-sm">Managing Director & Co-Founder</p>
          </div>

          <div className="flex flex-col items-center gap-3">
            <a
              href="mailto:brett.a.proud@gmail.com"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Mail size={16} />
              brett.a.proud@gmail.com
            </a>
            <a
              href="tel:+14166183009"
              className="inline-flex items-center gap-2 text-accent hover:underline"
            >
              <Phone size={16} />
              +1 416 618 3009
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ContactSection;
