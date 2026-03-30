import { motion } from "framer-motion";
import { Terminal, Code2, Users2, LayoutTemplate } from "lucide-react";

export function Testimonials() {
  const logos = [
    { icon: Terminal, name: "Acme Git" },
    { icon: Code2, name: "ByteLogic" },
    { icon: Users2, name: "TeamFlow" },
    { icon: LayoutTemplate, name: "UI Systems" }
  ];

  return (
    <section className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-xs font-semibold text-slate-600 uppercase tracking-widest mb-10">
            Trusted by modern engineering teams
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-16 opacity-40 hover:opacity-70 transition-opacity duration-700">
            {logos.map((logo, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-2"
              >
                <logo.icon className="w-6 h-6 md:w-7 md:h-7 text-slate-400" />
                <span className="text-lg md:text-xl font-black text-slate-300">{logo.name}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto rounded-3xl bg-[#0A0A0C] p-10 md:p-14 border border-[#FBBF24]/10 text-center relative overflow-hidden shadow-[0_0_60px_rgba(251,191,36,0.04)]"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/30 to-transparent" />
          <div className="text-[#FBBF24] mb-8 flex justify-center text-5xl font-serif leading-none">&ldquo;</div>
          <p className="text-xl md:text-2xl text-slate-300 font-medium leading-relaxed mb-10">
            TRAIL completely changed how we onboard new devs. We no longer rely on specific senior engineers to explain legacy code — the context is just waiting there when you click a function.
          </p>
          <div className="flex items-center justify-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#18181D] border-2 border-[#FBBF24]/40 flex items-center justify-center text-[#FBBF24] font-bold text-sm">
              JT
            </div>
            <div className="text-left">
              <div className="font-bold text-white">Jane Tracker</div>
              <div className="text-slate-500 text-sm">VP of Engineering, ByteLogic</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
