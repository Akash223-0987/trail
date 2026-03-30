import { motion } from "framer-motion";
import { Check } from "lucide-react";

export function Pricing() {
  const plans = [
    {
      name: "Pulse",
      price: "Free",
      desc: "Perfect for students & individuals.",
      features: ["Basic summaries", "7-day context history", "IDE Integration", "Standard support"],
      highlight: false,
      cta: "Get Started for Free"
    },
    {
      name: "Kinetic",
      price: "₹1999/mo",
      desc: "For small agile teams & startups.",
      features: ["Auto documentation", "Shared context vaults", "Unlimited history", "Ghost Comments", "Priority support"],
      highlight: true,
      cta: "Start Kinetic Trial"
    },
    {
      name: "Titanium",
      price: "Custom",
      desc: "For enterprise scale and security.",
      features: ["Dedicated context vaults", "Advanced analytics", "On-prem deployment", "Security & compliance", "SLA guarantee", "Dedicated account manager"],
      highlight: false,
      cta: "Contact Sales"
    }
  ];

  return (
    <section id="pricing" className="py-16 bg-[#0A0A0C] relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-400 max-w-xl mx-auto">
            Scale your context capturing as your team grows.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 items-center">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`rounded-2xl border relative transition-all duration-300 ${
                plan.highlight
                  ? "bg-[#18181D] border-[#FBBF24]/40 shadow-[0_0_50px_rgba(251,191,36,0.1)] scale-105 z-10 p-10"
                  : "bg-[#0A0A0C] border-white/6 hover:border-white/12 p-8"
              }`}
            >
              {plan.highlight && (
                <>
                  <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#FBBF24]/60 to-transparent" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FBBF24] text-black px-3 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                    Most Popular
                  </div>
                </>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-slate-500 mb-6 min-h-[40px] text-sm">{plan.desc}</p>
              <div className={`text-4xl font-black mb-8 ${plan.highlight ? "text-gradient-gold" : "text-white"}`}>
                {plan.price}
              </div>

              <button
                className={`w-full py-3 px-4 rounded-xl font-bold transition-all mb-8 text-sm ${
                  plan.highlight
                    ? "btn-primary"
                    : "bg-[#18181D] hover:bg-[#222228] text-slate-300 border border-white/8 hover:border-white/16"
                }`}
              >
                {plan.cta}
              </button>

              <ul className="space-y-3.5">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-slate-400 text-sm">
                    <Check className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-[#FBBF24]" : "text-slate-500"}`} />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
