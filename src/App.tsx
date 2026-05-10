import { motion } from "motion/react";
import { ArrowRight, Box, Layers, MousePointer2, Shield, Zap, Menu, X } from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Background Grid Accent */}
      <div className="fixed inset-0 brutal-grid pointer-events-none opacity-40 z-0" />

      {/* Navigation */}
      <nav className="relative z-50 border-b border-mercury-ink/10 bg-mercury-bg/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 md:w-10 md:h-10 bg-mercury-ink rounded-full flex items-center justify-center text-mercury-bg skew-x-[-12deg]">
              <span className="font-display font-bold text-lg md:text-xl transform skew-x-[12deg]">M</span>
            </div>
            <span className="font-display font-bold text-xl md:text-2xl tracking-tighter">MERCURY ISLE</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            {["Approach", "Platform", "Case Studies", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-sm font-medium hover:text-mercury-accent transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
            <button className="bg-mercury-ink text-mercury-bg px-6 py-2.5 text-sm font-bold uppercase tracking-widest hover:bg-mercury-accent transition-all duration-300">
              Get Started
            </button>
          </div>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X /> : <Menu />}
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
      <section className="relative pt-24 pb-16 md:pt-40 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-start gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 px-3 py-1.5 border border-mercury-ink/20 rounded-sm bg-mercury-ink/5"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-mercury-accent animate-pulse" />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] font-medium">REVOLUTIONIZING PROCEDURAL INTELLIGENCE</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display font-bold text-6xl md:text-9xl leading-[0.9] tracking-tighter"
          >
            STOP TRAINING.
            <br />
            <span className="text-mercury-accent italic">START UNDERSTANDING.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-xl text-lg md:text-xl text-mercury-ink/70 leading-relaxed"
          >
            Manuals are for machines. Insights are for humans. Mercury Isle transforms static documents into living procedural logic that teams actually grasp.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <button className="flex items-center gap-3 bg-mercury-ink text-mercury-bg px-8 py-4 text-base font-bold uppercase tracking-widest group border-2 border-mercury-ink hover:bg-transparent hover:text-mercury-ink transition-all duration-500">
              EXPLORE THE PLATFORM
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 text-base font-bold uppercase tracking-widest border-2 border-mercury-ink/20 hover:border-mercury-ink transition-all duration-300">
              WATCH DEMO
            </button>
          </motion.div>
        </div>
      </section>

      {/* Visual Story Panels */}
      <section className="relative z-10 border-t border-mercury-ink/10">
        <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
          {/* Panel 1: The Chaos */}
          <motion.div 
            whileInView={{ backgroundColor: "#FDFDFD" }}
            className="group relative flex flex-col p-10 md:p-16 border-r border-b lg:border-b-0 border-mercury-ink/10 overflow-hidden"
          >
            <div className="relative z-10">
              <span className="font-mono text-sm opacity-40 mb-6 block">01 / THE NOISE</span>
              <h2 className="font-display font-bold text-4xl mb-6 leading-tight">The 500-page manual problem.</h2>
              <p className="text-mercury-ink/60 mb-8 leading-relaxed">Most procedural training fails because it prioritizes volume over value. Information is trapped in flat files that are hard to search and impossible to master.</p>
              <div className="w-16 h-1 bg-mercury-ink/10 group-hover:bg-mercury-ink group-hover:w-full transition-all duration-700" />
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 select-none pointer-events-none">
              <Layers className="w-80 h-80" />
            </div>
          </motion.div>

          {/* Panel 2: The Insight */}
          <motion.div 
            whileInView={{ backgroundColor: "#FFFFFF" }}
            className="group relative flex flex-col p-10 md:p-16 border-r border-b lg:border-b-0 border-mercury-ink/10 bg-white/50 overflow-hidden"
          >
            <div className="relative z-10">
              <span className="font-mono text-sm opacity-40 mb-6 block">02 / THE FILTER</span>
              <h2 className="font-display font-bold text-4xl mb-6 leading-tight">Distilled procedural logic.</h2>
              <p className="text-mercury-ink/60 mb-8 leading-relaxed">Our engine ingests raw complexity and maps out the underlying decision trees. We turn "what to do" into "why it matters."</p>
              <div className="w-16 h-1 bg-mercury-accent/20 group-hover:bg-mercury-accent group-hover:w-full transition-all duration-700" />
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-700 select-none pointer-events-none">
              <Zap className="w-80 h-80 text-mercury-accent" />
            </div>
          </motion.div>

          {/* Panel 3: The Mastery */}
          <motion.div 
            whileInView={{ backgroundColor: "#141414", color: "#E4E3E0" }}
            className="group relative flex flex-col p-10 md:p-16 bg-mercury-ink text-mercury-bg overflow-hidden transition-colors duration-500"
          >
            <div className="relative z-10">
              <span className="font-mono text-sm opacity-40 mb-6 block">03 / THE RESULT</span>
              <h2 className="font-display font-bold text-4xl mb-6 leading-tight text-white">Full operational clarity.</h2>
              <p className="text-white/60 mb-8 leading-relaxed">Teams arrive on day one with conceptual mastery. Reduced errors, faster onboarding, and procedures that stick for life.</p>
              <button className="flex items-center gap-2 text-mercury-accent font-bold tracking-widest text-xs uppercase group/btn">
                SEE THE IMPACT <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
            <div className="absolute -bottom-20 -right-20 opacity-[0.05] group-hover:opacity-[0.1] transition-opacity duration-700 select-none pointer-events-none">
              <Shield className="w-80 h-80" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Detail */}
      <section className="relative py-24 md:py-40 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-20 items-start">
            <div className="lg:w-1/2">
              <span className="font-mono text-xs uppercase tracking-[0.3em] font-bold text-mercury-accent mb-6 block">Core Capabilities</span>
              <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tighter mb-10 leading-[0.9]">Built for High-Stakes Environments.</h2>
              <div className="space-y-12">
                {[
                  { title: "Smart Extraction", desc: "AI-driven mapping of unstructured P&Ps into interactive logic flows.", icon: <Box className="w-6 h-6" /> },
                  { title: "Simulation Engine", desc: "Run digital rehearsals of critical procedures before ever touching equipment.", icon: <Zap className="w-6 h-6" /> },
                  { title: "Compliance Guard", desc: "Automated verification that every step meets your industry standards.", icon: <Shield className="w-6 h-6" /> },
                ].map((feature, i) => (
                  <motion.div 
                    key={i}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    className="flex gap-6 border-b border-mercury-ink/5 pb-8"
                  >
                    <div className="w-12 h-12 bg-mercury-ink text-mercury-bg rounded-full flex items-center justify-center shrink-0">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-2xl mb-2">{feature.title}</h3>
                      <p className="text-mercury-ink/60 leading-relaxed">{feature.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              <div className="relative aspect-square md:aspect-[4/5] bg-[#0A0B10] rounded-2xl overflow-hidden shadow-2xl border border-white/5">
                {/* Matrix Grid */}
                <div className="absolute inset-0 opacity-20" 
                  style={{ 
                    backgroundImage: 'linear-gradient(#404EED 1px, transparent 1px), linear-gradient(90deg, #404EED 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                  }} 
                />
                
                {/* Animated Scanning Line */}
                <motion.div
                  animate={{ top: ['0%', '100%', '0%'] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-mercury-accent to-transparent z-10 opacity-50"
                />

                {/* Circuit Lines (Decorative) */}
                <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 400 500">
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                    d="M 50,50 L 150,50 L 150,150 L 250,150"
                    stroke="#3B82F6" strokeWidth="1" fill="none"
                  />
                  <motion.path
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 4, repeat: Infinity, repeatDelay: 1 }}
                    d="M 350,450 L 250,450 L 250,350 L 150,350"
                    stroke="#3B82F6" strokeWidth="1" fill="none"
                  />
                </svg>

                {/* The Core System */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full">
                  {/* Background Ripples */}
                  <motion.div
                    animate={{ scale: [1, 2], opacity: [0.3, 0] }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="absolute w-40 h-40 border border-mercury-accent rounded-full"
                  />
                  
                  {/* Central Module */}
                  <motion.div 
                    animate={{ 
                      rotate: [0, 90, 180, 270, 360],
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="relative w-48 h-48 border border-white/10 rounded-full flex items-center justify-center"
                  >
                    <div className="absolute inset-2 border border-mercury-accent/20 rounded-full border-dashed" />
                    
                    {/* Glowing Nodes */}
                    {[0, 60, 120, 180, 240, 300].map((angle, i) => (
                      <motion.div
                        key={i}
                        animate={{ opacity: [0.2, 1, 0.2] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                        className="absolute w-2 h-2 bg-mercury-accent rounded-full shadow-[0_0_10px_#3B82F6]"
                        style={{
                          transform: `rotate(${angle}deg) translateY(-84px)`
                        }}
                      />
                    ))}
                  </motion.div>

                  {/* Main Animated Icon */}
                  <motion.div 
                    animate={{ 
                      scale: [1, 1.05, 1],
                      y: [-5, 5, -5]
                    }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute w-32 h-32 bg-mercury-ink rounded-3xl flex items-center justify-center border-2 border-mercury-accent shadow-[0_0_80px_-20px_rgba(59,130,246,0.8)] z-30 overflow-hidden"
                  >
                    <div className="absolute inset-0 brutal-grid opacity-10" />
                    <Zap className="w-16 h-16 text-mercury-accent fill-mercury-accent/20" />
                  </motion.div>

                  {/* Floating Data Bits */}
                  <div className="absolute inset-0 pointer-events-none">
                    {[...Array(12)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ 
                          x: 200 + (Math.random() * 100 - 50), 
                          y: 250 + (Math.random() * 100 - 50),
                          opacity: 0 
                        }}
                        animate={{ 
                          y: [null, -100 - Math.random() * 100],
                          x: [null, (Math.random() - 0.5) * 50],
                          opacity: [0, 0.8, 0] 
                        }}
                        transition={{ 
                          duration: 3 + Math.random() * 2, 
                          repeat: Infinity, 
                          delay: Math.random() * 5 
                        }}
                        className="absolute w-1 h-1 bg-mercury-accent rounded-full shadow-[0_0_5px_#3B82F6]"
                        style={{ 
                          left: `${20 + Math.random() * 60}%`,
                          top: `${20 + Math.random() * 60}%`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-mercury-ink text-mercury-bg py-24 md:py-40 px-6 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-mercury-accent via-transparent to-transparent pointer-events-none" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="font-display font-bold text-5xl md:text-8xl tracking-tighter mb-10 leading-[0.9]">Ready to evolve beyond training?</h2>
          <p className="text-xl md:text-2xl text-mercury-bg/60 mb-12 max-w-2xl mx-auto">Join the world's most sophisticated operations in simplifying complexity.</p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-mercury-accent text-white px-10 py-5 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-mercury-ink transition-all duration-300">
              Request Early Access
            </button>
            <button className="border-2 border-mercury-bg/20 px-10 py-5 text-lg font-bold uppercase tracking-widest hover:border-mercury-bg transition-all duration-300">
              Talk to Sales
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 px-6 border-t border-mercury-ink/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-mercury-ink rounded-full flex items-center justify-center text-mercury-bg skew-x-[-12deg]">
                  <span className="font-display font-bold text-lg transform skew-x-[12deg]">M</span>
                </div>
                <span className="font-display font-bold text-xl tracking-tighter">MERCURY ISLE</span>
              </div>
              <p className="text-mercury-ink/50 text-sm leading-relaxed">
                Empowering high-performance teams with semantic procedural intelligence. Born for the future of work.
              </p>
            </div>
            
            {["Platform", "Company", "Resources", "Legal"].map((col) => (
              <div key={col} className="flex flex-col gap-4">
                <span className="font-mono text-xs uppercase tracking-widest font-bold mb-2">{col}</span>
                {["Link Alpha", "Link Beta", "Link Gamma"].map((link) => (
                  <a key={link} href="#" className="text-sm opacity-60 hover:opacity-100 transition-opacity">{link}</a>
                ))}
              </div>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-10 border-t border-mercury-ink/5 text-xs font-mono uppercase tracking-widest opacity-40">
            <span>© 2024 MERCURY ISLE SYSTEMS</span>
            <div className="flex gap-8">
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
              <a href="#">Status</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
