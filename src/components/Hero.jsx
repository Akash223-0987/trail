import { motion } from "framer-motion";
import { GitMerge } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-24 pb-14 md:pt-32 md:pb-20 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.08)_0%,transparent_70%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-semibold rounded-full bg-[#FBBF24]/10 border border-[#FBBF24]/25 text-[#FBBF24] mb-6 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#FBBF24] animate-pulse" />
          Built for Developers &amp; Teams
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight mb-5 leading-[1.05] text-white max-w-5xl mx-auto"
        >
          Your Code Has Logic.<br />
          <span className="text-gradient-gold">TRAIL Captures the Why.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-slate-400 mb-8 max-w-2xl mx-auto leading-relaxed"
        >
          Automatically record developer intent, decisions, and context &mdash; directly from your workflow. No interruptions, zero manual docs.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => window.open("#", "_blank")}
            className="btn-primary w-full sm:w-auto text-base"
          >
            Install Extension
          </button>
          <button className="btn-secondary w-full sm:w-auto text-base">
            View Demo
          </button>
        </motion.div>

        {/* Code Visual */}
        <motion.div
          initial={{ opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/8 bg-[#0A0A0C] p-6 text-left shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/40 to-transparent" />
          <div className="flex gap-2 mb-5">
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <div className="w-3 h-3 rounded-full bg-white/10" />
            <span className="ml-2 text-xs text-slate-600 font-mono">payment.js · TRAIL active</span>
          </div>

          <div className="font-mono text-sm md:text-base grid gap-4 text-slate-300">
            <div className="flex items-start gap-4">
              <span className="text-slate-700 shrink-0 select-none">1</span>
              <div>
                <span className="text-pink-400">function</span>{" "}
                <span className="text-amber-300">processPayment</span>
                <span className="text-slate-300">(amount) {"{"}</span>
              </div>
            </div>
            <div className="flex items-start gap-4 pl-4 relative group">
              <span className="text-slate-700 shrink-0 select-none absolute -left-0">2</span>
              <div className="absolute -left-2 -top-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-xs text-[#FBBF24] bg-[#FBBF24]/10 px-3 py-1.5 rounded-lg border border-[#FBBF24]/20 whitespace-nowrap">
                <GitMerge size={12} /> TRAIL: Switched to Stripe v2 — timeout fix
              </div>
              <div>
                <span className="text-slate-600">{"// Previously failing on timeouts. v2 handler resolves it."}</span>
                <br />
                <span className="text-pink-400">const</span>{" "}
                <span className="text-slate-200">response</span>{" = "}
                <span className="text-pink-400">await</span>{" stripe.charges."}
                <span className="text-amber-300">create</span>
                {"({ amount });"}
              </div>
            </div>
            <div className="flex items-start gap-4">
              <span className="text-slate-700 shrink-0 select-none">3</span>
              <div>{"}"}</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
