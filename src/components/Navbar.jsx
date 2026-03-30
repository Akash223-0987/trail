import { Logo } from "./Logo";

export function Navbar() {
  return (
    <nav className="fixed top-0 inset-x-0 z-50 py-4 bg-[#0A0A0C]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Logo className="w-9 h-9" />

        <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-400">
          <a href="#product" className="hover:text-white transition-colors duration-200">Product</a>
          <a href="#features" className="hover:text-white transition-colors duration-200">Features</a>
          <a href="#pricing" className="hover:text-white transition-colors duration-200">Pricing</a>
          <a href="#docs" className="hover:text-white transition-colors duration-200">Docs</a>
          <a href="#contact" className="hover:text-white transition-colors duration-200">Contact</a>
        </div>

        <button
          onClick={() => window.open("#", "_blank")}
          className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-bold text-black transition-all bg-[#FBBF24] rounded-lg hover:bg-[#FDE68A] glow-gold-sm"
        >
          Install Extension
        </button>

        <button className="md:hidden text-slate-400 hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
        </button>
      </div>
    </nav>
  );
}
