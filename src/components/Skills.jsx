import React from 'react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { key: 'backend', title: 'Backend Development', items: skills.backend },
    { key: 'database', title: 'Databases & Storage', items: skills.database },
    { key: 'frontend', title: 'Web & Templating', items: skills.frontend },
    { key: 'dataAndLibraries', title: 'Data Extraction & Libraries', items: skills.dataAndLibraries },
    { key: 'tools', title: 'Developer Tools', items: skills.tools },
    { key: 'currentlyLearning', title: 'Currently Expanding', items: skills.currentlyLearning },
  ];

  return (
    <section id="skills" className="py-20 sm:py-24 md:py-32 border-t border-slate-200 dark:border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-xl mb-12 sm:mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 dark:text-emerald-500 font-semibold">
            Capabilities / Stack
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-[#F5F7FA]">
            Technical <br className="hidden sm:inline" />
            <span className="text-slate-500 dark:text-[#8B93A1]">capabilities.</span>
          </h2>
        </div>

        {/* Minimal Category Rows / Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {categories.map((cat, idx) => (
            <div 
              key={cat.key} 
              className="space-y-4 pb-6 border-b sm:border-b-0 border-slate-200 dark:border-white/[0.06]"
            >
              <h3 className="text-xs font-mono uppercase tracking-wider text-slate-700 dark:text-[#8B93A1] font-semibold pb-2 border-b border-slate-200 dark:border-white/[0.08] flex items-center justify-between">
                <span>{cat.title}</span>
                <span className="text-[10px] text-emerald-600 dark:text-emerald-500 font-mono">0{idx + 1}</span>
              </h3>

              <div className="space-y-3 pt-1">
                {cat.items.map((skill, i) => (
                  <div key={i} className="group">
                    <div className="flex items-baseline justify-between">
                      <span className="text-sm font-semibold text-slate-900 dark:text-[#F5F7FA] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        {skill.name}
                      </span>
                    </div>
                    {skill.desc && (
                      <p className="text-xs text-slate-500 dark:text-[#8B93A1] mt-0.5 leading-relaxed">
                        {skill.desc}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
