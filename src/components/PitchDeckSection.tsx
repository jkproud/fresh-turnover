import { motion } from "framer-motion";
import { FileDown } from "lucide-react";

const PitchDeckSection = () => (
  <section id="pitch-deck" className="section-padding bg-primary text-primary-foreground">
    <div className="max-w-3xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Investors</p>
        <h2 className="heading-display mb-6">Pitch Deck</h2>
        <p className="text-primary-foreground/70 text-lg mb-10 leading-relaxed">
          Raising USD $600K on a pre-money valuation of USD $1.6M.
          <br />
          Download our investor deck for full details.
        </p>

        <a
          href="/turnover-global-pitch-deck.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 bg-accent text-accent-foreground px-8 py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
        >
          <FileDown size={20} />
          Download Investor Deck
        </a>

        <p className="text-primary-foreground/40 text-sm mt-6">
          Place your PDF as <code className="bg-primary-foreground/10 px-2 py-1 rounded text-xs">public/turnover-global-pitch-deck.pdf</code>
        </p>
      </motion.div>
    </div>
  </section>
);

export default PitchDeckSection;
