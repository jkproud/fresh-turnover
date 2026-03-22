import { motion } from "framer-motion";

const AboutSection = () => (
  <section id="about" className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">About Us</p>
        <h2 className="heading-display text-foreground mb-8">Who We Are</h2>
        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            We are <strong className="text-foreground">TURNOVER GLOBAL Inc.</strong> — Toronto-based, founded in 2022.
          </p>
          <p>
            Our approach is unique in that our software products are based on our own Sports Simulation Engines
            that run on AI-Enabled algorithms that are 'Unbounded', but can also never fail with respect to the
            actual game-play integrity of a specific sport. This means that we are able to produce{" "}
            <strong className="text-foreground">MANY TRILLIONS</strong> of 100% game-play integrity-based simulated results.
          </p>
          <p>
            All meaning that our BET 'n' COACH products are perfect for attracting Bet Beginners by providing
            hands-on sports-specific training and also hands-on sports-specific how-to-bet training.
          </p>
        </div>
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
