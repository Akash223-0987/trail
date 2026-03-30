import { motion } from "framer-motion";

export function ValueSection() {
  return (
    <section className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Built for Developers. Loved by Business.
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            A tool that respects the maker while empowering the organization.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-[#0A0A0C] border border-white/5 hover:border-white/10 transition-colors"
          >
            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-white/8">
              For Developers
            </h3>
            <ul className="space-y-5">
              {["No need to write separate documentation", "Faster debugging of complex spaghetti code", "Instant recall of past technical decisions", "Stay in flow state 100% of the time"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300">
                  <span className="text-[#FBBF24] text-lg shrink-0">⚡</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-2xl bg-[#0A0A0C] border border-[#FBBF24]/15 hover:border-[#FBBF24]/30 transition-colors relative overflow-hidden"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/30 to-transparent" />
            <h3 className="text-2xl font-bold text-white mb-8 pb-4 border-b border-[#FBBF24]/15">
              For Teams &amp; Companies
            </h3>
            <ul className="space-y-5">
              {["70% faster onboarding for new engineers", "Siloed knowledge is never lost when someone leaves", "Reduced dependency on specific hero engineers", "Accelerated time-to-market for complex features"].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-slate-300">
                  <span className="text-[#FBBF24] text-lg shrink-0">💡</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
