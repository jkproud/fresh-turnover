import { motion } from "framer-motion";
import heroImg from "@/assets/hero-stadium.jpg";

const HeroSection = () => (
  <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img src={heroImg} alt="Stadium" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/90" />
    </div>

    <div className="relative z-10 text-center max-w-4xl mx-auto px-6 pt-20">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-accent font-medium tracking-[0.3em] uppercase text-sm mb-6"
      >
        Seed Round
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15 }}
        className="heading-display text-primary-foreground mb-8"
      >
        AI-Powered Sports Simulation Engines
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="text-primary-foreground/80 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10"
      >
        We create AI-based, Sports Simulation Engines that we leverage into innovative Bet Products
        for recruiting &amp; training the best Bet Beginners under our{" "}
        <span className="font-bold text-primary-foreground">BET 'n' COACH™</span> brand.
      </motion.p>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.55 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-4"
      >
        <a
          href="#products"
          className="bg-accent text-accent-foreground px-8 py-3 rounded-lg font-medium text-sm tracking-wide hover:opacity-90 transition-opacity"
        >
          Explore Products
        </a>
        <a
          href="#contact"
          className="border border-primary-foreground/30 text-primary-foreground px-8 py-3 rounded-lg font-medium text-sm tracking-wide hover:bg-primary-foreground/10 transition-colors"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
