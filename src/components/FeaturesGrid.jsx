import { motion } from "framer-motion";
import { Activity, Ghost, History, FileText, Lock } from "lucide-react";

export function FeaturesGrid() {
  const features = [
    { icon: Activity, title: "Logic Heatmaps", desc: "Understand code flow instantly. Visualize which logical branches execute and how data moves through your system." },
    { icon: Ghost, title: "Ghost Comments", desc: "See past decisions, failed attempts, and deleted reasoning directly alongside your current code." },
    { icon: History, title: "Context Restoration", desc: "Resume work instantly after breaks. TRAIL rebuilds your full mental model of where you left off." },
    { icon: FileText, title: "Auto Documentation", desc: "Zero manual effort. TRAIL writes the \"why\" so you only need to focus on writing the \"how\"." },
    { icon: Lock, title: "Secure Context Vaults", desc: "Enterprise-grade storage. Your proprietary logic and codebase context is encrypted and vaulted." }
  ];

  return (
    <section id="features" className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/20 text-[#FBBF24] mb-8 uppercase tracking-widest">
            Core Value
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Features that Drive Productivity
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Get context exactly when and where you need it.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="p-8 rounded-2xl bg-[#0A0A0C] border border-white/5 hover:border-[#FBBF24]/20 transition-all duration-300 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(251,191,36,0.04),transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="w-12 h-12 rounded-xl bg-[#18181D] flex items-center justify-center mb-6 border border-white/8 group-hover:border-[#FBBF24]/30 group-hover:shadow-[0_0_15px_rgba(251,191,36,0.15)] transition-all relative z-10">
                <feat.icon className="w-5 h-5 text-slate-400 group-hover:text-[#FBBF24] transition-colors" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3 relative z-10">{feat.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm relative z-10">{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
