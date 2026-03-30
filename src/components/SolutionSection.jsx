import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function SolutionSection() {
  return (
    <section className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
          From Code to Context &mdash; Automatically
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
          No manual documentation. No context-switching. TRAIL captures logic, decisions, and even failed attempts as you code.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Traditional */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#18181D]/60 border border-white/5 text-left opacity-70 hover:opacity-90 transition-opacity duration-300"
          >
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full bg-red-900/30 flex items-center justify-center border border-red-800/30">
                <X className="w-4 h-4 text-red-400" />
              </div>
              <h3 className="text-lg font-semibold text-slate-300">Traditional Process</h3>
            </div>
            <ul className="space-y-4">
              {["Write docs manually after the fact", "Schedule knowledge-transfer meetings", "Lose edge cases and refactoring context", "Confusion during onboarding"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-500 text-sm">
                  <X className="w-4 h-4 text-red-500/50 shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TRAIL */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-[#18181D] border border-[#FBBF24]/20 text-left relative overflow-hidden shadow-[0_0_40px_rgba(251,191,36,0.06)]"
          >
            <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/40 to-transparent" />
            <div className="flex items-center gap-3 mb-7">
              <div className="w-9 h-9 rounded-full bg-[#FBBF24] flex items-center justify-center shadow-[0_0_15px_rgba(251,191,36,0.4)]">
                <Check className="w-5 h-5 text-black" />
              </div>
              <h3 className="text-lg font-bold text-white">The TRAIL Advantage</h3>
            </div>
            <ul className="space-y-4">
              {["No manual documentation required", "Zero interruptions to your workflow", "Captures logic, decisions, and bugs fixed", "Instant context for any PR or new hire"].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm">
                  <Check className="w-4 h-4 text-[#FBBF24] shrink-0 mt-0.5" />
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
