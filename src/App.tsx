import { motion } from "motion/react";
import { ArrowRight, Box, Layers, MousePointer2, Shield, Zap, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveFeature((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="min-h-screen relative overflow-x-hidden bg-mercury-bg selection:bg-mercury-accent selection:text-white">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 brutal-grid pointer-events-none opacity-40 z-0" />

      <div className="relative z-10 lg:max-w-[1440px] lg:mx-auto lg:border-x lg:border-mercury-ink/10 bg-mercury-bg/20 min-h-screen flex flex-col shadow-2xl">
        {/* Navigation */}
        <nav className="relative z-50 border-b border-mercury-ink/5 bg-mercury-bg/60 backdrop-blur-md">
          <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 md:w-10 md:h-10 bg-mercury-ink rounded-full flex items-center justify-center text-mercury-bg skew-x-[-12deg]">
                <span className="font-display font-bold text-lg md:text-xl transform skew-x-[12deg]">M</span>
              </div>
              <span className="font-display font-bold text-xl md:text-2xl tracking-tighter uppercase whitespace-nowrap">MERCURY ISLE</span>
            </div>

            <div className="hidden md:flex items-center gap-10">
              {["Approach", "Platform", "Case Studies", "Contact"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-[10px] font-bold hover:text-mercury-accent transition-colors tracking-[0.2em] uppercase"
                >
                  {item}
                </a>
              ))}
              <button className="bg-mercury-ink text-mercury-bg px-5 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-mercury-accent transition-all duration-300">
                Get Started
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden absolute w-full bg-mercury-bg z-40 border-b border-mercury-ink/10 p-6 flex flex-col gap-4 shadow-xl"
          >
            {["Approach", "Platform", "Case Studies", "Contact"].map((item) => (
              <a key={item} href="#" className="text-lg font-display font-bold uppercase tracking-tight">
                {item}
              </a>
            ))}
            <button className="w-full bg-mercury-ink text-mercury-bg py-4 font-bold uppercase tracking-widest mt-4">
              Get Started
            </button>
          </motion.div>
        )}

        {/* Hero Section */}
        <section className="relative pt-24 pb-16 md:pt-48 md:pb-32 px-6 md:px-12">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-10">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display font-bold text-4xl md:text-7xl lg:text-8xl leading-[0.95] tracking-tighter"
            >
              STOP TRAINING.
              <br />
              <span className="text-mercury-accent italic">START UNDERSTANDING.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl text-lg md:text-xl text-mercury-ink/60 leading-relaxed"
            >
              Complexity is the enemy of execution. Mercury Isle transforms static procedures into living intelligence that teams master intuitively.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="flex items-center justify-center gap-3 bg-mercury-ink text-mercury-bg px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] group border-2 border-mercury-ink hover:bg-transparent hover:text-mercury-ink transition-all duration-500">
                EXPLORE THE PLATFORM
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="px-10 py-5 text-xs font-bold uppercase tracking-[0.2em] border border-mercury-ink/20 hover:border-mercury-ink transition-all duration-300">
                WATCH DEMO
              </button>
            </motion.div>
          </div>
        </section>

        {/* Visual Story Panels */}
        <section className="relative z-10 border-y border-mercury-ink/10">
          <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[500px]">
            {/* Panel 1: The Chaos */}
            <motion.div 
              whileInView={{ backgroundColor: "#FDFDFD" }}
              className="group relative flex flex-col p-10 md:p-16 border-r border-b lg:border-b-0 border-mercury-ink/10 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] tracking-widest opacity-40 mb-8 block font-bold uppercase">01 / The Density</span>
                <h2 className="font-display font-bold text-3xl mb-6 leading-tight">Beyond the manual.</h2>
                <p className="text-sm md:text-base text-mercury-ink/60 mb-8 leading-relaxed">Flat documents are static. Understanding is dynamic. We solve the information retention gap at its source.</p>
                <div className="w-10 h-[1px] bg-mercury-ink/20 group-hover:bg-mercury-ink group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>

            {/* Panel 2: The Insight */}
            <motion.div 
              whileInView={{ backgroundColor: "#FFFFFF" }}
              className="group relative flex flex-col p-10 md:p-16 border-r border-b lg:border-b-0 border-mercury-ink/10 bg-white/50 overflow-hidden"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] tracking-widest opacity-40 mb-8 block font-bold uppercase">02 / The Synthesis</span>
                <h2 className="font-display font-bold text-3xl mb-6 leading-tight">Distill complexity.</h2>
                <p className="text-sm md:text-base text-mercury-ink/60 mb-8 leading-relaxed">Our engine extracts the decision logic hidden in your unstructured data, turning text into actionable paths.</p>
                <div className="w-10 h-[1px] bg-mercury-accent/30 group-hover:bg-mercury-accent group-hover:w-full transition-all duration-700" />
              </div>
            </motion.div>

            {/* Panel 3: The Mastery */}
            <motion.div 
              whileInView={{ backgroundColor: "#141414", color: "#E4E3E0" }}
              className="group relative flex flex-col p-10 md:p-16 bg-mercury-ink text-mercury-bg overflow-hidden transition-colors duration-500"
            >
              <div className="relative z-10">
                <span className="font-mono text-[10px] tracking-widest opacity-30 mb-8 block font-bold uppercase">03 / The Mastery</span>
                <h2 className="font-display font-bold text-3xl mb-6 leading-tight text-white">Full operational clarity.</h2>
                <p className="text-sm md:text-base text-white/50 mb-8 leading-relaxed">Teams graduate from "knowing" to "groking." Procedures become muscle memory before the first site visit.</p>
                <button className="flex items-center gap-2 text-mercury-accent font-bold tracking-widest text-[10px] uppercase group/btn">
                  VIEW CASE STUDIES <ArrowRight size={12} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Features Detail */}
        <section className="relative py-24 md:py-48 px-6 md:px-12 overflow-hidden border-b border-mercury-ink/5">
          <div className="max-w-6xl mx-auto items-center">
            <div className="max-w-3xl mx-auto text-center mb-24">
              <span className="font-mono text-[10px] uppercase tracking-[0.4em] font-bold text-mercury-accent mb-6 block">Capabilities</span>
              <h2 className="font-display font-bold text-4xl md:text-6xl tracking-tighter leading-[0.95]">Built for mission critical clarity.</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {[
                { title: "Logic Extraction", desc: "AI-driven mapping of complex unstructured procedures into interactive graph nodes.", icon: <Box size={22} /> },
                { title: "Visual Simulations", desc: "Interactive digital rehearsals that allow teams to practice high-stakes tasks safely.", icon: <Zap size={22} /> },
                { title: "Integrity Guard", desc: "Automated compliance checks that ensure every operation follows exact specifications.", icon: <Shield size={22} /> },
              ].map((feature, i) => {
                const isActive = hoveredFeature !== null ? hoveredFeature === i : activeFeature === i;
                return (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                    className="flex flex-col items-center text-center group cursor-pointer"
                  >
                    <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-all duration-500 transform ${isActive ? 'bg-mercury-accent text-white rotate-6 scale-110 shadow-lg shadow-mercury-accent/20' : 'bg-mercury-ink/5 text-mercury-ink'}`}>
                      {feature.icon}
                    </div>
                    <h3 className={`font-display font-bold text-xl mb-4 uppercase tracking-tight transition-colors duration-500 ${isActive ? 'text-mercury-accent' : 'text-mercury-ink'}`}>{feature.title}</h3>
                    <p className="text-sm text-mercury-ink/50 leading-relaxed">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-mercury-ink text-mercury-bg py-24 md:py-48 px-6 text-center relative overflow-hidden flex-1 flex flex-col justify-center">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mercury-accent via-transparent to-transparent pointer-events-none" />
          <div className="max-w-4xl mx-auto relative z-10 w-full">
            <h2 className="font-display font-bold text-4xl md:text-6xl lg:text-7xl tracking-tighter mb-10 leading-[0.95]">Ready to evolve beyond static training?</h2>
            <p className="text-lg md:text-xl text-mercury-bg/50 mb-12 max-w-xl mx-auto">Simplify the complex. Accelerate understanding. Master the procedure.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-mercury-accent text-white px-10 py-5 text-[10px] font-bold uppercase tracking-widest hover:bg-white hover:text-mercury-ink transition-all duration-300">
                Request Implementation
              </button>
              <button className="border border-mercury-bg/20 px-10 py-5 text-[10px] font-bold uppercase tracking-widest hover:border-mercury-bg transition-all duration-300">
                Product Specs
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-20 px-6 md:px-12 bg-mercury-ink text-white border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 mb-8">
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-mercury-ink skew-x-[-12deg]">
                    <span className="font-display font-bold text-lg transform skew-x-[12deg]">M</span>
                  </div>
                  <span className="font-display font-bold text-xl tracking-tighter">MERCURY ISLE</span>
                </div>
                <p className="text-white/40 text-xs leading-relaxed max-w-[200px]">
                  Propelling high-performance teams through structural clarity.
                </p>
              </div>
              
              {["Platform", "Company", "Knowledge", "Legal"].map((col) => (
                <div key={col} className="flex flex-col gap-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.3em] font-bold mb-4 opacity-30">{col}</span>
                  {["System", "Network", "Safety"].map((link) => (
                    <a key={link} href="#" className="text-xs opacity-60 hover:opacity-100 font-bold tracking-widest transition-opacity uppercase">{link}</a>
                  ))}
                </div>
              ))}
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5 text-[9px] font-mono uppercase tracking-[0.4em] opacity-30">
              <span>© 2024 MERCURY ISLE SYSTEMS</span>
              <div className="flex gap-12">
                <a href="#">Privacy</a>
                <a href="#">Security</a>
                <a href="#">Infrastructure</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
