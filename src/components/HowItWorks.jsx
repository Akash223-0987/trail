import { motion } from "framer-motion";
import { Download, Code, CheckCircle2 } from "lucide-react";

export function HowItWorks() {
  const steps = [
    { title: "Install Extension", icon: Download, text: "Add TRAIL to your browser or IDE in seconds. No setup required." },
    { title: "Start Coding", icon: Code, text: "Work naturally — no prompts, no tags, no manual writing." },
    { title: "Capture Done", icon: CheckCircle2, text: "TRAIL silently records logic context and decisions in the background." }
  ];

  return (
    <section className="py-16 bg-[#0A0A0C] relative z-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.04)_0%,transparent_65%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white tracking-tight">
            Install. Code. Done.
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Integrating TRAIL takes less than 30 seconds.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-stretch gap-6 md:gap-16 relative">
          <div className="hidden md:block absolute top-[2.25rem] left-[14%] right-[14%] h-px bg-gradient-to-r from-transparent via-[#FBBF24]/20 to-transparent z-0" />

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.18 }}
              className="flex-1 text-center relative z-10 group"
            >
              <div className="w-[72px] h-[72px] mx-auto rounded-full bg-[#18181D] border border-white/8 flex items-center justify-center mb-6 group-hover:border-[#FBBF24]/40 group-hover:shadow-[0_0_20px_rgba(251,191,36,0.15)] transition-all duration-300">
                <step.icon className="w-7 h-7 text-[#FBBF24]" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
              <p className="text-slate-400 text-sm max-w-[200px] mx-auto leading-relaxed">{step.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() => window.open("#", "_blank")}
            className="btn-primary text-base"
          >
            👉 Install Extension
          </button>
        </div>
      </div>
    </section>
  );
}
