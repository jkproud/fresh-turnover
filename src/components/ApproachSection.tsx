import { motion } from "framer-motion";

const ApproachSection = () => (
  <section id="approach" className="section-padding bg-background">
    <div className="max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Unique Approach</p>
        <h2 className="heading-display text-foreground mb-8">The Core-Essence Method</h2>

        <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            We have a proven AI-Enabled Tech Platform that develops unique Sports Simulation Engines producing
            perfectly-simulated game-play results. We use our simulation engines to create unique{" "}
            <strong className="text-foreground">BET 'n' COACH</strong> products that Affiliates can use to more
            effectively and efficiently attract the best Bet Beginners.
          </p>
          <p>
            Our approach includes identifying and then perfectly simulating the{" "}
            <strong className="text-foreground">Core-Essence</strong> of every sport, including interactive R&D,
            team testing, and the running of Millions+ of simulations.
          </p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <h3 className="font-heading text-xl text-foreground mb-3">Unbounded Algorithms</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Game-play outcomes produced in a fully 'Unbounded' algorithmic manner that align perfectly to
              the historical and current outcomes of each specific sport.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8 border border-border">
            <h3 className="font-heading text-xl text-foreground mb-3">Limitless Combinations</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              With multiple team levels and MANY TRILLIONS+ of full season game-play options, we create an
              enhanced simulation experience with content exclusive to every customer.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);

export default ApproachSection;
