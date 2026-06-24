"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { motion, type Variants } from "framer-motion";

// Shared scroll-reveal for each paginated section.
const reveal: Variants = {
  hidden: { opacity: 0, y: 60 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const sectionMotion = {
  variants: reveal,
  initial: "hidden" as const,
  whileInView: "show" as const,
  viewport: { once: false, amount: 0.2 },
};

export default function Home() {
  // State for dynamic enclave attestation latency simulation
  const [latency, setLatency] = useState(1.4);
  // State for simulated console
  const [promptInput, setPromptInput] = useState("score_credit --address=0x68f1…3a89");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "SYS // BOOTING NITRO ENCLAVE...",
    "SYS // XORR TEE ATTESTATION VERIFIED",
    "SYS // SEAL KEY SERVERS ONLINE"
  ]);
  const [isProcessing, setIsProcessing] = useState(false);
  // Bento grid data visualization state (active bar indices for pulse)
  const [activeBar, setActiveBar] = useState(3);

  // Dynamic system status pulse
  useEffect(() => {
    const interval = setInterval(() => {
      setLatency(prev => {
        const change = (Math.random() - 0.5) * 0.2;
        const next = parseFloat((prev + change).toFixed(2));
        return next > 0.8 && next < 1.8 ? next : prev;
      });
      setActiveBar(prev => (prev + 1) % 6);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  const handleTerminalSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptInput.trim() || isProcessing) return;

    setIsProcessing(true);
    const newLogs = [...terminalLogs, `> ${promptInput}`];
    setTerminalLogs(newLogs);
    setPromptInput("");

    setTimeout(() => {
      setTerminalLogs(prev => [
        ...prev,
        "SCORING INSIDE ENCLAVE...",
        "✔ INPUTS SEALED — NEVER TOUCH CHAIN",
        `✔ SIGNED SCORE RETURNED (ATTEST: ${latency}ms)`
      ]);
      setIsProcessing(false);
    }, 1200);
  };

  return (
    <div className="relative min-h-screen bg-[#0c0c0c] text-[#ebebeb] overflow-x-hidden selection:bg-lime-accent selection:text-black">
      
      {/* Decorative Radial Glowing Spheres */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-lime-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-emerald-glow/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 right-10 w-[300px] h-[300px] bg-lime-accent/10 rounded-full blur-[100px] pointer-events-none animate-pulse-slow" />

      {/* Floating Shell Container */}
      <div className="relative w-full bg-[#0c0c0c] overflow-hidden flex flex-col min-h-screen">
        
        {/* Subtle grid pattern background */}
        <div className="absolute inset-0 bg-grid pointer-events-none opacity-80" />
        
        {/* Grainy Noise Overlay */}
        <div className="absolute inset-0 bg-noise pointer-events-none" />

        <Header />

        {/* Hero Section */}
        <motion.section {...sectionMotion} className="relative z-10 pt-16 pb-20 snap-start min-h-screen">
          <div className="w-full max-w-7xl mx-auto flex flex-col items-center text-center">
            {/* Top Badge */}
            <div className="flex justify-center mb-8">
              <span className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[rgba(204,255,0,0.3)] bg-[rgba(204,255,0,0.05)] text-[#CCFF00] text-xs font-mono font-semibold uppercase tracking-wider shadow-[0_0_20px_rgba(204,255,0,0.15)] backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-pulse-ring absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#CCFF00]"></span>
                </span>
                Sui Developer Hackathon 2026 (Built on Sui)
              </span>
            </div>

            {/* H1 Heading */}
            <h1 className="font-sans font-extrabold text-4xl sm:text-6xl md:text-7xl xl:text-[5.5rem] tracking-[-0.05em] leading-[1.05] text-[#ebebeb] max-w-5xl mb-6 mx-auto">
              Buy Now. <br />
              <span className="italic bg-gradient-to-r from-lime-accent via-emerald-glow to-white bg-clip-text text-transparent drop-shadow-[0_0_25px_rgba(204,255,0,0.3)]">
                Pay Never.
              </span>
            </h1>

            {/* Subheadline */}
            <p className="font-sans text-white/60 text-lg md:text-xl max-w-2xl mb-10 leading-relaxed mx-auto">
              Private consumer credit on Sui. Deposit collateral, let DeepBook yield pay your purchases off, and keep your principal — your finances stay shielded inside a TEE.
            </p>

            {/* Two CTAs Side-by-Side */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 w-full sm:w-auto">
              <Link
                href={process.env.NEXT_PUBLIC_APP_URL || "https://app.xorr.finance"}
                className="relative group overflow-hidden bg-lime-accent text-black font-sans font-black text-sm py-4 px-8 rounded-full shadow-[0_0_35px_rgba(204,255,0,0.35)] hover:scale-105 active:scale-95 hover:shadow-[0_0_45px_rgba(204,255,0,0.5)] transition-all duration-300 flex items-center justify-center"
              >
                <span className="absolute inset-0 bg-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
                <span className="relative z-10 flex items-center gap-2">
                  Launch App <span className="font-sans font-normal">→</span>
                </span>
              </Link>
              <a href="#methodology" className="inline-flex items-center justify-center font-sans font-semibold rounded-full px-8 py-4 border border-white/10 backdrop-blur-md bg-white/3 hover:bg-white/7 text-white text-sm transition-all duration-300">
                How It Works
              </a>
            </div>

            {/* App dashboard preview with premium hardware shell */}
            <div className="relative w-full max-w-[1240px] mx-auto group mt-4 md:mt-6 z-10">
              {/* Soft Ambient glowing backlight behind the mockup */}
              <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[70%] h-[70%] bg-lime-accent/10 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />
              <div className="absolute bottom-4 left-1/3 w-[50%] h-[50%] bg-emerald-glow/8 rounded-full blur-[120px] pointer-events-none" />

              {/* Premium outer device panel */}
              <div className="glass-panel rounded-[2rem] p-3 shadow-[0_0_80px_rgba(0,0,0,0.9)] relative overflow-hidden border border-white/10 transition-all duration-500 hover:border-lime-accent/20">
                {/* Internal window control header */}
                <div className="flex items-center justify-between px-6 py-3 bg-[#0a0a0a]/50 border-b border-white/5 font-mono text-[10px] text-white/40 tracking-wider">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <span>XORR_APP // BUY_NOW_PAY_NEVER</span>
                  <span className="text-lime-accent font-bold">SHIELDED SESSION</span>
                </div>
                
                {/* Image box */}
                <div className="relative w-full rounded-xl overflow-hidden border border-white/10 bg-black">
                  <img
                    src="/swap-preview.png"
                    alt="XORR Buy Now Pay Never dashboard — private credit line, collateral, and yield-funded repayment"
                    className="w-full h-auto block transition-transform duration-700 hover:scale-[1.01]"
                  />
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Bento Grid Features */}
        <motion.section id="features" {...sectionMotion} className="relative z-10 py-16 border-t border-white/5 snap-start min-h-screen flex flex-col justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div>
                <span className="font-mono text-[10px] tracking-[0.25em] text-lime-accent uppercase bg-lime-accent/10 border border-lime-accent/20 px-3.5 py-1.5 rounded-full">
                  PRIVATE BY ARCHITECTURE
                </span>
                <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight text-[#ebebeb] mt-4 leading-tight">
                  Consumer credit that no one can see
                </h2>
              </div>
              <p className="font-sans text-white/50 text-sm md:text-base max-w-xl leading-relaxed">
                A TEE scores your credit privately, collateral earns DeepBook yield, and that yield quietly pays your purchases off — your income, debts, and spending never hit the public ledger.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              
              {/* Private Credit Scoring Card (2x2) */}
              <div className="md:col-span-2 md:row-span-2 glass-panel rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between hover:border-lime-accent/40 transition-colors duration-300 group min-h-[440px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-lime-accent uppercase px-3 py-1 bg-lime-accent/10 border border-lime-accent/20 rounded-full font-bold">
                      PRIVATE CREDIT SCORING
                    </span>
                    <span className="font-mono text-[11px] text-white/30">TEE // 2x2</span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl md:text-3xl text-white tracking-tight leading-snug">
                    Your score, computed in the dark.
                  </h3>
                  <p className="font-sans text-white/60 text-sm mt-3 max-w-md leading-relaxed">
                    An AWS Nitro enclave reads your on-chain history, scores your creditworthiness, and returns a signed result — inputs are Seal-encrypted and never leave the TEE. The score unlocks an under-collateralized line without exposing a thing.
                  </p>
                </div>

                {/* Enclave scoring pipeline visual */}
                <div className="mt-8 p-4 bg-[#0a0a0a]/50 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col gap-4">
                  <div className="flex justify-between items-center gap-2 relative z-10">
                    {["Connect", "Seal", "Enclave", "Score", "Attest", "Unlock"].map((agent, i) => (
                      <div
                        key={agent}
                        className={`flex-1 p-2 rounded-xl text-center font-mono text-[10px] border transition-all duration-300 ${
                          activeBar === i % 6
                            ? "bg-lime-accent text-black border-lime-accent shadow-[0_0_15px_rgba(204,255,0,0.4)] font-bold scale-105"
                            : "bg-white/3 text-white/40 border-white/5"
                        }`}
                      >
                        {agent}
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between items-center bg-white/3 rounded-xl p-3 border border-white/5 relative z-10">
                    <span className="font-mono text-[9px] text-white/40">ENCLAVE STATUS</span>
                    <span className="font-mono text-[10px] text-lime-accent font-bold animate-pulse">
                      ✦ ATTESTATION VERIFIED ON SUI
                    </span>
                  </div>
                </div>
              </div>

              {/* Lend & Borrow Card (1x2) */}
              <div className="md:row-span-2 glass-panel rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between hover:border-lime-accent/40 transition-colors duration-300 group min-h-[440px]">
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-emerald-glow uppercase px-3 py-1 bg-emerald-glow/10 border border-emerald-glow/20 rounded-full font-bold">
                      LEND & BORROW
                    </span>
                    <span className="font-mono text-[11px] text-white/30">POOL</span>
                  </div>
                  <h3 className="font-sans font-bold text-2xl text-white tracking-tight leading-tight">
                    A money market on Sui.
                  </h3>
                  <p className="font-sans text-white/60 text-xs mt-3 leading-relaxed">
                    Deposit collateral into the XORR pool to open a credit line. Borrow over-collateralized today, or unlock an under-collateralized line with your private TEE score — all in Move.
                  </p>
                </div>

                {/* Live pool health swatches */}
                <div className="space-y-2.5 mt-6">
                  {[
                    { name: "Collateral Deposited", status: "LIVE", color: "text-emerald-glow" },
                    { name: "Over-Collateralized Loans", status: "OPEN", color: "text-emerald-glow" },
                    { name: "Under-Collateralized Line", status: "TEE", color: "text-emerald-glow" },
                    { name: "Health Factor", status: "SAFE", color: "text-emerald-glow" }
                  ].map((rule, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-white/3 border border-white/5">
                      <span className="text-[11px] font-sans text-white/80">{rule.name}</span>
                      <span className={`font-mono text-[10px] font-bold ${rule.color}`}>{rule.status}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Shielded Payments Card (1x1) */}
              <div className="glass-panel rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between hover:border-lime-accent/40 transition-colors duration-300 group min-h-[210px]">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/40 uppercase">SHIELDED PAYMENTS</span>
                  </div>
                  <h4 className="font-sans font-bold text-lg text-white mt-4 leading-tight">Pay without an audience</h4>
                  <p className="font-sans text-white/50 text-xs leading-relaxed mt-2">
                    Every purchase is Seal-encrypted — amount, merchant, and borrower stay hidden on-chain.
                  </p>
                </div>
                <div className="mt-4 p-2.5 rounded-lg bg-white/3 border border-white/5">
                  <code className="text-[10px] text-lime-accent font-mono">seal.encrypt(&quot;payment&quot;)</code>
                </div>
              </div>

              {/* Pay-Never Yield Card (1x1) */}
              <div className="relative overflow-hidden bg-lime-accent rounded-[2.5rem] p-8 shadow-lg flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 group min-h-[210px]">
                {/* Noise overlay */}
                <div className="absolute inset-0 bg-noise opacity-30 pointer-events-none" />
                
                <div className="relative z-10">
                  <span className="font-mono text-[9px] font-bold text-black/50 tracking-[0.2em] uppercase">PAY-NEVER YIELD</span>
                  <h3 className="font-sans font-black text-xl text-black tracking-tight leading-tight mt-4">
                    YOUR YIELD PAYS. YOU KEEP THE PRINCIPAL.
                  </h3>
                </div>

                <div className="relative z-10 flex items-center justify-between mt-4 border-t border-black/10 pt-3">
                  <span className="font-mono text-[10px] font-bold text-black">Built on Sui</span>
                  <span className="text-black text-xl font-bold font-sans">→</span>
                </div>
              </div>

            </div>
          </div>
        </motion.section>

        {/* Interactive Terminal Sandbox Section */}
        <motion.section id="terminal" {...sectionMotion} className="relative z-10 py-16 border-t border-white/5 snap-start min-h-screen flex flex-col justify-center">
          <div className="w-full max-w-7xl mx-auto">
            <div className="max-w-4xl mx-auto flex flex-col items-center text-center mb-12">
              <span className="font-mono text-[10px] tracking-[0.25em] text-lime-accent uppercase bg-lime-accent/10 border border-lime-accent/20 px-3.5 py-1.5 rounded-full mb-4">
                ENCLAVE SANDBOX
              </span>
              <h2 className="font-sans font-bold text-3xl md:text-5xl tracking-tight text-[#ebebeb]">
                Run a private credit score
              </h2>
              <p className="font-sans text-white/50 text-sm md:text-base mt-3 max-w-xl">
                Send a scoring request into the TEE. Inputs are sealed before they reach the enclave — only a signed score comes back out.
              </p>
            </div>

            <div className="max-w-3xl mx-auto relative">
              {/* Soft background glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-lime-accent/5 rounded-full blur-[100px] pointer-events-none" />

              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] glass-panel rounded-[2rem] p-6 shadow-2xl flex flex-col overflow-hidden">
                {/* Header inside Mockup */}
                <div className="flex items-center justify-between border-b border-white/5 pb-4 mb-4 font-mono text-[9px] tracking-widest text-white/40">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                    <div className="w-2.5 h-2.5 rounded-full bg-lime-accent" />
                  </div>
                  <span>ENCLAVE_SESSION // SEALED_INPUTS</span>
                  <span>ATTEST // {latency}ms</span>
                </div>

                {/* Console logs */}
                <div className="flex-1 font-mono text-xs text-white/80 space-y-2 overflow-y-auto pr-1 flex flex-col justify-end">
                  {terminalLogs.map((log, idx) => (
                    <div key={idx} className={`${log.startsWith(">") ? "text-lime-accent font-semibold" : "text-white/60"}`}>
                      {log}
                    </div>
                  ))}
                  {isProcessing && (
                    <div className="text-lime-accent flex items-center gap-1.5 animate-pulse">
                      <span className="w-2 h-2 rounded-full bg-lime-accent animate-ping" />
                      SCORING INSIDE ENCLAVE...
                    </div>
                  )}
                </div>

                {/* Form Input inside Mockup */}
                <form onSubmit={handleTerminalSubmit} className="mt-4 border-t border-white/5 pt-4 flex gap-2">
                  <span className="font-mono text-lime-accent text-sm select-none">&gt;</span>
                  <input 
                    type="text" 
                    value={promptInput}
                    onChange={(e) => setPromptInput(e.target.value)}
                    disabled={isProcessing}
                    placeholder="Enter a wallet address to score..."
                    className="flex-1 font-mono text-xs bg-transparent border-none outline-none text-white placeholder-white/20 select-text"
                  />
                  <button 
                    type="submit" 
                    disabled={isProcessing}
                    className="font-mono text-[10px] font-bold text-black bg-lime-accent px-3 py-1.5 rounded-md hover:bg-lime-accent/80 transition-colors"
                  >
                    EXEC
                  </button>
                </form>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contrast Methodology Section */}
        <motion.section id="methodology" {...sectionMotion} className="relative bg-[#e5e5e5] text-black rounded-t-[4.5rem] pt-20 pb-16 mt-16 transition-all duration-500 snap-start min-h-screen">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              
              {/* Left Side: Text and Numbered List */}
              <div className="lg:col-span-7 flex flex-col items-start text-left">
                <span className="font-mono text-[10px] tracking-[0.3em] text-black/40 uppercase bg-black/5 px-3.5 py-1.5 rounded-full mb-6 font-bold">
                  XORR / HOW IT WORKS
                </span>

                <h2 className="font-sans font-bold text-4xl md:text-6xl tracking-tight text-black mb-8 leading-[0.95]">
                  Buy Now. <br />
                  Pay Never.
                </h2>

                <p className="font-sans text-black/70 text-base md:text-lg max-w-xl mb-12 leading-relaxed">
                  Lock collateral, let it earn, and let the yield clear your purchases. Your money works instead of being spent — and your finances stay private the whole way through.
                </p>

                {/* Numbered List in circles */}
                <div className="space-y-6 w-full max-w-xl">
                  {[
                    { num: "01", title: "Get scored privately", desc: "Connect your wallet. A TEE enclave scores your credit from on-chain history; the inputs are sealed and never touch the public ledger." },
                    { num: "02", title: "Deposit collateral, earn yield", desc: "Supply collateral to the XORR pool. It's routed to DeepBook, where it earns the yield that powers the Pay-Never loop." },
                    { num: "03", title: "Buy now — the yield pays it off", desc: "Make a shielded purchase against your credit line. DeepBook yield auto-repays the balance over time, and you keep your principal." }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-5 items-start">
                      <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center font-mono font-bold text-sm bg-black/5 text-black shrink-0 shadow-sm">
                        {item.num}
                      </div>
                      <div>
                        <h4 className="font-sans font-bold text-lg text-black">{item.title}</h4>
                        <p className="font-sans text-black/60 text-sm mt-1.5 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Side: Greyscale Circular Portrait & Overlay Testimonial */}
              <div className="lg:col-span-5 flex justify-center items-center relative py-12">
                {/* Decorative background visual element */}
                <div className="absolute w-[360px] h-[360px] rounded-full border border-black/5 animate-spin-slow pointer-events-none" />

                {/* Main Circle Portrait Wrapper */}
                <div className="relative w-[340px] h-[340px] md:w-[380px] md:h-[380px] rounded-full overflow-hidden border-2 border-white shadow-2xl bg-black">
                  <Image 
                    src="/cyber_pioneer.png"
                    alt="Tech Pioneer Portrait"
                    fill
                    className="object-cover object-center grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
                  />
                </div>

                {/* Glassmorphism Testimonial Card Overlay */}
                <div className="absolute -bottom-4 left-4 right-4 md:-left-6 md:right-8 bg-black/60 backdrop-blur-xl border border-white/20 rounded-3xl p-6 shadow-2xl flex flex-col gap-3 transition-transform duration-300 hover:translate-y-[-5px]">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-sans font-black text-sm text-lime-accent">PAY-NEVER LOOP</span>
                      <span className="font-mono text-[8px] text-white/40 tracking-wider">YIELD_FUNDED</span>
                    </div>
                    <span className="text-lime-accent text-xs">✦✦✦✦✦</span>
                  </div>

                  <p className="font-sans text-xs text-white/80 leading-relaxed italic">
                    &ldquo;Deposit $100, and the protocol fronts your purchase. DeepBook yield streams in to repay it over time — when it&rsquo;s settled, your principal comes back. You spent nothing.&rdquo;
                  </p>

                  <div className="flex items-center justify-between border-t border-white/10 pt-3 font-mono text-[8px] text-white/40">
                    <span>PRINCIPAL: PRESERVED</span>
                    <span>FINANCES: SHIELDED</span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </motion.section>

        {/* Footer section */}
        <Footer />

      </div>
    </div>
  );
}
