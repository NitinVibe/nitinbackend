import React from 'react';
import { 
  ArrowRight, 
  FileText, 
  Database, 
  Server, 
  Cpu, 
  Layers, 
  Zap,
  Code
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Hero({ openResumeModal }) {
  const { personal } = portfolioData;

  return (
    <section id="home" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 md:pt-44 md:pb-32 overflow-hidden bg-tech-grid bg-radial-faint">
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Hero Typography & Actions */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-left">
            
            {/* Small Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-slate-100 dark:bg-white/[0.03] border border-slate-300 dark:border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[11px] font-mono uppercase tracking-widest text-slate-600 dark:text-[#8B93A1]">
                Available for opportunities
              </span>
            </div>

            {/* Main Heading & Role */}
            <div className="space-y-2 sm:space-y-3">
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tighter text-slate-900 dark:text-[#F5F7FA] leading-[1.08]">
                Hi, I'm <br />
                <span className="text-slate-900 dark:text-white">
                  {personal.name}.
                </span>
              </h1>
              
              <p className="text-lg sm:text-2xl font-semibold text-emerald-600 dark:text-emerald-400 tracking-tight">
                {personal.role}
              </p>
            </div>

            {/* Narrative / Focus Summary */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-[#8B93A1] max-w-xl leading-relaxed font-normal">
              {personal.tagline}
            </p>

            {/* Primary & Secondary CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-white dark:text-slate-950 bg-slate-900 dark:bg-white hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors duration-150 shadow-sm"
              >
                <span>View My Work</span>
                <ArrowRight size={15} />
              </a>

              <button
                onClick={openResumeModal}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white bg-slate-100 dark:bg-transparent hover:bg-slate-200 dark:hover:bg-white/[0.05] border border-slate-300 dark:border-white/[0.1] transition-colors duration-150"
              >
                <FileText size={15} className="text-slate-500 dark:text-slate-400" />
                <span>Download Resume</span>
              </button>
            </div>

            {/* Subtle Tech Line */}
            <div className="pt-4 border-t border-slate-200 dark:border-white/[0.06] flex flex-wrap items-center gap-2 sm:gap-3 text-xs font-mono text-slate-500 dark:text-[#64748B]">
              <span className="text-slate-700 dark:text-[#8B93A1] font-medium">Core Stack:</span>
              <div className="flex flex-wrap items-center gap-2">
                {personal.coreStack.map((tech, idx) => (
                  <React.Fragment key={tech}>
                    <span className="text-slate-700 dark:text-slate-300 hover:text-emerald-500 transition-colors">{tech}</span>
                    {idx < personal.coreStack.length - 1 && <span className="text-slate-300 dark:text-slate-700">·</span>}
                  </React.Fragment>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Backend Architecture Ecosystem Visual */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] sm:max-w-[400px] aspect-square rounded-2xl p-4 sm:p-6 bg-slate-100/70 dark:bg-[#0E131A]/40 border border-slate-300/80 dark:border-white/[0.06] backdrop-blur-sm flex items-center justify-center shadow-lg dark:shadow-none">
              
              {/* Concentric Architecture Grid Rings */}
              <div className="absolute inset-6 sm:inset-8 rounded-full border border-slate-300 dark:border-white/[0.04] pointer-events-none"></div>
              <div className="absolute inset-16 sm:inset-20 rounded-full border border-dashed border-slate-400/40 dark:border-white/[0.05] pointer-events-none animate-pulse-subtle"></div>

              {/* Connecting Vector Lines SVG */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 400">
                <line x1="200" y1="200" x2="200" y2="70" stroke="currentColor" className="text-slate-300 dark:text-white/10" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="200" x2="320" y2="130" stroke="currentColor" className="text-slate-300 dark:text-white/10" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="200" x2="300" y2="300" stroke="currentColor" className="text-slate-300 dark:text-white/10" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="200" x2="100" y2="300" stroke="currentColor" className="text-slate-300 dark:text-white/10" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="200" y1="200" x2="80" y2="130" stroke="currentColor" className="text-slate-300 dark:text-white/10" strokeWidth="1.5" strokeDasharray="3 3" />
                
                <circle cx="200" cy="135" r="2.5" fill="#10B981" opacity="0.9" />
                <circle cx="260" cy="165" r="2.5" fill="#10B981" opacity="0.9" />
                <circle cx="250" cy="250" r="2.5" fill="#10B981" opacity="0.9" />
                <circle cx="150" cy="250" r="2.5" fill="#10B981" opacity="0.9" />
                <circle cx="140" cy="165" r="2.5" fill="#10B981" opacity="0.9" />
              </svg>

              {/* Central Core: Python Backend Engine */}
              <div className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 rounded-2xl bg-white dark:bg-[#0D121B] border border-emerald-500/40 flex flex-col items-center justify-center p-2 sm:p-3 shadow-xl text-center group hover:border-emerald-500 transition-all">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1">
                  <Server size={18} />
                </div>
                <span className="font-mono text-xs font-bold text-slate-900 dark:text-white tracking-wide">Python Core</span>
                <span className="text-[9px] sm:text-[10px] font-mono text-emerald-600 dark:text-emerald-400/80">Backend Engine</span>
              </div>

              {/* Node 1: FastAPI (Top) */}
              <div className="absolute top-4 sm:top-6 left-1/2 -translate-x-1/2 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#0E131A] border border-slate-300 dark:border-white/[0.08] flex items-center gap-1.5 sm:gap-2 shadow-md hover:border-emerald-500/30 transition-colors">
                <Zap size={13} className="text-emerald-500 dark:text-emerald-400" />
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-200">FastAPI</span>
              </div>

              {/* Node 2: PostgreSQL (Top-Right) */}
              <div className="absolute top-16 sm:top-20 right-2 sm:right-4 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#0E131A] border border-slate-300 dark:border-white/[0.08] flex items-center gap-1.5 sm:gap-2 shadow-md hover:border-emerald-500/30 transition-colors">
                <Database size={13} className="text-blue-500 dark:text-blue-400" />
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-200">PostgreSQL</span>
              </div>

              {/* Node 3: Redis / Cache (Bottom-Right) */}
              <div className="absolute bottom-12 sm:bottom-16 right-4 sm:right-8 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#0E131A] border border-slate-300 dark:border-white/[0.08] flex items-center gap-1.5 sm:gap-2 shadow-md hover:border-emerald-500/30 transition-colors">
                <Layers size={13} className="text-rose-500 dark:text-rose-400" />
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-200">Redis & Cache</span>
              </div>

              {/* Node 4: AI / ML (Bottom-Left) */}
              <div className="absolute bottom-12 sm:bottom-16 left-4 sm:left-8 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#0E131A] border border-slate-300 dark:border-white/[0.08] flex items-center gap-1.5 sm:gap-2 shadow-md hover:border-emerald-500/30 transition-colors">
                <Cpu size={13} className="text-amber-500 dark:text-amber-400" />
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-200">AI / ML</span>
              </div>

              {/* Node 5: REST APIs (Top-Left) */}
              <div className="absolute top-16 sm:top-20 left-2 sm:left-4 z-10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-white dark:bg-[#0E131A] border border-slate-300 dark:border-white/[0.08] flex items-center gap-1.5 sm:gap-2 shadow-md hover:border-emerald-500/30 transition-colors">
                <Code size={13} className="text-teal-500 dark:text-teal-400" />
                <span className="font-mono text-[10px] sm:text-[11px] font-medium text-slate-800 dark:text-slate-200">REST APIs</span>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
