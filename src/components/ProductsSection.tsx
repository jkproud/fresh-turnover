import { motion } from "framer-motion";

const products = [
  {
    code: "vAPF™",
    name: "Virtual American Pro Football",
    status: "Ready for market",
    description:
      "125 different team levels producing MASSIVELY LARGE combinations of full-season simulations. Includes 17 regular season games, playoffs and a championship game with in-season standings and playoff rankings.",
  },
  {
    code: "vACF™",
    name: "Virtual American College Football",
    status: "Ready for market",
    description:
      "Similar to pro football with significantly more team levels. Segments scheduling into P5 and G5 conferences with in-season standings, championship games, and a 12-team playoff bracket.",
  },
  {
    code: "vAPB™",
    name: "Virtual American Pro Baseball",
    status: "In R&D",
    description:
      "Multiple team levels, full season scheduling and running, following our standard development methodology and sport-specific algorithm creation.",
  },
  {
    code: "vCPH™",
    name: "Virtual Canadian Pro Hockey",
    status: "In R&D",
    description:
      "Our first 'continuous' sport simulation. Core-Essence is '1 Player-Puck Possession' integrated with ice-zone positioning across 10 distinct zones.",
  },
  {
    code: "v1DC™",
    name: "Virtual One-Day Cricket",
    status: "In R&D",
    description:
      "Multiple country team levels, full modern cricket tournament scheduling and running, following our standard development methodology.",
  },
];

const ProductsSection = () => (
  <section id="products" className="section-padding bg-secondary">
    <div className="max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mb-14"
      >
        <p className="text-accent font-medium tracking-[0.2em] uppercase text-sm mb-4">Products</p>
        <h2 className="heading-display text-foreground">Our Simulation Engines</h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((p, i) => (
          <motion.div
            key={p.code}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 border border-border hover:shadow-lg transition-shadow"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="font-heading text-2xl text-foreground">{p.code}</span>
              <span
                className={`text-xs font-medium px-3 py-1 rounded-full ${
                  p.status === "Ready for market"
                    ? "bg-accent/10 text-accent"
                    : "bg-muted text-muted-foreground"
                }`}
              >
                {p.status}
              </span>
            </div>
            <h3 className="font-body font-bold text-foreground mb-3">{p.name}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;
