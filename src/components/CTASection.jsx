import { motion } from "framer-motion";

export function CTASection() {
  return (
    <section className="py-6 px-4 md:px-8 relative z-20">
      <div className="max-w-6xl mx-auto rounded-3xl bg-[#0A0A0C] border border-[#FBBF24]/20 overflow-hidden relative py-14 px-8 text-center shadow-[0_0_80px_rgba(251,191,36,0.07)]">
        {/* Decorative glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.12)_0%,transparent_70%)] pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/50 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/20 to-transparent" />

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight leading-tight max-w-3xl mx-auto"
        >
          Stop Writing Docs.<br />
          <span className="text-gradient-gold">Start Capturing Context.</span>
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.93 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-col items-center gap-4"
        >
          <button
            onClick={() => window.open("#", "_blank")}
            className="btn-primary text-lg px-10 py-4"
          >
            👉 Install Extension Now
          </button>
          <p className="text-slate-500 text-sm font-medium">
            Takes less than 30 seconds to get started
          </p>
        </motion.div>
      </div>
    </section>
  );
}
