import { motion } from "framer-motion";

export function ProblemSection() {
  const stats = [
    { value: "21%", label: "Developer Attrition Rate" },
    { value: "3–6 Mo", label: "Average Onboarding Time" },
    { value: "20%", label: "Senior Engineer Time Lost" }
  ];

  return (
    <section id="problem" className="py-16 bg-[#0A0A0C] relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_left,rgba(251,191,36,0.04)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full bg-red-950/40 border border-red-800/30 text-red-400 mb-8 uppercase tracking-widest">
            The Business Reality
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight leading-tight">
            The Cost of Missing Context
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto italic font-medium">
            &ldquo;Companies don&rsquo;t lose code — they lose understanding.&rdquo;
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="p-10 rounded-2xl bg-[#0A0A0C] border border-red-900/15 hover:border-red-800/30 transition-colors text-center"
            >
              <div className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-b from-red-400 to-red-600/40">
                {stat.value}
              </div>
              <div className="text-slate-400 font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
