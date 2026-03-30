import { Globe, MessageCircle, Users, Mail } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0C] pt-12 pb-10 relative z-20 mt-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-6">
              <Logo className="w-8 h-8" textClassName="text-white text-lg" />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-7">
              The blackbox recorder for enterprise codebases. Turning digital exhaust into structured context, automatically.
            </p>
            <div className="flex items-center gap-4 text-slate-600">
              <a href="#" className="hover:text-[#FBBF24] transition-colors"><Globe size={18} /></a>
              <a href="#" className="hover:text-[#FBBF24] transition-colors"><Users size={18} /></a>
              <a href="#" className="hover:text-[#FBBF24] transition-colors"><MessageCircle size={18} /></a>
              <a href="#" className="hover:text-[#FBBF24] transition-colors"><Mail size={18} /></a>
            </div>
          </div>

          {[
            { title: "Product", links: ["Features", "Integrations", "Pricing", "Changelog"] },
            { title: "Resources", links: ["Documentation", "API Reference", "Blog", "Community"] },
            { title: "Company", links: ["About Us", "Careers", "Privacy Policy", "Terms of Service"] }
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-white font-semibold mb-6 text-sm tracking-wide">{col.title}</h4>
              <ul className="space-y-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-600 hover:text-[#FBBF24] transition-colors">{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mb-8" />
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-700">
          <p>© 2026 Trail Inc. All rights reserved.</p>
          <div className="flex items-center gap-2 mt-4 md:mt-0">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}
