import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Footer() {
  const { personal } = portfolioData;

  return (
    <footer className="py-12 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6 text-xs text-slate-600 dark:text-[#8B93A1]">
          
          <div className="space-y-0.5 text-center sm:text-left">
            <p className="font-semibold text-slate-900 dark:text-white">{personal.name}</p>
            <p className="text-[11px] font-mono">{personal.role}</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 font-mono text-xs">
            <a 
              href={personal.github} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-slate-900 dark:hover:text-white transition-colors"
            >
              GitHub (NitinVibe)
            </a>
            <a 
              href={personal.linkedin} 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-blue-600 dark:hover:text-white transition-colors"
            >
              LinkedIn (nitinvibe)
            </a>
            <a 
              href={`mailto:${personal.email}`} 
              className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
            >
              Email tanwarsinghnitin@gmail.com
            </a>
          </div>

          <p className="text-[11px] font-mono text-slate-500 dark:text-slate-500">
            © {new Date().getFullYear()} Nitin Singh Tanwar
          </p>

        </div>
      </div>
    </footer>
  );
}
