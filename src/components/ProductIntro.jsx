import { motion } from "framer-motion";
import { TerminalSquare, BrainCircuit, Database } from "lucide-react";

export function ProductIntro() {
  const steps = [
    {
      icon: TerminalSquare,
      title: "1. Developer writes code",
      desc: "Code naturally. TRAIL stays silent in the background, never interrupting your flow."
    },
    {
      icon: BrainCircuit,
      title: "2. TRAIL captures intent",
      desc: "It tracks logical paths, dead-ends, decisions, and reasoning automatically."
    },
    {
      icon: Database,
      title: "3. Context is stored securely",
      desc: "Everything becomes a searchable knowledge base — your team's digital memory."
    }
  ];

  return (
    <section id="product" className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            What is TRAIL?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            TRAIL is a <strong className="text-white">passive context-capturing system</strong>.
            It works silently via a browser and IDE extension, converting your daily coding
            &ldquo;digital exhaust&rdquo; into structured, searchable knowledge.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-[30%] left-[18%] right-[18%] h-px bg-gradient-to-r from-transparent via-[#FBBF24]/30 to-transparent z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              className="relative z-10 bg-[#18181D] p-8 rounded-2xl flex flex-col items-center text-center group hover:-translate-y-2 transition-transform duration-300 border border-white/5 hover:border-[#FBBF24]/20"
            >
              <div className="w-16 h-16 rounded-full bg-[#0A0A0C] border border-white/10 flex items-center justify-center mb-6 group-hover:border-[#FBBF24]/40 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all">
                <step.icon className="w-7 h-7 text-[#FBBF24]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-3">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed text-sm">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
